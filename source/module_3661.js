// Module ID: 3661
// Function ID: 27971
// Dependencies: []

// Module 3661
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {};
obj.date = obj.default({ formats: {}, defaultWidth: "full" });
obj.time = obj.default({ formats: { "Bool(false)": "<string:58030336>", "Bool(false)": "<string:3290186240>", "Bool(false)": "<string:1970798595>", "Bool(false)": "<string:4047634435>" }, defaultWidth: "full" });
obj.dateTime = obj.default({ formats: {}, defaultWidth: "full" });

export default obj;
export default exports.default;
