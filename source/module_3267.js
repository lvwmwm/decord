// Module ID: 3267
// Function ID: 25967
// Dependencies: []

// Module 3267
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {};
obj.date = obj.default({ formats: {}, defaultWidth: "full" });
obj.time = obj.default({ formats: { "Null": true, "Null": true, "Null": true, "Null": true }, defaultWidth: "full" });
obj.dateTime = obj.default({ formats: {}, defaultWidth: "full" });

export default obj;
export default exports.default;
