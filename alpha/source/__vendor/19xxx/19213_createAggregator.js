// Module ID: 19213
// Function ID: 19214
// Name: createAggregator
// Dependencies: [8087]

// Module 19213 (createAggregator)
import createAggregator from "createAggregator" /* 8087 */;


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
