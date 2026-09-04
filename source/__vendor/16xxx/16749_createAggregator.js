// Module ID: 16749
// Function ID: 16750
// Name: createAggregator
// Dependencies: [8362]

// Module 16749 (createAggregator)
import createAggregator from "createAggregator" /* 8362 */;


export default createAggregator((arg0, arg1, arg2) => {
  let num = 1;
  if (arg2) {
    num = 0;
  }
  let arr = arg0[num];
  arr = arr.push(arg1);
}, () => {
  const items = [[], []];
  return items;
});
