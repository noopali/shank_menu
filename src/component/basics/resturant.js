
import { useState } from "react";
import Menu from "./menuapi.json";
import MenuCard from "./menucard";
import "./style.css";
//const images = Menu.images;
//const styleComponent  = {color:"red"};
// ... is a spread operator used for retrieving values excluding keys
const uniqueList = [...new Set(Menu.map((curElem)=>{return curElem.category;
}))];
const Resturant = ()=>{
    const [menuData,setMenuData] = useState(Menu);
    const filterItem = (category) => {
        const updatedList = Menu.filter((curElem)=>{
            return curElem.category === category;
        
        });
        setMenuData(updatedList);

    };
return <> 
<nav className="navbar">
    <div className="btn-group">
        <button className="btn-group__item" onClick={()=>filterItem("breakfast")}>Breakfast</button>
        <button className="btn-group__item" onClick={()=>filterItem("lunch")}>Lunch</button>
        <button className="btn-group__item" onClick={()=>filterItem("dinner")}>Dinner</button>
        <button className="btn-group__item" onClick={()=>filterItem("evening")}>Evening</button>
        <button className="btn-group__item" onClick={()=>setMenuData(Menu)}>All</button>
    </div>
</nav>
<MenuCard menuData = {menuData}/>

</>
};

export default Resturant;
