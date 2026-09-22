// Module ID: 13064
// Function ID: 13065
// Name: generatePropagationContext
// Dependencies: [13065]
// Exports: generatePropagationContext, generateSpanId, generateTraceId

// Module 13064 (generatePropagationContext)
import _mod13065 from "module_13065" /* 13065 */;

require = arg1;
const dependencyMap = arg6;

export const generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: _mod13065.uuid4(), spanId: null };
  obj.spanId = _mod13065.uuid4().substring(16);
  return obj;
};
export const generateSpanId = function generateSpanId() {
  return _mod13065.uuid4().substring(16);
};
export const generateTraceId = function generateTraceId() {
  return _mod13065.uuid4();
};
