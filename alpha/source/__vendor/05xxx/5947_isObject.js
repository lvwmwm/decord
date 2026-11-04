// Module ID: 5947
// Function ID: 5948
// Name: isObject
// Dependencies: [521]

// Module 5947 (isObject)
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
