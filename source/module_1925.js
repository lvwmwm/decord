// Module ID: 1925
// Function ID: 21777
// Dependencies: []

// Module 1925
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {};
obj.date = obj.default({ formats: { "Null": 1124139009, "Null": 111746, "Null": 111745, "Null": 119741 }, defaultWidth: "full" });
obj.time = obj.default({ formats: { "Null": "short", "Null": "UTC", "Null": null, "Null": null }, defaultWidth: "full" });
obj.dateTime = obj.default({ formats: {}, defaultWidth: "full" });

export default obj;
export default exports.default;
