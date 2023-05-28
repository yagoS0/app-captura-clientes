import React, { InputHTMLAttributes, useEffect, useRef } from "react";

import { useField } from "@unform/core";

import { Container } from "./style";

interface Props {
  name: string;
}

function Input({ name, ...rest }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <input defaultValue={defaultValue} ref={inputRef} {...rest} />
    </Container>
  );
}

export default Input;
