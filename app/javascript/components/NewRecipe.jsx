import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NewRecipe = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instruction, setInstruction] = useState("");
};

export default NewRecipe;