// Module ID: 3339
// Function ID: 26160
// Dependencies: []

// Module 3339
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {};
obj.date = obj.default({ formats: { "Bool(false)": "r", "Bool(false)": "isArray", "Bool(false)": "values", "Bool(false)": "round" }, defaultWidth: "full" });
obj.time = obj.default({ formats: { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null }, defaultWidth: "medium" });
obj.dateTime = obj.default({ formats: {}, defaultWidth: "full" });

export default obj;
export default exports.default;
