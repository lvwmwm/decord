// Module ID: 18245
// Function ID: 18246
// Name: createAggregator
// Dependencies: [7922]

// Module 18245 (createAggregator)
import createAggregator from "createAggregator" /* 7922 */;


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
