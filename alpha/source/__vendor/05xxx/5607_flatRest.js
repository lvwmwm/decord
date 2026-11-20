// Module ID: 5607
// Function ID: 5608
// Name: flatRest
// Dependencies: [5608, 5618]

// Module 5607 (flatRest)
import flatRest from "flatRest" /* 5608 */;
import basePick from "basePick" /* 5618 */;


export default flatRest((arg0, arg1) => {
  let obj;
  if (null == arg0) {
    obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
