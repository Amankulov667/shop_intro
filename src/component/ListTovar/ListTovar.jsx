import React from "react";

const ListTovar = ({ tovars, deleteTovar, getEditedObj, getProductDetail }) => {
  return (
    <div>
      <h2>Products:</h2>
      <div>
        {tovars.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.category}</p>
            <img
              src={item.image}
              style={{ width: "100px", height: "120px" }}
              alt=""
            />
            <p>{item.price}сом</p>
            <button onClick={() => deleteTovar(item.id)}>Delete</button>
            <button onClick={() => getEditedObj(item.id)}>Edit</button>
            <button onClick={() => getProductDetail(item.id)}>Details</button>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListTovar;
