// Module ID: 17912
// Function ID: 17913
// Name: createAggregator
// Dependencies: [7759]

// Module 17912 (createAggregator)
import createAggregator from "createAggregator" /* 7759 */;


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
