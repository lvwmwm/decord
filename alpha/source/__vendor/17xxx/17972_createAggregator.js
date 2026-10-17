// Module ID: 17972
// Function ID: 17973
// Name: createAggregator
// Dependencies: [7805]

// Module 17972 (createAggregator)
import createAggregator from "createAggregator" /* 7805 */;


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
