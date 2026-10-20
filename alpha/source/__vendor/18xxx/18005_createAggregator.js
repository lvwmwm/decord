// Module ID: 18005
// Function ID: 18006
// Name: createAggregator
// Dependencies: [7868]

// Module 18005 (createAggregator)
import createAggregator from "createAggregator" /* 7868 */;


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
