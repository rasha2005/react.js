import RestaurantCard from "./RestaurantCard";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
const Body = () => {

    //state variable
     const [listRestaurant , setListOfRestaurant] = useState([]);

     useEffect(() => {
        fetchData();
     } , []);

     const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5/?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );
        const json  = await data.json();

        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
     }
     if(listRestaurant.length === 0) {
        return <Shimmer/>
     }
    return(
        <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick ={() => {
            const filteredList = listRestaurant.filter((res) => res.info.avgRating > 4);
               setListOfRestaurant(filteredList);
                }} 
            >top rated restaurant</button>
        </div>
        <div className="res-container">
            {
                listRestaurant.map((restaurant) =>(
                     <RestaurantCard key={restaurant.id} resData={restaurant} />)
                )
            }
        </div>
    </div>
    )
   
}
export default Body;