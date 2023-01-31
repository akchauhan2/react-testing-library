import React, { useEffect } from "react";

function Sum() {
  const [sum, setSum] = React.useState(0);
  useEffect(() => {
    setSum(6);
  }, []);
  return (
    <div>
      <h2> Sum of 2 numbers </h2>
      <h2 title="sum">{sum}</h2>
      <button data-testId="sum-btn" onClick={() => setSum(5)}>
        Add
      </button>
    </div>
  );
}

export default Sum;
