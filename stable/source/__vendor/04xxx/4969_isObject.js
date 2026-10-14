// Module ID: 4969
// Function ID: 4970
// Name: isObject
// Dependencies: [521]

// Module 4969 (isObject)
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
