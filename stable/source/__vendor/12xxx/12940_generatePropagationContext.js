// Module ID: 12940
// Function ID: 12941
// Name: generatePropagationContext
// Dependencies: [12941]
// Exports: generatePropagationContext, generateSpanId, generateTraceId

// Module 12940 (generatePropagationContext)
import _mod12941 from "module_12941" /* 12941 */;

require = arg1;
const dependencyMap = arg6;

export const generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: _mod12941.uuid4(), spanId: null };
  obj.spanId = _mod12941.uuid4().substring(16);
  return obj;
};
export const generateSpanId = function generateSpanId() {
  return _mod12941.uuid4().substring(16);
};
export const generateTraceId = function generateTraceId() {
  return _mod12941.uuid4();
};
