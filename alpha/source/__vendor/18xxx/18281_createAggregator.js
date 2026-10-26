// Module ID: 18281
// Function ID: 18282
// Name: createAggregator
// Dependencies: [7924]

// Module 18281 (createAggregator)
import createAggregator from "createAggregator" /* 7924 */;


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
