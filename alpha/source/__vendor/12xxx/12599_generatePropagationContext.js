// Module ID: 12599
// Function ID: 12600
// Name: generatePropagationContext
// Dependencies: [12600]
// Exports: generatePropagationContext, generateSpanId, generateTraceId

// Module 12599 (generatePropagationContext)
import _mod12600 from "module_12600" /* 12600 */;


export const generatePropagationContext = function generatePropagationContext() {
  let obj2;
  let str;
  const obj = { traceId: obj2.uuid4(), spanId: str.substring(16) };
  obj2 = _mod12600;
  const obj3 = _mod12600;
  str = obj3.uuid4();
  return obj;
};
export const generateSpanId = function generateSpanId() {
  const obj = _mod12600;
  const str = obj.uuid4();
  return str.substring(16);
};
export const generateTraceId = function generateTraceId() {
  const obj = _mod12600;
  return obj.uuid4();
};
