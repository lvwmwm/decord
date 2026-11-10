// Module ID: 5967
// Function ID: 5968
// Name: flatRest
// Dependencies: [5968, 5978]

// Module 5967 (flatRest)
import flatRest from "flatRest" /* 5968 */;
import basePick from "basePick" /* 5978 */;


export default flatRest((arg0, arg1) => {
  let obj;
  if (null == arg0) {
    obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
