// Module ID: 4891
// Function ID: 4892
// Name: flatRest
// Dependencies: [4892, 4902]

// Module 4891 (flatRest)
import _mod4892 from "module_4892" /* 4892 */;
import basePick from "basePick" /* 4902 */;


export default _mod4892((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
