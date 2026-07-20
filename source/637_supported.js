// Module ID: 637
// Function ID: 7333
// Name: supported
// Dependencies: []

// Module 637 (supported)
function supported(arg0) {
  return "[object Arguments]" == toString.call(arg0);
}
function unsupported(arg0) {
  let flag = arg0;
  if (arg0) {
    flag = "object" === typeof arg0;
  }
  if (flag) {
    flag = "number" === typeof arg0.length;
  }
  if (flag) {
    const _Object = Object;
    flag = hasOwnProperty.call(arg0, "callee");
  }
  if (flag) {
    const _Object2 = Object;
    flag = !propertyIsEnumerable.call(arg0, "callee");
  }
  if (!flag) {
    flag = false;
  }
  return flag;
}
let tmp = unsupported;
if ("[object Arguments]" == () => {
  return toString.call(arguments);
}()) {
  tmp = supported;
}
tmp.supported = supported;
tmp.unsupported = unsupported;

export default tmp;
