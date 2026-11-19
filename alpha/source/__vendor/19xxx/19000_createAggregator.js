// Module ID: 19000
// Function ID: 19001
// Name: createAggregator
// Dependencies: [7718]

// Module 19000 (createAggregator)
import createAggregator from "createAggregator" /* 7718 */;


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
