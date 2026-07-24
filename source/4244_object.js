// Module ID: 4244
// Function ID: 37333
// Name: object
// Dependencies: [573]

// Module 4244 (object)

export default (() => {
  function object() {

  }
  return (arg0) => {
    if (object(outer1_1[0])(arg0)) {
      if (outer1_2) {
        return outer1_2(arg0);
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
})();
