// Module ID: 19106
// Function ID: 19107
// Name: createAggregator
// Dependencies: [7880]

// Module 19106 (createAggregator)
import createAggregator from "createAggregator" /* 7880 */;


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
