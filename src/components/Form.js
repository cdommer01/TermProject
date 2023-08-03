import { useEffect, useState } from "react";

export default function Form(){

    const [items, setItems] = useState(()=>{
        const savedItems = localStorage.getItem("items");
        if(savedItems){
            return JSON.parse(savedItems);
        }else{
            return[];
        }
    });

    const [item, setItem] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [currentItem, setCurrentItem] = useState({});

    useEffect(()=>{
        localStorage.setItem("items", JSON.stringify(items));
    }, [items]);

    function handleInputChange(e){
        setItem(e.target.value);
    }

    function handleEditInputChange(e){
        setCurrentItem({ ...currentItem, text: e.target.value});
        console.log(currentItem);
    }

    function handleFormSubmit(e){
        e.preventDefault();
        if(item !== ""){
            setItems([
                ...items,
                {
                    id:items.length +1,
                    text: item.trim()
                }
            ]);
        }
        setItem("");
    }

    function handleEditFormSubmit(e){
        e.preventDefault();
        handleUpdateItem(currentItem.id, currentItem);
    }

    function handleDeleteClick(id){
        const removeItem = items.filter((item)=>{
            return item.id !== id;
        });
        setItems(removeItem);
    }

    function handleUpdateItem(id, updatedItem){
        const updatedEntry = items.map((item)=>{
            return item.id === id ? updatedItem : item;
        });
        setIsEditing(false);
        setItems(updatedEntry);
    }

    function handleEditClick(item){
        setIsEditing(true);
        setCurrentItem({...item})
    }

    return(
        <div className="API">
            {isEditing ?(
            <form onSubmit={handleFormSubmit}>
                <h2>Edit items</h2>
                <label htmlFor="editItem">Edit item:</label>
                <input
                    name="item"
                    type="text"
                    placeholder="edit item"
                    value={currentItem.text}
                    onChange={handleEditInputChange}
                />
                <button type="submit" onClick={handleEditFormSubmit}>Update</button>
                <button onClick={()=> setIsEditing(false)}>Cancel</button>
            </form>
            ):(
                <form onSubmit={handleFormSubmit}>
                <h2>Add items</h2>
                <label htmlFor="item">Add item:</label>
                <input
                    name="item"
                    type="text"
                    placeholder="add an item"
                    value={item}
                    onChange={handleInputChange}
                />
                <button type="submit">Add</button>
                </form>)}
            <ul className="item-list">
                {items.map((item)=>
                    <li key={item.id}>
                        {item.text} 
                        <button onClick={()=>handleEditClick(item)}>Edit</button>
                        <button onClick={()=>handleDeleteClick(item.id)}>Delete</button>
                    </li>
                )}
            </ul>
        </div>
    )
}