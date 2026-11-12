// Module ID: 19497
// Function ID: 19498
// Name: createAggregator
// Dependencies: [8167]

// Module 19497 (createAggregator)
import createAggregator from "createAggregator" /* 8167 */;


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
