// Module ID: 3345
// Function ID: 26174
// Dependencies: []

// Module 3345
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {};
obj.date = obj.default({ formats: { "Null": false, "Null": false, "Null": false, "Null": false }, defaultWidth: "full" });
obj.time = obj.default({ formats: { "Null": "<string:30527488>", "Null": "<string:19720960>", "Null": "<string:40710656>", "Null": "<string:38627584>" }, defaultWidth: "full" });
obj.dateTime = obj.default({ formats: { "Null": true, "Null": true, "Null": true, "Null": true }, defaultWidth: "full" });

export default obj;
export default exports.default;
