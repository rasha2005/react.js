import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
    return (
        <div className="header"> 
             <div className="Logo-container">
                <img className="logo" src="https://img.myloview.com/stickers/fast-delivery-logo-design-food-service-delivery-creative-template-with-running-burger-for-corporate-identity-fast-food-restaurant-or-cafe-vector-illustration-on-a-white-background-700-136894099.jpg"/>
             </div>
             <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
             </div>
        </div>
    )
}

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
const reslist = [
    {
    id:100,
    name : "KFC",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrXIKyhgh1ZtEpfA3fmzYZOYaNdxVZQ1QbeA&s",
    cuisines : ["burger" , "french fries" , "fried chicken"],
    avgRaiting : 4.3,
    costForTwo : 40000,
    deliveryTime : 15
    },
    {
        id:101,
        name : "pizza hut",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSQxc0d5QC2EA2-ev-cJX3J9ikz_e_qXqM1g&s",
        cuisines : ["burger" , "french fries" , "fried chicken"],
        avgRaiting : 4.3,
        costForTwo : 40000,
        deliveryTime : 15
    }

]
   

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
const AppLayout = () => {
    return (
        <div className = "app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout/>); 