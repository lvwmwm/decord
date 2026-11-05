// Module ID: 5973
// Function ID: 5974
// Name: flatRest
// Dependencies: [5974, 5984]

// Module 5973 (flatRest)
import flatRest from "flatRest" /* 5974 */;
import basePick from "basePick" /* 5984 */;


export default flatRest((arg0, arg1) => {
  let obj;
  if (null == arg0) {
    obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
