// Module ID: 19107
// Function ID: 19108
// Name: createAggregator
// Dependencies: [7880]

// Module 19107 (createAggregator)
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
