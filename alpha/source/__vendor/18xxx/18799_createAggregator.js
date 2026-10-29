// Module ID: 18799
// Function ID: 18800
// Name: createAggregator
// Dependencies: [7982]

// Module 18799 (createAggregator)
import createAggregator from "createAggregator" /* 7982 */;


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
