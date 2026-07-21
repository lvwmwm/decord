// Module ID: 3297
// Function ID: 26052
// Dependencies: []

// Module 3297
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {};
obj.date = obj.default({ formats: {}, defaultWidth: "full" });
obj.time = obj.default({ formats: {}, defaultWidth: "full" });
obj.dateTime = obj.default({ formats: { "Bool(false)": "P", "Bool(false)": "center", "Bool(false)": "center", "Bool(false)": "row" }, defaultWidth: "full" });

export default obj;
export default exports.default;
