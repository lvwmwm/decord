// Module ID: 16982
// Function ID: 16983
// Name: createAggregator
// Dependencies: [8108]

// Module 16982 (createAggregator)
import createAggregator from "createAggregator" /* 8108 */;


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
