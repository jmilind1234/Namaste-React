import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../data/const";
import { useState } from "react";

const Body = () => {
  const [topRatedFlag, setTopRatedFlag] = useState(false);
  return (
    <div className="body">
      <div className="search">Search</div>
      <button
        onClick={() => {
          setTopRatedFlag(true);
        }}
      >
        Top rated restaurants
      </button>
      {!topRatedFlag && (
        <div className="restaurant-container">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
          ))}
        </div>
      )}
      {topRatedFlag && (
        <div className="restaurant-container">
          {restaurants
            ?.filter((restaurant) => restaurant?.info?.avgRating > 4.5)
            .map((restaurant) => (
              <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Body;
