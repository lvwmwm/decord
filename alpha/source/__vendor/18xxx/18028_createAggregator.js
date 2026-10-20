// Module ID: 18028
// Function ID: 18029
// Name: createAggregator
// Dependencies: [7872]

// Module 18028 (createAggregator)
import createAggregator from "createAggregator" /* 7872 */;


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
