// Module ID: 3291
// Function ID: 26033
// Dependencies: []

// Module 3291
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {};
obj.date = obj.default({ formats: {}, defaultWidth: "full" });
obj.time = obj.default({ formats: {}, defaultWidth: "full" });
obj.dateTime = obj.default({ formats: {}, defaultWidth: "full" });

export default obj;
export default exports.default;
