// Module ID: 3351
// Function ID: 26192
// Dependencies: []

// Module 3351
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {};
obj.date = obj.default({ formats: { "Null": null, "Null": null, "Null": null, "Null": null }, defaultWidth: "full" });
obj.time = obj.default({ formats: { "Null": true, "Null": true, "Null": true, "Null": true }, defaultWidth: "full" });
obj.dateTime = obj.default({ formats: {}, defaultWidth: "full" });

export default obj;
export default exports.default;
