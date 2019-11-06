import React from 'react';
import { connect } from "react-redux";
import { removeFeature } from "../actions/index";

const handleRemove = () => {
  props.removeFeature();
};

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={handleRemove}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
