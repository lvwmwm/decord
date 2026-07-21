// Module ID: 3327
// Function ID: 26129
// Dependencies: []

// Module 3327
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {};
obj.date = obj.default({ formats: { "Bool(false)": "dd", "Bool(false)": "SOLID", "Bool(false)": "GUILD_PRODUCTS_ALLOW_ARCHIVED_FILE", "Bool(false)": "Array" }, defaultWidth: "full" });
obj.time = obj.default({ formats: {}, defaultWidth: "full" });
obj.dateTime = obj.default({ formats: { any: "{{date}}, {{time}}" }, defaultWidth: "any" });

export default obj;
export default exports.default;
