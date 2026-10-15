// Module ID: 17868
// Function ID: 17869
// Name: createAggregator
// Dependencies: [7755]

// Module 17868 (createAggregator)
import createAggregator from "createAggregator" /* 7755 */;


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
