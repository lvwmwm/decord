// Module ID: 17533
// Function ID: 17534
// Name: createAggregator
// Dependencies: [7538]

// Module 17533 (createAggregator)
import createAggregator from "createAggregator" /* 7538 */;


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
