// Module ID: 12379
// Function ID: 12380
// Name: generatePropagationContext
// Dependencies: [12380]
// Exports: generatePropagationContext, generateSpanId, generateTraceId

// Module 12379 (generatePropagationContext)
import _mod12380 from "module_12380" /* 12380 */;


export const generatePropagationContext = function generatePropagationContext() {
  let obj2;
  let str;
  const obj = { traceId: obj2.uuid4(), spanId: str.substring(16) };
  obj2 = _mod12380;
  const obj3 = _mod12380;
  str = obj3.uuid4();
  return obj;
};
export const generateSpanId = function generateSpanId() {
  const obj = _mod12380;
  const str = obj.uuid4();
  return str.substring(16);
};
export const generateTraceId = function generateTraceId() {
  const obj = _mod12380;
  return obj.uuid4();
};
