// Module ID: 3205
// Function ID: 25808
// Dependencies: []

// Module 3205
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {};
obj.date = obj.default({ formats: {}, defaultWidth: "full" });
obj.time = obj.default({ formats: { "Null": "{{count}} minut", "Null": "p\u0159ed {{count}} minutami", "Null": "za {{count}} minut", "Null": "p\u0159ibli\u017En\u011B hodina" }, defaultWidth: "full" });
obj.dateTime = obj.default({ formats: { any: "{{date}} {{time}}" }, defaultWidth: "any" });

export default obj;
export default exports.default;
