import { useState, useCallback } from "react";

export const useBooleanState = (initialValue?: boolean) => {
  const [value, setValue] = useState(Boolean(initialValue));

  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue(!value), [value]);

  return {
    value,
    setTrue,
    setFalse,
    toggle,
  };
};
