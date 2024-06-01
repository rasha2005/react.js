import RestaurantCard from "./RestaurantCard";
import reslist from "../utils/mockData";

const Body = () => {
    return(
        <div className="body">
        <div className="search">search</div>
        <div className="res-container">
            {
                reslist.map((restaurant) =>(
                     <RestaurantCard key={restaurant.id} resData={restaurant} />)
                )
            }
        </div>
    </div>
    )
   
}
export default Body;