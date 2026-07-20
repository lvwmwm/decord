// Module ID: 3249
// Function ID: 25923
// Dependencies: []

// Module 3249
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {};
obj.date = obj.default({ formats: {}, defaultWidth: "full" });
obj.time = obj.default({ formats: { "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false }, defaultWidth: "full" });
obj.dateTime = obj.default({ formats: { "Bool(false)": "<string:1799618562>", "Bool(false)": "<string:1811939866>", "Bool(false)": "<string:3623879194>", "Bool(false)": "<string:2466251265>" }, defaultWidth: "full" });

export default obj;
export default exports.default;
