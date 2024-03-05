const RestaurantCard = ({ resData }) => {
  const info = resData?.info;
  const sla = resData?.info?.sla;
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-card-image"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660,e_grayscale/" +
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
