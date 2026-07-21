// Module ID: 3255
// Function ID: 25942
// Dependencies: []

// Module 3255
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {};
obj.date = obj.default({ formats: { "Bool(false)": "Array", "Bool(false)": "isArray", "Bool(false)": "Array", "Bool(false)": "padding" }, defaultWidth: "full" });
obj.time = obj.default({ formats: {}, defaultWidth: "full" });
obj.dateTime = obj.default({ formats: { "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false }, defaultWidth: "full" });

export default obj;
export default exports.default;
