// Module ID: 4502
// Function ID: 4503
// Name: object
// Dependencies: [606]

// Module 4502 (object)
let object = require;
object = function object() {

};

export default (arg0) => {
  if (object(606)(arg0)) {
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
