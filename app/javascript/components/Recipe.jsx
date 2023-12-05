import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Recipe = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState({ ingredients: "" });
};

export default Recipe;
