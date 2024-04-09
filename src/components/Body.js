import RestaurantCard  from "./RestaurantCard";
import SearchBar from "./SearchBar";
import Shimmer from "./Shimmer.js";
import { useState,useEffect } from "react";

const Body= () => {
    const [listOfRestaurants,setListOfRestaurants]=useState("");
    const[filteredRestaurants,setFilteredRestaurants]=useState("");

    useEffect(()=>{
        fetchData();

    },[]);

    const fetchData = async () => {
        try {
          const data = await fetch(
            "https://foodfire.onrender.com/api/restaurants?lat=16.5061943&lng=80.6479953&page_type=DESKTOP_WEB_LISTING");

          const json = await data.json();
    
    
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
          setFilteredRestaurants(resData);
        } catch (error) {
          console.log(error);
        }
    }
    



    if (listOfRestaurants?.length === 0) {
        //console.log(0);
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
            </div>
            </>
        );
    
        
    }
    else{
        const search_filter=()=>{
            //console.log(search_text.value);
            const filtered = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(search_text.value.toLowerCase()));
            setFilteredRestaurants(filtered);
            console.log(filtered);

        };

    return (
        <div className="MainBody">
            <div className="search">
            <form action="#">
                <input id="search_text" className="searchbar" name="search" placeholder="Search for restaurants" />
            </form>
            <button onClick={search_filter}>
                Search
            </button>
        </div>
            <div className="TopRestaurants_pick_Section">
            <button className="top_restaurants_button" onClick={()=>{
                const filteredlist=listOfRestaurants.filter(
                    (res)=>res.info.avgRating>4
                );
                setFilteredRestaurants(filteredlist);
            }}> Top Restaurants</button> 
            <h1> Restaurant's at Vijayawada 📌 </h1>
            </div>
            <div className="CardContainer">
                {/* Iterate over the restalist array using map */}
                {filteredRestaurants.map((restaurant, index) => (
                    // Render a Card component for each restaurant
                    <RestaurantCard key={index} info={restaurant.info} />
                ))}
            </div>

        </div>
    );
}
};

export default Body;