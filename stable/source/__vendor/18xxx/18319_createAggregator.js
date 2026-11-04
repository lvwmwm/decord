// Module ID: 18319
// Function ID: 18320
// Name: createAggregator
// Dependencies: [7956]

// Module 18319 (createAggregator)
import createAggregator from "createAggregator" /* 7956 */;


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
