// Module ID: 4614
// Function ID: 4615
// Name: flatRest
// Dependencies: [4615, 4625]

// Module 4614 (flatRest)
import flatRest from "flatRest";


export default flatRest((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = require(4625) /* basePick */(arg0, arg1);
  }
  return obj;
});
