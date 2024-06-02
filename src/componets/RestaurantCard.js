import {CDN_URL} from "../utils/constants"

const  RestaurantCard = (probs) => {
    const {resData} = probs
    
    const {name ,cloudinaryImageId ,avgRating ,costForTwo } = resData.info
    const { deliveryTime } = resData.info.sla
    return (
        <div className="res-card" style={{backgroundColor : "#f0f0f0"}}>
            <img className="res-img" alt="res-logo" src= {CDN_URL + cloudinaryImageId}/>           
             <h3>{name}</h3>
             
             <h4>{avgRating}</h4>
             <h4>{costForTwo}</h4>
             <h4>delevery time {deliveryTime}mins</h4> 
        </div>
    )
}
export default RestaurantCard;