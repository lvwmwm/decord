// Module ID: 17590
// Function ID: 17591
// Name: createAggregator
// Dependencies: [7539]

// Module 17590 (createAggregator)
import createAggregator from "createAggregator" /* 7539 */;


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
