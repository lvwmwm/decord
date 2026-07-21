// Module ID: 3249
// Function ID: 25928
// Dependencies: []

// Module 3249
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {};
obj.date = obj.default({ formats: { "Bool(false)": "environ 1 semaine", "Bool(false)": "environ {{count}} semaines", "Bool(false)": "1 semaine", "Bool(false)": "{{count}} semaines" }, defaultWidth: "full" });
obj.time = obj.default({ formats: { "Bool(false)": "a", "Bool(false)": "isArray", "Bool(false)": "__initData", "Bool(false)": "start" }, defaultWidth: "full" });
obj.dateTime = obj.default({ formats: {}, defaultWidth: "full" });

export default obj;
export default exports.default;
