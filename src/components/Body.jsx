import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantsList, setRestaurantLists] = useState([]);

  // useEffect takes 2 arguments one is callback function and 2nd is dependencies array.
  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log("Error is ", error);
    }
  }, []);

  const fetchData = async () => {
    try {
      const restaurantsResponse = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.26920&lng=73.00900&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const restaurantsData = await restaurantsResponse.json();
      setRestaurantLists(
        restaurantsData?.data?.cards?.[1]?.card?.card?.gridElements
          ?.infoWithStyle?.restaurants
      );
    } catch (error) {
      console.log("error from fetchData function is ", error);
    }
  };
  if (restaurantsList?.length === 0) {
    return <Shimmer></Shimmer>;
  }
  return (
    <div className="body">
      <div className="search">Search</div>
      <button
        onClick={() => {
          const filteredRestaurants = restaurantsList?.filter(
            (restaurant) => restaurant?.info?.avgRating > 4.5
          );
          console.log(filteredRestaurants);
          setRestaurantLists(filteredRestaurants);
        }}
      >
        Top rated restaurants
      </button>
      <div className="restaurant-container">
        {restaurantsList?.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
