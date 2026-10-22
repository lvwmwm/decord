// Module ID: 5772
// Function ID: 5773
// Name: flatRest
// Dependencies: [5773, 5783]

// Module 5772 (flatRest)
import flatRest from "flatRest" /* 5773 */;
import basePick from "basePick" /* 5783 */;


export default flatRest((arg0, arg1) => {
  let obj;
  if (null == arg0) {
    obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
