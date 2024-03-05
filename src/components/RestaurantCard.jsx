import {restaurantCardImgUrl} from '../data/const'
const RestaurantCard = ({ resData }) => {
  const info = resData?.info;
  const sla = resData?.info?.sla;
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-card-image"
        src={
          restaurantCardImgUrl +
          info?.cloudinaryImageId
        }
      />
      <h3 className="restaurant-card-name">{info?.name}</h3>
      <h4>{info?.cuisines?.join(", ")}</h4>
      <h4>{info?.avgRating} stars</h4>
      <h4>{info?.costForTwo}</h4>
      <h4>{sla?.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
