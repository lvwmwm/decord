// Module ID: 3309
// Function ID: 26076
// Dependencies: []

// Module 3309
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {};
obj.date = obj.default({ formats: { "Null": "<string:1930952706>", "Null": "<string:2201616386>", "Null": "<string:1931018242>", "Null": "<string:1252917250>" }, defaultWidth: "full" });
obj.time = obj.default({ formats: {}, defaultWidth: "full" });
obj.dateTime = obj.default({ formats: { "Null": false, "Null": false, "Null": false, "Null": -1640497151 }, defaultWidth: "full" });

export default obj;
export default exports.default;
