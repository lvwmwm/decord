// Module ID: 4889
// Function ID: 4890
// Name: flatRest
// Dependencies: [4890, 4900]

// Module 4889 (flatRest)
import _mod4890 from "module_4890" /* 4890 */;
import basePick from "basePick" /* 4900 */;


export default _mod4890((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
