// Module ID: 13059
// Function ID: 13060
// Name: generatePropagationContext
// Dependencies: [13060]
// Exports: generatePropagationContext, generateSpanId, generateTraceId

// Module 13059 (generatePropagationContext)
import _mod13060 from "module_13060" /* 13060 */;

require = arg1;
const dependencyMap = arg6;

export const generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: _mod13060.uuid4(), spanId: null };
  obj.spanId = _mod13060.uuid4().substring(16);
  return obj;
};
export const generateSpanId = function generateSpanId() {
  return _mod13060.uuid4().substring(16);
};
export const generateTraceId = function generateTraceId() {
  return _mod13060.uuid4();
};
