// Module ID: 19314
// Function ID: 19315
// Name: createAggregator
// Dependencies: [8070]

// Module 19314 (createAggregator)
import createAggregator from "createAggregator" /* 8070 */;


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
