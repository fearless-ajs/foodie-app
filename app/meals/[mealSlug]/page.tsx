import classes from './page.module.css';
import Image from 'next/image';
import {getMeal} from '@/lib/meals';
import {MealProps} from '@/components/meals/interfaces/meals.interface';
import {notFound} from 'next/navigation';

interface IMealDetailsParams {
    params: {
        mealSlug: string
    }
}
export default function MealDetailsPage({ params }: IMealDetailsParams) {
    const meal: MealProps = getMeal(params.mealSlug) as MealProps;

    if (!meal){
        notFound();
    }

    if (typeof meal.instructions === "string") {
        meal.instructions = meal.instructions.replace(/\n/g, '<br />');
    }

    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src={meal.image} fill alt={meal.title} />
                </div>
                <div className={classes.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={classes.creator}>
                        by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                    </p>
                    <p className={classes.summary}>{meal.summary}</p>
                </div>
            </header>
            <main>
                <p
                    className={classes.instructions}
                    dangerouslySetInnerHTML={{
                        __html: meal.instructions
                    }}
                ></p>
            </main>
        </>

    );
}