// Module ID: 3327
// Function ID: 26124
// Dependencies: []

// Module 3327
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {};
obj.date = obj.default({ formats: {}, defaultWidth: "full" });
obj.time = obj.default({ formats: { "Bool(false)": -48357117030608655000000000, "Bool(false)": -563115183833126.4, "Bool(false)": 36904316412809860000, "Bool(false)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004055685676384574 }, defaultWidth: "full" });
obj.dateTime = obj.default({ formats: { any: "{{date}}, {{time}}" }, defaultWidth: "any" });

export default obj;
export default exports.default;
