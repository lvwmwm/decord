// Module ID: 13095
// Function ID: 13096
// Name: generatePropagationContext
// Dependencies: [13096]
// Exports: generatePropagationContext, generateSpanId, generateTraceId

// Module 13095 (generatePropagationContext)
import _mod13096 from "module_13096" /* 13096 */;

require = arg1;
const dependencyMap = arg6;

export const generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: _mod13096.uuid4(), spanId: null };
  obj.spanId = _mod13096.uuid4().substring(16);
  return obj;
};
export const generateSpanId = function generateSpanId() {
  return _mod13096.uuid4().substring(16);
};
export const generateTraceId = function generateTraceId() {
  return _mod13096.uuid4();
};
