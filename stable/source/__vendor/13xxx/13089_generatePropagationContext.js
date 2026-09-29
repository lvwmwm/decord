// Module ID: 13089
// Function ID: 13090
// Name: generatePropagationContext
// Dependencies: [13090]
// Exports: generatePropagationContext, generateSpanId, generateTraceId

// Module 13089 (generatePropagationContext)
import _mod13090 from "module_13090" /* 13090 */;

require = arg1;
const dependencyMap = arg6;

export const generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: _mod13090.uuid4(), spanId: null };
  obj.spanId = _mod13090.uuid4().substring(16);
  return obj;
};
export const generateSpanId = function generateSpanId() {
  return _mod13090.uuid4().substring(16);
};
export const generateTraceId = function generateTraceId() {
  return _mod13090.uuid4();
};
