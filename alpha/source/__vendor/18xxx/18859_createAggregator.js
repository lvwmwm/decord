// Module ID: 18859
// Function ID: 18860
// Name: createAggregator
// Dependencies: [7988]

// Module 18859 (createAggregator)
import createAggregator from "createAggregator" /* 7988 */;


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
