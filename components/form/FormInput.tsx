import { Label } from "../ui/label";
import { Input } from "../ui/input";

type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
};

import React from "react";

function FormInput({
  name,
  type,
  defaultValue,
  label,
  placeholder,
}: FormInputProps) {
  return (
    <div className="mb-4">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required
        className="text-gray-500"
      ></Input>
    </div>
  );
}

export default FormInput;
