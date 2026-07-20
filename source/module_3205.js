// Module ID: 3205
// Function ID: 25803
// Dependencies: []

// Module 3205
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {};
obj.date = obj.default({ formats: { "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false }, defaultWidth: "full" });
obj.time = obj.default({ formats: { "Bool(false)": "{{count}} minut", "Bool(false)": "p\u0159ed {{count}} minutami", "Bool(false)": "za {{count}} minut", "Bool(false)": "p\u0159ibli\u017En\u011B hodina" }, defaultWidth: "full" });
obj.dateTime = obj.default({ formats: { any: "{{date}} {{time}}" }, defaultWidth: "any" });

export default obj;
export default exports.default;
