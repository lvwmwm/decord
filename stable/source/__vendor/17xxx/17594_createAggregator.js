// Module ID: 17594
// Function ID: 17595
// Name: createAggregator
// Dependencies: [7534]

// Module 17594 (createAggregator)
import createAggregator from "createAggregator" /* 7534 */;


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
