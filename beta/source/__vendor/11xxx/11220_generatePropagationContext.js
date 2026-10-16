// Module ID: 11220
// Function ID: 11221
// Name: generatePropagationContext
// Dependencies: [11221]
// Exports: generatePropagationContext, generateSpanId, generateTraceId

// Module 11220 (generatePropagationContext)
import _mod11221 from "module_11221" /* 11221 */;


export const generatePropagationContext = function generatePropagationContext() {
  let obj2;
  let str;
  const obj = { traceId: obj2.uuid4(), spanId: str.substring(16) };
  obj2 = _mod11221;
  const obj3 = _mod11221;
  str = obj3.uuid4();
  return obj;
};
export const generateSpanId = function generateSpanId() {
  const obj = _mod11221;
  const str = obj.uuid4();
  return str.substring(16);
};
export const generateTraceId = function generateTraceId() {
  const obj = _mod11221;
  return obj.uuid4();
};
