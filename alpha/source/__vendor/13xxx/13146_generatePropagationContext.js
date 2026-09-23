// Module ID: 13146
// Function ID: 13147
// Name: generatePropagationContext
// Dependencies: [13147]
// Exports: generatePropagationContext, generateSpanId, generateTraceId

// Module 13146 (generatePropagationContext)
import _mod13147 from "module_13147" /* 13147 */;

require = arg1;
const dependencyMap = arg6;

export const generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: _mod13147.uuid4(), spanId: null };
  obj.spanId = _mod13147.uuid4().substring(16);
  return obj;
};
export const generateSpanId = function generateSpanId() {
  return _mod13147.uuid4().substring(16);
};
export const generateTraceId = function generateTraceId() {
  return _mod13147.uuid4();
};
