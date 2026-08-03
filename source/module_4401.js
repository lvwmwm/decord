// Module ID: 4401
// Function ID: 4402
// Dependencies: [805, 634, 4402]

// Module 4401
if (require("getNative")) {
  let fn = (arg0, arg1) => {
    const obj = { configurable: true, enumerable: false, value: null, writable: true };
    obj[2] = require(4402) /* constant */(arg1);
    return require(805) /* getNative */(arg0, "toString", obj);
  };
} else {
  fn = require("identity");
}

export default fn;
