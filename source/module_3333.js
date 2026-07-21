// Module ID: 3333
// Function ID: 26146
// Dependencies: []

// Module 3333
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {};
obj.date = obj.default({ formats: { "Bool(false)": "r", "Bool(false)": "OpenCriticTier", "Bool(false)": "a", "Bool(false)": "isRecording" }, defaultWidth: "full" });
obj.time = obj.default({ formats: {}, defaultWidth: "full" });
obj.dateTime = obj.default({ formats: { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null }, defaultWidth: "full" });

export default obj;
export default exports.default;
