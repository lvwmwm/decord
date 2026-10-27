// Module ID: 18324
// Function ID: 18325
// Name: createAggregator
// Dependencies: [7925]

// Module 18324 (createAggregator)
import createAggregator from "createAggregator" /* 7925 */;


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
