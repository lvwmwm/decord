// Module ID: 4568
// Function ID: 4569
// Name: object
// Dependencies: [606]

// Module 4568 (object)
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
