import React, { useState } from "react";
import AddTovar from "./component/AddTovar/AddTovar";
import EditTovar from "./component/EditTovar/EditTovar";
import ListTovar from "./component/ListTovar/ListTovar";
import ProductDetails from "./component/ProductDetails/Product";

function App() {
  const [tovars, setTovars] = useState([]);
  const [editedObj, setEditedObj] = useState(null);

  function handleTovar(newContact) {
    let newProducts = [...tovars];
    newProducts.push(newContact);
    setTovars(newProducts);
  }
  function deleteTovar(id) {
    let delTovar = tovars.filter((item) => item.id !== id);
    setTovars(delTovar);
  }

  function getEditedObj(id) {
    let oneObj = tovars.find((item) => item.id === id);
    setEditedObj(oneObj);
  }

  function saveChanges(newObj) {
    let newTovars = [...tovars];
    newTovars = newTovars.map((item) => {
      if (item.id === newObj.id) {
        return newObj;
      } else {
        return item;
      }
    });
    setTovars(newTovars);
    setEditedObj(null);
  }

  function editModalClose() {
    setEditedObj(null);
  }
  const [detailProduct, setDetailProduct] = useState(null);

  function getProductDetail(id) {
    let details = tovars.find((item) => item.id === id);
    setDetailProduct(details);
  }

  function closeDetailsModal() {
    setDetailProduct(null);
  }

  return (
    <div className="App">
      <AddTovar handleTovar={handleTovar} />
      <ListTovar
        tovars={tovars}
        deleteTovar={deleteTovar}
        getEditedObj={getEditedObj}
        getProductDetail={getProductDetail}
      />

      {editedObj ? (
        <EditTovar
          editedObj={editedObj}
          saveChanges={saveChanges}
          editModalClose={editModalClose}
        />
      ) : null}
      {detailProduct ? (
        <ProductDetails
          detailProduct={detailProduct}
          closeDetailsModal={closeDetailsModal}
        />
      ) : null}
    </div>
  );
}

export default App;
