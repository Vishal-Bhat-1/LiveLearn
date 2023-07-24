import React from 'react'

export default function Checklist({ listItems, checked, setChecked }) {

    const checkItem = (id) => {
        
        var newChecked = [...checked]
        if (checked.includes(id)) {
            newChecked = newChecked.filter(c => c !== id);
            setChecked(newChecked);
        } else {

            newChecked.push(id);
            setChecked(newChecked);
        }
    }

    return (
        <div>
            {listItems.map(li => {
                return <div 
                            key={li.id} 
                            onClick={() => checkItem(li.id)}
                            style={{ background: checked.includes(li.id) ? "#cfc" : "#ccc", margin: "4px 0", padding: "4px", cursor:"pointer" }}
                        >
                    <input 
                        type="checkbox" 
                        checked={checked.includes(li.id)} 
                        style={{ marginRight: "20px" }} 
                        onChange={() => checkItem(li.id)} 
                    />
                    {li.text}
                </div>
            })}
        </div>
    )
}