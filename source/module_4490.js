// Module ID: 4490
// Function ID: 4491
// Dependencies: [805, 634, 4491]

// Module 4490
if (require("getNative")) {
  let fn = (arg0, arg1) => {
    const obj = { configurable: true, enumerable: false, value: null, writable: true };
    obj[2] = require(4491) /* constant */(arg1);
    return require(805) /* getNative */(arg0, "toString", obj);
  };
} else {
  fn = require("identity");
}

export default fn;
