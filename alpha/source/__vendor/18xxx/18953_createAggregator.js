// Module ID: 18953
// Function ID: 18954
// Name: createAggregator
// Dependencies: [7837]

// Module 18953 (createAggregator)
import createAggregator from "createAggregator" /* 7837 */;


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
