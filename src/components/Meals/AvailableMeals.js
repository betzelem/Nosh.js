import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Pastrami on Rye",
    description:
      "The classic! Chicago style pastrami on rye bread. Served with pickle and chips.",
    price: 12.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description:
      "Breaded chicken cutlet served with mashed potatoes and veggies.",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Lox & Bagel",
    description:
      "NY style lox served on your choice of bagel. **non-dairy cream cheese only",
    price: 9.99,
  },
  {
    id: "m4",
    name: "Sushi",
    description:
      "Choose from our assortment of kosher sushi. Spicy mayo included!",
    price: 10.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
