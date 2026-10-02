// Module ID: 4938
// Function ID: 4939
// Name: flatRest
// Dependencies: [4939, 4949]

// Module 4938 (flatRest)
import flatRest from "flatRest" /* 4939 */;
import basePick from "basePick" /* 4949 */;


export default flatRest((arg0, arg1) => {
  let obj;
  if (null == arg0) {
    obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
