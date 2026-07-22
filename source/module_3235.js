// Module ID: 3235
// Function ID: 25888
// Dependencies: []

// Module 3235
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {};
obj.date = obj.default({ formats: { "Null": "1 minuto", "Null": "{{count}} minutos", "Null": "alrededor de 1 hora", "Null": "alrededor de {{count}} horas" }, defaultWidth: "full" });
obj.time = obj.default({ formats: {}, defaultWidth: "full" });
obj.dateTime = obj.default({ formats: { "Null": "np", "Null": "Array", "Null": "isArray", "Null": "kind" }, defaultWidth: "full" });

export default obj;
export default exports.default;
