import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Recipe = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState({ ingredients: "" });

    useEffect(() => {
        const URL = `/api/v1/show/${params.id}`;
        fetch(URL)
            .then((response) => {
                if(response.ok) {
                    return response.json();
                }
            throw new Error('Network response was not ok.');
            })
        .then((response) => setRecipe(response))
        .catch(() => navigate('/recipes'));
    },[params.id]);

    const addHtmlEntities = (str) => {
        return String(str).replace(/&lt;/g, "<").replace(/&gt;/g, ">");
    };
};

export default Recipe;
