// Module ID: 3655
// Function ID: 27962
// Dependencies: []

// Module 3655
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {};
obj.date = obj.default({ formats: { "Null": "\u5927\u7EA6 1 \u4E2A\u6708", "Null": "\u5927\u7EA6 {{count}} \u4E2A\u6708", "Null": "1 \u4E2A\u6708", "Null": "{{count}} \u4E2A\u6708" }, defaultWidth: "full" });
obj.time = obj.default({ formats: { "Null": "<string:30527488>", "Null": "<string:19720960>", "Null": "<string:40710656>", "Null": "<string:38627584>" }, defaultWidth: "full" });
obj.dateTime = obj.default({ formats: {}, defaultWidth: "full" });

export default obj;
export default exports.default;
