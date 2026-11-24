// Module ID: 18995
// Function ID: 18996
// Name: createAggregator
// Dependencies: [7781]

// Module 18995 (createAggregator)
import createAggregator from "createAggregator" /* 7781 */;


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
