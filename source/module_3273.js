// Module ID: 3273
// Function ID: 25983
// Dependencies: []

// Module 3273
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {};
obj.date = obj.default({ formats: { "Null": "reply", "Null": null, "Null": "manje od {{count}} minute", "Null": "manje od {{count}} minuta" }, defaultWidth: "full" });
obj.time = obj.default({ formats: {}, defaultWidth: "full" });
obj.dateTime = obj.default({ formats: {}, defaultWidth: "full" });

export default obj;
export default exports.default;
