// Module ID: 18179
// Function ID: 18180
// Name: createAggregator
// Dependencies: [7908]

// Module 18179 (createAggregator)
import createAggregator from "createAggregator" /* 7908 */;


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
