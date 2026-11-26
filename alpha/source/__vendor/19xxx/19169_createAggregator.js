// Module ID: 19169
// Function ID: 19170
// Name: createAggregator
// Dependencies: [7914]

// Module 19169 (createAggregator)
import createAggregator from "createAggregator" /* 7914 */;


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
