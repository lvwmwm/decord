// Module ID: 17313
// Function ID: 17314
// Name: createAggregator
// Dependencies: [5924]

// Module 17313 (createAggregator)
import createAggregator from "createAggregator" /* 5924 */;


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
