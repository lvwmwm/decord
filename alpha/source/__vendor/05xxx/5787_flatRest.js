// Module ID: 5787
// Function ID: 5788
// Name: flatRest
// Dependencies: [5788, 5798]

// Module 5787 (flatRest)
import flatRest from "flatRest" /* 5788 */;
import basePick from "basePick" /* 5798 */;


export default flatRest((arg0, arg1) => {
  let obj;
  if (null == arg0) {
    obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
