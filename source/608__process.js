// Module ID: 608
// Function ID: 7044
// Name: _process
// Dependencies: []

// Module 608 (_process)
let tmp2 = tmp;
if ("object" === typeof exports && exports && !exports.nodeType && exports) {
  tmp2 = "object" === typeof module;
}
if (tmp2) {
  tmp2 = module;
}
if (tmp2) {
  tmp2 = !module.nodeType;
}
if (tmp2) {
  tmp2 = module;
}
let _process = tmp2;
if (tmp2) {
  _process = tmp2.exports === tmp;
}
if (_process) {
  _process = require(dependencyMap[0]).process;
}
let _require = obj;
if (tmp2) {
  _require = obj.require;
}
let types = _require;
if (_require) {
  types = obj.require("util").types;
}
let tmp7 = types;
if (!types) {
  let binding = obj2;
  if (obj2) {
    binding = obj2.binding;
  }
  let bindingResult = binding;
  if (binding) {
    bindingResult = obj2.binding("util");
  }
  tmp7 = bindingResult;
}

export default tmp7;
