import useCount from "../hooks/useCount";

const CountOver = () => {
    const [count, setCount] = useCount(0)
  return <>
  <div style={{backgroundColor: "aqua"}} onMouseOver={() => setCount()}>over</div>
  {!!count && <p>count: {count}</p>}
  </>;
};

export default CountOver;