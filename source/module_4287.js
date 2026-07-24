// Module ID: 4287
// Function ID: 37521
// Dependencies: [782, 618, 4288]

// Module 4287
if (require("getNative")) {
  let fn = (arg0, arg1) => {
    const obj = { configurable: true, enumerable: false, value: require(4288) /* constant */(arg1), writable: true };
    return require(782) /* getNative */(arg0, "toString", obj);
  };
} else {
  fn = require("identity");
}

export default fn;
