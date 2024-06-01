
const  RestaurantCard = (probs) => {
    const {resData} = probs
    const {name ,cuisines,avgRaiting ,costForTwo ,deliveryTime} = resData
    console.log(resData);
    return (
        <div className="res-card" style={{backgroundColor : "#f0f0f0"}}>
            <img className="res-img" alt="res-logo" src= {resData.img}/>           
             <h3>{name}</h3>
             <h4>{cuisines.join(',')}</h4>
             <h4>{avgRaiting}</h4>
             <h4>{costForTwo/100}rs for two</h4>
             <h4>delevery time {deliveryTime}</h4> 
        </div>
    )
}
export default RestaurantCard;