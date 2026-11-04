// Module ID: 19190
// Function ID: 19191
// Name: createAggregator
// Dependencies: [8136]

// Module 19190 (createAggregator)
import createAggregator from "createAggregator" /* 8136 */;


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
