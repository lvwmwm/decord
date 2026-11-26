// Module ID: 6133
// Function ID: 6134
// Name: flatRest
// Dependencies: [6134, 6144]

// Module 6133 (flatRest)
import flatRest from "flatRest" /* 6134 */;
import basePick from "basePick" /* 6144 */;


export default flatRest((arg0, arg1) => {
  let obj;
  if (null == arg0) {
    obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
