export interface MealProps {
    id?: number,
    title: string,
    slug: string,
    image: string,
    summary: string,
    creator: string,
    creator_email?: string,
    instructions: string | TrustedHTML,
}

export interface MealsGridProps {
    meals: MealProps[],
}