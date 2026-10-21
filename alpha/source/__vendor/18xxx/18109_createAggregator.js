// Module ID: 18109
// Function ID: 18110
// Name: createAggregator
// Dependencies: [7900]

// Module 18109 (createAggregator)
import createAggregator from "createAggregator" /* 7900 */;


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
