// Module ID: 4288
// Function ID: 37532
// Dependencies: [782, 618, 4289]

// Module 4288
if (require("getNative")) {
  let fn = (arg0, arg1) => {
    const obj = { configurable: true, enumerable: false, value: require(4289) /* constant */(arg1), writable: true };
    return require(782) /* getNative */(arg0, "toString", obj);
  };
} else {
  fn = require("identity");
}

export default fn;
