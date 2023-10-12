import { useState } from "react";

type UseLocalStorageReturnType = [
  string | undefined,
  (method: "get" | "set" | "remove", key: string, value?: string) => void
];

const useLocalStorage = (): UseLocalStorageReturnType => {
  const [item, setItem] = useState<string | undefined>(undefined);

  const setLocalStorage: (
    method: "get" | "set" | "remove",
    key: string,
    value?: string
  ) => void = (method, key, value) => {
    let newItem;
    switch (method) {
      case "get":
        newItem = localStorage.getItem(key);
        setItem(newItem ? newItem : undefined);
        break;
      case "remove":
        localStorage.removeItem(key);
        setItem(undefined);
        break;
      case "set":
        if (value) 
          localStorage.setItem(key, value);
          setItem(value);
        break;
      default:
        break;
    }
    if (newItem) setItem(newItem);
  };

  return [item, setLocalStorage];
};

export default useLocalStorage;
