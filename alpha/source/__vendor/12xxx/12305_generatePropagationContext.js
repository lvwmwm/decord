// Module ID: 12305
// Function ID: 12306
// Name: generatePropagationContext
// Dependencies: [12306]
// Exports: generatePropagationContext, generateSpanId, generateTraceId

// Module 12305 (generatePropagationContext)
import _mod12306 from "module_12306" /* 12306 */;

require = arg1;
const dependencyMap = arg6;

export const generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: _mod12306.uuid4(), spanId: null };
  obj.spanId = _mod12306.uuid4().substring(16);
  return obj;
};
export const generateSpanId = function generateSpanId() {
  return _mod12306.uuid4().substring(16);
};
export const generateTraceId = function generateTraceId() {
  return _mod12306.uuid4();
};
