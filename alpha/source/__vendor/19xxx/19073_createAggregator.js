// Module ID: 19073
// Function ID: 19074
// Name: createAggregator
// Dependencies: [8120]

// Module 19073 (createAggregator)
import createAggregator from "createAggregator" /* 8120 */;


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
