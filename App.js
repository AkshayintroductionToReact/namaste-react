import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return ( 
    <div className="header">
        <div className="logo-container">
            <img className="logo"
            src="https://th.bing.com/th/id/OIP.9hl54qFeHA_2o_PIo3JhswAAAA?w=198&h=190&c=7&r=0&o=5&dpr=1.5&pid=1.7" />
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

const ResCard = (props) =>{
    const {resName,resCuisine,resRatings,resETA,resimgLink} = props;
    return (
   <div className="restaurand-card">
    <div className="foodimg-container">
    <img className="res-img" src= {resimgLink}></img>
    </div>
<h3>{resName}</h3>
<h4>{resCuisine}</h4>
<h4>{resRatings} starts Ratings</h4>
<h4>{resETA} minutes</h4>
   </div>
        
    )
}



const Body = () => {
    return (
        <div className="body-container">
            <div className="search">Search</div>
            <div className="restaurant-container">
              <ResCard resName="KFC" resCuisine="Delicious chicken styles" resRatings="4.6" resETA= "30" resimgLink = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1uhUrzGExkTG394AnvJzf9fecbzclbLIXnQ&s" />
              <ResCard resName="MacDonalds" resCuisine="Burgers, Cakes, Shakes" resRatings="4.7" resETA= "35" resimgLink = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4458T0DWHyOvA-g8tWte0MMWpUFJhuHU3yQ&s" />
              <ResCard resName="ShreeNath Bhojanalay" resCuisine="Delicious Thalis, Juices" resRatings="5" resETA= "30" resimgLink = "https://i.pinimg.com/originals/f4/0f/df/f40fdfe7a598a6cec9cb78192869f0de.jpg" />
            </div>
        </div>
    )
}

const AppLayout = () => {
   return (
     <div className="app">
        <Header/>
        <Body/>
    </div>
   );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);