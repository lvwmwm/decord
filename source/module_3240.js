// Module ID: 3240
// Function ID: 25896
// Dependencies: []

// Module 3240
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {};
obj.date = obj.default({ formats: {}, defaultWidth: "full" });
obj.time = obj.default({ formats: {}, defaultWidth: "full" });
obj.dateTime = obj.default({ formats: { "Bool(false)": "accent", "Bool(false)": true, "Bool(false)": "/assets/.cache/intl/ZGVzaWdu", "Bool(false)": null }, defaultWidth: "full" });

export default obj;
export default exports.default;
