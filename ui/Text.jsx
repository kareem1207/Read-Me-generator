import { useReducer, useState } from "react";
import { Dropdown } from "../components/Dropdown";

export const Text = () => {

    //* Variables
    const initial_state = {
        texts: [],
    };
    const modes = ["title", "paragraph", "sub title","image"];
    const [mode, setMode] = useState("");
    const [textValue, setTextValue] = useState(""); 
    const [state, dispatch] = useReducer(reducer, initial_state);

    //* Functions
    function reducer(state, action) {
        switch (action.type) {
            case "title":
                return { ...state, texts: [...state.texts, "# " + action.value] };
            case "paragraph":
                return { ...state, texts: [...state.texts, action.value] };
            case "sub title":
                return { ...state, texts: [...state.texts, "## " + action.value] };
            case "image":
                return { ...state, texts: [...state.texts, `![${action.value}](${ action.value})`] };
            default:
                throw new Error(`Please ${action.value==="" ? "Please enter any text and select an option ":"Please select an option "} `)
        }
    }
    const handleSubmit = () => {
        if (textValue.trim() === "") return; 
        dispatch({ type: mode, value: textValue });
        setTextValue(""); 
    };

    return (
        <>
            <Dropdown items={modes} setMainMode={setMode} />
            <textarea
                style={{ color: "black" }}
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)} 
            />
            <button type="button" onClick={handleSubmit}>Add</button>
            <div>
                <h3>Current Texts:</h3>
                <ul>
                    {state.texts.map((text, index) => ( 
                        <li key={index}>{text}</li>
                    ))}
                </ul>
            </div>
        </>
    );
};