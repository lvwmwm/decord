// Module ID: 3303
// Function ID: 26061
// Dependencies: []

// Module 3303
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {};
obj.date = obj.default({ formats: {}, defaultWidth: "full" });
obj.time = obj.default({ formats: {}, defaultWidth: "full" });
obj.dateTime = obj.default({ formats: { "Null": false, "Null": false, "Null": false, "Null": false }, defaultWidth: "full" });

export default obj;
export default exports.default;
