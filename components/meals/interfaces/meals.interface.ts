export interface MealProps {
    id?: number,
    title: string,
    slug: string,
    image: string,
    summary: string,
    creator: string
}

export interface MealsGridProps {
    meals: MealProps[],
}