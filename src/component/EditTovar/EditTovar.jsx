import React, { useState } from "react";

const EditTovar = ({ editedObj, saveChanges, editModalClose }) => {
  const [editedTovar, setEditedTovar] = useState(editedObj);
  function editTovarName(e) {
    setEditedTovar({
      ...editedTovar,
      name: e.target.value,
    });
  }
  function editTovarPrice(e) {
    setEditedTovar({
      ...editedTovar,
      price: e.target.value,
    });
  }
  function editTovarCategory(e) {
    setEditedTovar({
      ...editedTovar,
      category: e.target.value,
    });
  }
  function editTovarImage(e) {
    setEditedTovar({
      ...editedTovar,
      image: e.target.value,
    });
  }
  function editTovarDesc(e) {
    setEditedTovar({
      ...editedTovar,
      desc: e.target.value,
    });
  }

  function handleSaveChanges() {
    saveChanges(editedTovar);
  }
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 500,
        width: "300px",
        height: "300px",
        backgroundColor: "yellow",
      }}
    >
      <div>
        <h2>Edit Product</h2>
        <button onClick={() => editModalClose()}>X</button>
        <input type="text" onChange={editTovarName} value={editedTovar.name} />
        <input
          type="number"
          onChange={editTovarPrice}
          value={editedTovar.price}
        />
        <input
          type="text"
          onChange={editTovarCategory}
          value={editedTovar.category}
        />
        <input
          type="text"
          onChange={editTovarImage}
          value={editedTovar.image}
        />
        <input type="text" onChange={editTovarDesc} value={editedTovar.desc} />

        <button onClick={handleSaveChanges}>Save</button>
      </div>
    </div>
  );
};

export default EditTovar;
