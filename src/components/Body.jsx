import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../data/const";
import { useState } from "react";

const Body = () => {
  const [restaurantsList, setRestaurantLists] = useState(restaurants);
  return (
    <div className="body">
      <div className="search">Search</div>
      <button
        onClick={() => {
          const filteredRestaurants = restaurantsList.filter(
            (restaurant) => restaurant?.info?.avgRating > 4.5
          );
          console.log(filteredRestaurants);
          setRestaurantLists(filteredRestaurants);
        }}
      >
        Top rated restaurants
      </button>
      <div className="restaurant-container">
        {restaurantsList.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
