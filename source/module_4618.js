// Module ID: 4618
// Function ID: 4619
// Dependencies: [805, 634, 4619]

// Module 4618
if (require("getNative")) {
  let fn = (arg0, arg1) => {
    const obj = { configurable: true, enumerable: false, value: null, writable: true };
    obj[2] = require(4619) /* constant */(arg1);
    return require(805) /* getNative */(arg0, "toString", obj);
  };
} else {
  fn = require("identity");
}

export default fn;
