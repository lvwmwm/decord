// Module ID: 17461
// Function ID: 17462
// Name: createAggregator
// Dependencies: [5925]

// Module 17461 (createAggregator)
import createAggregator from "createAggregator" /* 5925 */;


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
