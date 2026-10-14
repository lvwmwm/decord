// Module ID: 17628
// Function ID: 17629
// Name: createAggregator
// Dependencies: [7545]

// Module 17628 (createAggregator)
import createAggregator from "createAggregator" /* 7545 */;


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
