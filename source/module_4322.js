// Module ID: 4322
// Function ID: 37645
// Dependencies: [782, 618, 4323]

// Module 4322
if (require("getNative")) {
  let fn = (arg0, arg1) => {
    const obj = { configurable: true, enumerable: false, value: require(4323) /* constant */(arg1), writable: true };
    return require(782) /* getNative */(arg0, "toString", obj);
  };
} else {
  fn = require("identity");
}

export default fn;
