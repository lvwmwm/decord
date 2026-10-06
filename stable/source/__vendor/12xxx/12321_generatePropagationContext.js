// Module ID: 12321
// Function ID: 12322
// Name: generatePropagationContext
// Dependencies: [12322]
// Exports: generatePropagationContext, generateSpanId, generateTraceId

// Module 12321 (generatePropagationContext)
import _mod12322 from "module_12322" /* 12322 */;


export const generatePropagationContext = function generatePropagationContext() {
  let obj2;
  let str;
  const obj = { traceId: obj2.uuid4(), spanId: str.substring(16) };
  obj2 = _mod12322;
  const obj3 = _mod12322;
  str = obj3.uuid4();
  return obj;
};
export const generateSpanId = function generateSpanId() {
  const obj = _mod12322;
  const str = obj.uuid4();
  return str.substring(16);
};
export const generateTraceId = function generateTraceId() {
  const obj = _mod12322;
  return obj.uuid4();
};
