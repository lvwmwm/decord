// Module ID: 4907
// Function ID: 4908
// Name: object
// Dependencies: [521]

// Module 4907 (object)
function object() {

}

export default (arg0) => {
  if (object(521)(arg0)) {
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
