
import  {urli}  from "../utils/constants";

const RestaurantCard = (props) => {
    const { info } = props; // Destructuring info from props
    const {urlid}=urli;
    console.log(urlid);
    return (
        <div className="Card">
            <div className="FoodImg">
                <img className="cardimg" src={urlid+info.cloudinaryImageId}></img>
            </div>
            <div className="Description">
                <h3>{info.name}</h3>
                <p>{info.cuisines.join(",")}</p>
                <p>Rating:{info.avgRating}  | | Delivery Time:{info.sla.deliveryTime} Minutes</p>
                <p>{info.locality}</p>
                <span className="Button">
                    Order Now
                </span>
            </div>
            
        </div>
    );
};

export default RestaurantCard;