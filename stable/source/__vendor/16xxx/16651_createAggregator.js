// Module ID: 16651
// Function ID: 16652
// Name: createAggregator
// Dependencies: [7887]

// Module 16651 (createAggregator)
import createAggregator from "createAggregator" /* 7887 */;


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
