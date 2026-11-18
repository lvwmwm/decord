// Module ID: 19008
// Function ID: 19009
// Name: createAggregator
// Dependencies: [7748]

// Module 19008 (createAggregator)
import createAggregator from "createAggregator" /* 7748 */;


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
