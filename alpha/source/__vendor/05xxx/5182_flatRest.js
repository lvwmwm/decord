// Module ID: 5182
// Function ID: 5183
// Name: flatRest
// Dependencies: [5183, 5193]

// Module 5182 (flatRest)
import flatRest from "flatRest" /* 5183 */;
import basePick from "basePick" /* 5193 */;


export default flatRest((arg0, arg1) => {
  let obj;
  if (null == arg0) {
    obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
