// Module ID: 16649
// Function ID: 16650
// Name: createAggregator
// Dependencies: [7883]

// Module 16649 (createAggregator)
import createAggregator from "createAggregator" /* 7883 */;


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
