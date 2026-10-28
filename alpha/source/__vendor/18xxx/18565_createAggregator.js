// Module ID: 18565
// Function ID: 18566
// Name: createAggregator
// Dependencies: [7959]

// Module 18565 (createAggregator)
import createAggregator from "createAggregator" /* 7959 */;


export default createAggregator((arg0, arg1, arg2) => {
  let num = 1;
  const tmp = arg2;
  if (tmp) {
    num = 0;
  }
  const arr = arg0[num];
  arr.push(arg1);
}, () => {
  const items = [[], []];
  return items;
});
