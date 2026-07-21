// Module ID: 4240
// Function ID: 37284
// Name: object
// Dependencies: [705]

// Module 4240 (object)

export default () => {
  function object() {

  }
  return (arg0) => {
    if (object(closure_1[0])(arg0)) {
      if (callback) {
        return callback(arg0);
      } else {
        object.prototype = arg0;
        const prototype = object.prototype;
        const tmp5 = new object();
        object.prototype = undefined;
        return tmp5;
      }
    } else {
      return {};
    }
  };
}();
