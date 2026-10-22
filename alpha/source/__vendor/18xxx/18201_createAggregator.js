// Module ID: 18201
// Function ID: 18202
// Name: createAggregator
// Dependencies: [7909]

// Module 18201 (createAggregator)
import createAggregator from "createAggregator" /* 7909 */;


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
