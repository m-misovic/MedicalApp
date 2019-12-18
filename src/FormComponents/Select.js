import React from "react";

const Select = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}> {props.title} </label>
      <select
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        className="form-control"
      >
        <option value="" disabled>
          {props.placeholder}
        </option>
        <option value={1} label="Muški">
          Muški
        </option>
        <option value={2} label="Ženski">
          Ženski
        </option>
      </select>
    </div>
  );
};

export default Select;
