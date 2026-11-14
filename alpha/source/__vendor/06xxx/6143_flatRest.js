// Module ID: 6143
// Function ID: 6144
// Name: flatRest
// Dependencies: [6144, 6154]

// Module 6143 (flatRest)
import flatRest from "flatRest" /* 6144 */;
import basePick from "basePick" /* 6154 */;


export default flatRest((arg0, arg1) => {
  let obj;
  if (null == arg0) {
    obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
