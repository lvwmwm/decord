// Module ID: 4489
// Function ID: 4490
// Dependencies: [805, 634, 4490]

// Module 4489
if (require("getNative")) {
  let fn = (arg0, arg1) => {
    const obj = { configurable: true, enumerable: false, value: null, writable: true };
    obj[2] = require(4490) /* constant */(arg1);
    return require(805) /* getNative */(arg0, "toString", obj);
  };
} else {
  fn = require("identity");
}

export default fn;
