import { useRef } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const LocalStorage = () => {
  const [localStorageValue, setLocalStorage] = useLocalStorage();
  const inputRefValue = useRef<HTMLInputElement>(null);
  const inputRefKey = useRef<HTMLInputElement>(null);
  const handleClick = (method: "get" | "set" | "remove") =>
    setLocalStorage(
      method,
      inputRefKey.current?.value as string,
      inputRefValue.current?.value
    );
  return (
    <>
      <label>key</label>
      <input ref={inputRefKey} placeholder="key" />
      <label>value</label>
      <input ref={inputRefValue} placeholder="value" />
      <button onClick={() => handleClick("set")}>
        save item to local storage
      </button>
      <button onClick={() => handleClick("get")}>
        get item from local storage
      </button>
      <button onClick={() => handleClick("remove")}>
        remove item from local storage
      </button>
      {localStorageValue && <p>{localStorageValue}</p>}
    </>
  );
};

export default LocalStorage;
