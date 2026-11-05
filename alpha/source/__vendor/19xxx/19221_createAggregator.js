// Module ID: 19221
// Function ID: 19222
// Name: createAggregator
// Dependencies: [8141]

// Module 19221 (createAggregator)
import createAggregator from "createAggregator" /* 8141 */;


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
