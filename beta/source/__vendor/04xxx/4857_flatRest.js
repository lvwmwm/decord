// Module ID: 4857
// Function ID: 4858
// Name: flatRest
// Dependencies: [4858, 4868]

// Module 4857 (flatRest)
import _mod4858 from "module_4858" /* 4858 */;
import basePick from "basePick" /* 4868 */;


export default _mod4858((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
