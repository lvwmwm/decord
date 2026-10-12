// Module ID: 5184
// Function ID: 5185
// Name: flatRest
// Dependencies: [5185, 5195]

// Module 5184 (flatRest)
import flatRest from "flatRest" /* 5185 */;
import basePick from "basePick" /* 5195 */;


export default flatRest((arg0, arg1) => {
  let obj;
  if (null == arg0) {
    obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
