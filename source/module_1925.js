// Module ID: 1925
// Function ID: 21782
// Dependencies: []

// Module 1925
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {};
obj.date = obj.default({ formats: { "Null": "<string:658702592>", "Null": "<string:637534772>", "Null": "<string:2617246260>", "Null": "<string:1090519507>" }, defaultWidth: "full" });
obj.time = obj.default({ formats: {}, defaultWidth: "full" });
obj.dateTime = obj.default({ formats: {}, defaultWidth: "full" });

export default obj;
export default exports.default;
