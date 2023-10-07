import React from "react";
import { Link, useHistory } from "react-router-dom";

const AddPolicy = () => {
  const history = useHistory();

  const handleButtonClickHome = () => {
    // Redirect to the "/create" page when the button is clicked
    history.push("/create");
  };

  const handleButtonClickCar = () => {
    // Redirect to the "/create" page when the button is clicked
    history.push("/create");
  };

  return (
    <div className="create">
      <div className="btn-container">
        <button type="button" className="btn btn-success" onClick={handleButtonClickHome} style={{ fontSize: '14px', padding: '43px 10px', margin: '4px 25px' }}>Add Home Policy</button>
      </div>
      <div className="btn-container">
        <button type="button" className="btn btn-success" onClick={handleButtonClickCar} style={{ fontSize: '14px', padding: '43px 14px', margin: '50px 25px' }}>Add Car Policy</button>
      </div>
    </div>
  );
};

export default AddPolicy;
