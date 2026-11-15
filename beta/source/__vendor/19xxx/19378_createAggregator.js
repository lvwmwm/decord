// Module ID: 19378
// Function ID: 19379
// Name: createAggregator
// Dependencies: [8099]

// Module 19378 (createAggregator)
import createAggregator from "createAggregator" /* 8099 */;


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
