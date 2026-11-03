// Module ID: 5956
// Function ID: 5957
// Name: flatRest
// Dependencies: [5957, 5967]

// Module 5956 (flatRest)
import flatRest from "flatRest" /* 5957 */;
import basePick from "basePick" /* 5967 */;


export default flatRest((arg0, arg1) => {
  let obj;
  if (null == arg0) {
    obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
