// Module ID: 18824
// Function ID: 18825
// Name: createAggregator
// Dependencies: [7717]

// Module 18824 (createAggregator)
import createAggregator from "createAggregator" /* 7717 */;


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
