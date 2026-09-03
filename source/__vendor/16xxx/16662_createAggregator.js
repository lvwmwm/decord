// Module ID: 16662
// Function ID: 16663
// Name: createAggregator
// Dependencies: [8722]

// Module 16662 (createAggregator)
import createAggregator from "createAggregator" /* 8722 */;


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
