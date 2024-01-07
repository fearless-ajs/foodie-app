import classes from './meals-grid.module.css';
import MealItem from '@/components/meals/meal-item';
import {MealsGridProps} from '@/components/meals/interfaces/meals.interface';


export default function MealsGrid({ meals }: MealsGridProps){
    return (
      <ul className={classes.meals}>
          {meals.map((meal) => (
            <li key={meal.id}>
                <MealItem {...meal} />
            </li>
          ))}
      </ul>
    );
}