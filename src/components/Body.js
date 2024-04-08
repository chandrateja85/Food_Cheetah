import RestaurantCard  from "./RestaurantCard";
import SearchBar from "./SearchBar";
import { useState,useEffect } from "react";
import Shimmer from "./shimmer";
const Body= () => {
    const [listOfRestaurants,setListOfRestaurants]=useState("");
    useEffect(()=>{
        fetchData();

    },[]);

    const fetchData = async () => {
        try {
          const data = await fetch(
            "https://foodfire.onrender.com/api/restaurants?lat=16.5061943&lng=80.6479953&page_type=DESKTOP_WEB_LISTING");

          const json = await data.json();
          console.log(json);
    
    
          // was showing an error of data fatching because sometime data coming from cards[1] sometime cards[2] and different on other times so me make a function and check which value of i gives data in cards[i]
          async function checkJsonData(jsonData) {
    
            for (let i = 0; i < jsonData?.data?.cards.length; i++) {
    
              // initialize checkData for Swiggy Restaurant data
              let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    
              // if checkData is not undefined then return it
              if (checkData !== undefined) {
                return checkData;
              }
            }
          }
          // call the checkJsonData() function which return Swiggy Restaurant data
          const resData = await checkJsonData(json);
    
          // update the state variable restaurants with Swiggy API data
          setListOfRestaurants(resData);
        } catch (error) {
          console.log(error);
        }
    }
    



    if (listOfRestaurants?.length === 0) {
        console.log(0);
        const shimmerItems = [];
        for (let i = 0; i < 15; i++) {
            shimmerItems.push(
                <div key={i} >
                    <Shimmer/>
                </div>
            );
        }
        return (
            
            <>
            <SearchBar/>
            <div className="TopRestaurants_pick_Section">
            <button className="top_restaurants_button" > Top Restaurants</button> 
            <h1> Restaurant's at Vijayawada 📌 </h1>
            </div>
            <div className="shimmer_contain">
                {shimmerItems}
                {console.log(shimmerItems)}

            </div>
            </>
        );
    
        
    }
    else{

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
            <h1> Restaurant's at Vijayawada 📌 </h1>
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
}
};

export default Body;