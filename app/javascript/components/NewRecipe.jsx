import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NewRecipe = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instruction, setInstruction] = useState("");

    const stripHtmlEntities = (str) => {
        return String(str)
            .replace(/\n/g, "<br> <br>")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
    };

    const onChange = (event, setFunction) => {
        setFunction(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const URL = "/api/v1/recipes/create";

        if (name.length === 0 || ingredients.length === 0 || instruction.length === 0)
            return;

        const body = {
            name,
            ingredients,
            instruction: stripHtmlEntities(instruction),
        };

        const token = document.querySelector('meta[name="csrf-token"]').content;
        fetch(URL, {
            method: "POST",
            headers: {
                "X-CSRF-Token": token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then((response) => navigate(`/recipe/${response.id}`))
            .catch((error) => console.log(error.message));
    };
};

export default NewRecipe;