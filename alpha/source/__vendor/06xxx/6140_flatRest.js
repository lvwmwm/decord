// Module ID: 6140
// Function ID: 6141
// Name: flatRest
// Dependencies: [6141, 6151]

// Module 6140 (flatRest)
import flatRest from "flatRest" /* 6141 */;
import basePick from "basePick" /* 6151 */;


export default flatRest((arg0, arg1) => {
  let obj;
  if (null == arg0) {
    obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
