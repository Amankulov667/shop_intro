import React, { useState } from "react";

const AddTovar = ({ handleTovar }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleImage = (e) => {
    setImage(e.target.value);
  };
  const handleDesc = (e) => {
    setDesc(e.target.value);
  };
  const handleAdd = () => {
    if (
      !name.trim() ||
      !category.trim() ||
      !price.trim() ||
      !image.trim() ||
      !desc.trim()
    ) {
      alert("Input is emply!");
      return;
    }
    const newTovar = {
      name: name,
      category: category,
      price: price,
      img: image,
      desc: desc,
      id: Date.now(),
    };
    setName("");
    setCategory("");
    setPrice("");
    setImage("");
    setDesc("");
    handleTovar(newTovar);
  };
  return (
    <div>
      <h2>Add TODO Component</h2>
      <input
        type="text"
        onChange={handleName}
        value={name}
        placeholder="name"
      />
      <input
        type="text"
        onChange={handleCategory}
        value={category}
        placeholder="category"
      />
      <input
        type="number"
        onChange={handlePrice}
        value={price}
        placeholder="price"
      />
      <input
        type="text"
        onChange={handleImage}
        value={image}
        placeholder="image"
      />
      <input
        type="text"
        onChange={handleDesc}
        value={desc}
        placeholder="description"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddTovar;
