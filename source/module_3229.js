// Module ID: 3229
// Function ID: 25869
// Dependencies: []

// Module 3229
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {};
obj.date = obj.default({ formats: { "Null": "<string:1930952706>", "Null": "<string:2201616386>", "Null": "<string:1931018242>", "Null": "<string:1252917250>" }, defaultWidth: "full" });
obj.time = obj.default({ formats: {}, defaultWidth: "full" });
obj.dateTime = obj.default({ formats: { "Null": "<string:2470576130>", "Null": "<string:1811940225>", "Null": "<string:1107297140>", "Null": "1 \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03BF" }, defaultWidth: "full" });

export default obj;
export default exports.default;
