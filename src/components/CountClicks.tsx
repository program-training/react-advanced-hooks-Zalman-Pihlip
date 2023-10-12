import useCount from "../hooks/useCount";

const CountClicks = () => {
  const [count1, setCount1] = useCount(0)
  const [count2, setCount2] = useCount(0)
  return <>
  <button onClick={() => setCount1()} style={{backgroundColor: "blue", margin: "10px"}}>click</button>
  {!!count1 && <p>count: {+count1}</p>}
  <button onClick={() => setCount2()} style={{backgroundColor: "green"}}>click</button>
  {!!count2 && <p>count: {count2}</p>}

  </>;
};

export default CountClicks;