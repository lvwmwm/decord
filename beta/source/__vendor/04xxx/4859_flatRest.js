// Module ID: 4859
// Function ID: 4860
// Name: flatRest
// Dependencies: [4860, 4870]

// Module 4859 (flatRest)
import _mod4860 from "module_4860" /* 4860 */;
import basePick from "basePick" /* 4870 */;


export default _mod4860((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
