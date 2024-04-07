import { restalist } from "../utils/mockData";
import RestaurantCard  from "./RestaurantCard";
import SearchBar from "./SearchBar";
import { useState } from "react";
const Body= () => {
    const [listOfRestaurants,setListOfRestaurants]=useState(restalist);
    return (
        <div className="MainBody">
            <SearchBar/>
            <div className="TopRestaurants_pick_Section">
            <button className="top_restaurants_button" onClick={()=>{
                const filteredlist=listOfRestaurants.filter(
                    (res)=>res.info.avgRating>4
                );
                setListOfRestaurants(filteredlist);
            }}> Top Restaurants</button> 
            <h1> Restaurant's at Vaddeswaram 📌 </h1>
            </div>
            <div className="CardContainer">
                {/* Iterate over the restalist array using map */}
                {listOfRestaurants.map((restaurant, index) => (
                    // Render a Card component for each restaurant
                    <RestaurantCard key={index} info={restaurant.info} />
                ))}
            </div>

        </div>
    );
};

export default Body;