// Module ID: 5997
// Function ID: 5998
// Name: flatRest
// Dependencies: [5998, 6008]

// Module 5997 (flatRest)
import flatRest from "flatRest" /* 5998 */;
import basePick from "basePick" /* 6008 */;


export default flatRest((arg0, arg1) => {
  let obj;
  if (null == arg0) {
    obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
