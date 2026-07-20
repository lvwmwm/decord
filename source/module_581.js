// Module ID: 581
// Function ID: 6968
// Dependencies: []

// Module 581
let tmp = "object" === typeof global && global;
if (tmp) {
  const _Object = Object;
  tmp = global.Object === Object;
}
if (tmp) {
  tmp = global;
}

export default tmp;
