// Module ID: 1925
// Function ID: 21782
// Dependencies: []

// Module 1925
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {};
obj.date = obj.default({ formats: {}, defaultWidth: "full" });
obj.time = obj.default({ formats: { "Bool(false)": 1151406824, "Bool(false)": 139542, "Bool(false)": 167801, "Bool(false)": 70059 }, defaultWidth: "full" });
obj.dateTime = obj.default({ formats: { "Bool(false)": "<string:3858760217>", "Bool(false)": "<string:285213089>", "Bool(false)": "<string:24792897>", "Bool(false)": "<string:843251968>" }, defaultWidth: "full" });

export default obj;
export default exports.default;
