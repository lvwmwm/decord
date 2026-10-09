// Module ID: 11177
// Function ID: 11178
// Name: generatePropagationContext
// Dependencies: [11178]
// Exports: generatePropagationContext, generateSpanId, generateTraceId

// Module 11177 (generatePropagationContext)
import _mod11178 from "module_11178" /* 11178 */;


export const generatePropagationContext = function generatePropagationContext() {
  let obj2;
  let str;
  const obj = { traceId: obj2.uuid4(), spanId: str.substring(16) };
  obj2 = _mod11178;
  const obj3 = _mod11178;
  str = obj3.uuid4();
  return obj;
};
export const generateSpanId = function generateSpanId() {
  const obj = _mod11178;
  const str = obj.uuid4();
  return str.substring(16);
};
export const generateTraceId = function generateTraceId() {
  const obj = _mod11178;
  return obj.uuid4();
};
