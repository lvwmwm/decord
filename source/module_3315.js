// Module ID: 3315
// Function ID: 26091
// Dependencies: []

// Module 3315
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {};
obj.date = obj.default({ formats: { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true }, defaultWidth: "full" });
obj.time = obj.default({ formats: {}, defaultWidth: "full" });
obj.dateTime = obj.default({ formats: { "Bool(false)": "r", "Bool(false)": "isArray", "Bool(false)": "x", "Bool(false)": "has" }, defaultWidth: "full" });

export default obj;
export default exports.default;
