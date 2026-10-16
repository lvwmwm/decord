// Module ID: 17902
// Function ID: 17903
// Name: createAggregator
// Dependencies: [7758]

// Module 17902 (createAggregator)
import createAggregator from "createAggregator" /* 7758 */;


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
