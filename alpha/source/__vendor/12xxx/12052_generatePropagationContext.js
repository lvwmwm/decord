// Module ID: 12052
// Function ID: 12053
// Name: generatePropagationContext
// Dependencies: [12053]
// Exports: generatePropagationContext, generateSpanId, generateTraceId

// Module 12052 (generatePropagationContext)
import _mod12053 from "module_12053" /* 12053 */;


export const generatePropagationContext = function generatePropagationContext() {
  let obj2;
  let str;
  const obj = { traceId: obj2.uuid4(), spanId: str.substring(16) };
  obj2 = _mod12053;
  const obj3 = _mod12053;
  str = obj3.uuid4();
  return obj;
};
export const generateSpanId = function generateSpanId() {
  const obj = _mod12053;
  const str = obj.uuid4();
  return str.substring(16);
};
export const generateTraceId = function generateTraceId() {
  const obj = _mod12053;
  return obj.uuid4();
};
