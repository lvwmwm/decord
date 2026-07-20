// Module ID: 3235
// Function ID: 25883
// Dependencies: []

// Module 3235
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {};
obj.date = obj.default({ formats: { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true }, defaultWidth: "full" });
obj.time = obj.default({ formats: { "Bool(false)": "<string:1833107712>", "Bool(false)": "<string:1811939676>", "Bool(false)": "<string:2315256156>", "Bool(false)": "<string:1090519508>" }, defaultWidth: "full" });
obj.dateTime = obj.default({ formats: { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true }, defaultWidth: "full" });

export default obj;
export default exports.default;
