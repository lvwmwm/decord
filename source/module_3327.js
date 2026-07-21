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
obj.date = obj.default({ formats: { "Null": "ungef\u00E4r en m\u00E5nad", "Null": "ungef\u00E4r {{count}} m\u00E5nader", "Null": "en m\u00E5nad", "Null": "{{count}} m\u00E5nader" }, defaultWidth: "full" });
obj.time = obj.default({ formats: { "Null": true, "Null": true, "Null": true, "Null": true }, defaultWidth: "full" });
obj.dateTime = obj.default({ formats: { any: "{{date}}, {{time}}" }, defaultWidth: "any" });

export default obj;
export default exports.default;
