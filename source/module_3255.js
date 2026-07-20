// Module ID: 3255
// Function ID: 25937
// Dependencies: []

// Module 3255
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {};
obj.date = obj.default({ formats: { "Bool(false)": "open", "Bool(false)": null, "Bool(false)": "manje od {{count}} minute", "Bool(false)": "manje od {{count}} minuta" }, defaultWidth: "full" });
obj.time = obj.default({ formats: {}, defaultWidth: "full" });
obj.dateTime = obj.default({ formats: {}, defaultWidth: "full" });

export default obj;
export default exports.default;
