// Module ID: 19692
// Function ID: 19693
// Name: createAggregator
// Dependencies: [8233]

// Module 19692 (createAggregator)
import createAggregator from "createAggregator" /* 8233 */;


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
