// Module ID: 3249
// Function ID: 25928
// Dependencies: []

// Module 3249
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {};
obj.date = obj.default({ formats: { "Null": null, "Null": null, "Null": null, "Null": null }, defaultWidth: "full" });
obj.time = obj.default({ formats: { "Null": false, "Null": false, "Null": false, "Null": false }, defaultWidth: "full" });
obj.dateTime = obj.default({ formats: { "Null": true, "Null": true, "Null": true, "Null": true }, defaultWidth: "full" });

export default obj;
export default exports.default;
