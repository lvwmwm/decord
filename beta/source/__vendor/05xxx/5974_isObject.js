// Module ID: 5974
// Function ID: 5975
// Name: isObject
// Dependencies: [521]

// Module 5974 (isObject)
import isObject from "isObject" /* 521 */;

function object() {

}

export default (arg0) => {
  if (isObject(arg0)) {
    if (create) {
      return create(arg0);
    } else {
      object.prototype = arg0;
      object.prototype = undefined;
      return Object.create(object.prototype);
    }
  } else {
    return {};
  }
};
