import React from "react";

const AddTovar = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
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
  const handleAdd = () => {
    if (
      !name.trim() ||
      !price.trim() ||
      !image.trim() ||
      !year.trim() ||
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
      id: Date.now(),
    };
    setName("");
    handleName(newName);
  };
  return (
    <div>
      <h2>Add TODO Component</h2>
      <input type="text" onChange={handleName} value={task} />
      <input type="text" onChange={handleCategory} value={name} />
      <input type="text" onChange={handlePrice} value={name} />
      <input type="text" onChange={handleImage} value={name} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddTovar;
