import React from "react"
import ReactDom from "react-dom/client"

/***
 * -header
 *  -logo
 *  -Nav Item
 * -body
 *  -search 
 *  -RestaurentItems
 *    -RestaurentCards
 *      -Img,cuisine,name of dish,rating,delivery time
 * -footer
 *  -links
 *  -Copyright
 *  -Address
 *  -Contact
 * 
 */

const styleCard = {
    backgroundColor:"#f0f0f0"
}

const Header = ()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&s"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}


const RestaurentCard = (props)=>{
    const {resName,cuisine}=props;
    return(
        <div className="res-card" style={styleCard}>
            <img 
            alt="food" 
            className="res-logo"
            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"           
            />
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>4 stars</h4>
            <h4>35 mins</h4>
        </div>
    );
};

const Body = ()=>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurentCard resName = "Meghana Foods" cuisine="South Indian , Biryani"/>
                <RestaurentCard resName = "KFC" cuisine = "Burger, Instant food"/>
            </div>
        </div>
    )
}

const AppLayout = ()=>{
    return (
        <div className="app">
            <Header />
            <Body/>
        </div>
    )
}

const root = ReactDom.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)