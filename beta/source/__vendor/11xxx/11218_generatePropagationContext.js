// Module ID: 11218
// Function ID: 11219
// Name: generatePropagationContext
// Dependencies: [11219]
// Exports: generatePropagationContext, generateSpanId, generateTraceId

// Module 11218 (generatePropagationContext)
import _mod11219 from "module_11219" /* 11219 */;


export const generatePropagationContext = function generatePropagationContext() {
  let obj2;
  let str;
  const obj = { traceId: obj2.uuid4(), spanId: str.substring(16) };
  obj2 = _mod11219;
  const obj3 = _mod11219;
  str = obj3.uuid4();
  return obj;
};
export const generateSpanId = function generateSpanId() {
  const obj = _mod11219;
  const str = obj.uuid4();
  return str.substring(16);
};
export const generateTraceId = function generateTraceId() {
  const obj = _mod11219;
  return obj.uuid4();
};
