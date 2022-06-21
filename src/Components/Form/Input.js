import React from "react";
import TextField from "@mui/material/TextField";

const Input = (props) => {
  const [value, setValue] = React.useState("");

  return (
    <>
      <TextField
        margin={props.margin}
        id={props.id}
        label={props.label}
        name={props.name}
        autoComplete={props.autoComplete}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    </>
  );
};

export default Input;
