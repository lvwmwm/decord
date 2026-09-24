// Module ID: 4930
// Function ID: 4931
// Name: flatRest
// Dependencies: [4931, 4941]

// Module 4930 (flatRest)
import _mod4931 from "module_4931" /* 4931 */;
import basePick from "basePick" /* 4941 */;


export default _mod4931((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
