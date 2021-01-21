import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

const Home = () => {
  const [disabled, setDisabled] = useState(true);
  const [value, setValue] = useState();

  const handleChange = (e) => {
    setValue(e.target.value);
    value !== "" ? setDisabled(false) : setDisabled(true);
  };

  return (
    <div>
      <TextField
        id="standard-basic"
        label="Enter country"
        autoComplete="off"
        value={value}
        onChange={handleChange}
      />

      {disabled ? (
        <Link to="/" className="btn btn-danger">
          Submit
        </Link>
      ) : (
        <Link
          to={{
            pathname: `/${value}`,
          }}
          className="btn btn-danger ml-4 mt-3"
        >
          Submit
        </Link>
      )}
    </div>
  );
};

export default Home;
