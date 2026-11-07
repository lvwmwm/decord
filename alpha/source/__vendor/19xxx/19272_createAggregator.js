// Module ID: 19272
// Function ID: 19273
// Name: createAggregator
// Dependencies: [8066]

// Module 19272 (createAggregator)
import createAggregator from "createAggregator" /* 8066 */;


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
