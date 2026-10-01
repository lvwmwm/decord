// Module ID: 4937
// Function ID: 4938
// Name: flatRest
// Dependencies: [4938, 4948]

// Module 4937 (flatRest)
import flatRest from "flatRest" /* 4938 */;
import basePick from "basePick" /* 4948 */;


export default flatRest((arg0, arg1) => {
  let obj;
  if (null == arg0) {
    obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
