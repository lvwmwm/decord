// Module ID: 18910
// Function ID: 18911
// Name: createAggregator
// Dependencies: [7996]

// Module 18910 (createAggregator)
import createAggregator from "createAggregator" /* 7996 */;


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
