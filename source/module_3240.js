// Module ID: 3240
// Function ID: 25901
// Dependencies: []

// Module 3240
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {};
obj.date = obj.default({ formats: { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true }, defaultWidth: "full" });
obj.time = obj.default({ formats: {}, defaultWidth: "full" });
obj.dateTime = obj.default({ formats: { "Bool(false)": "<string:3858760217>", "Bool(false)": "<string:285213089>", "Bool(false)": "<string:24792897>", "Bool(false)": "<string:843251968>" }, defaultWidth: "full" });

export default obj;
export default exports.default;
