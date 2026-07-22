// Module ID: 3291
// Function ID: 26038
// Dependencies: []

// Module 3291
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {};
obj.date = obj.default({ formats: { "Null": "1 dag", "Null": "{{count}} dagen", "Null": "ongeveer 1 week", "Null": "ongeveer {{count}} weken" }, defaultWidth: "full" });
obj.time = obj.default({ formats: { "Null": "<string:30527488>", "Null": "<string:19720960>", "Null": "<string:40710656>", "Null": "<string:38627584>" }, defaultWidth: "full" });
obj.dateTime = obj.default({ formats: {}, defaultWidth: "full" });

export default obj;
export default exports.default;
