// Module ID: 3339
// Function ID: 26160
// Dependencies: []

// Module 3339
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {};
obj.date = obj.default({ formats: { "Null": null, "Null": null, "Null": null, "Null": null }, defaultWidth: "full" });
obj.time = obj.default({ formats: {}, defaultWidth: "medium" });
obj.dateTime = obj.default({ formats: { "Null": true, "Null": true, "Null": true, "Null": true }, defaultWidth: "full" });

export default obj;
export default exports.default;
