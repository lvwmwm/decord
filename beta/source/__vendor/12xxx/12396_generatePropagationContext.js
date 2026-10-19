// Module ID: 12396
// Function ID: 12397
// Name: generatePropagationContext
// Dependencies: [12397]
// Exports: generatePropagationContext, generateSpanId, generateTraceId

// Module 12396 (generatePropagationContext)
import _mod12397 from "module_12397" /* 12397 */;


export const generatePropagationContext = function generatePropagationContext() {
  let obj2;
  let str;
  const obj = { traceId: obj2.uuid4(), spanId: str.substring(16) };
  obj2 = _mod12397;
  const obj3 = _mod12397;
  str = obj3.uuid4();
  return obj;
};
export const generateSpanId = function generateSpanId() {
  const obj = _mod12397;
  const str = obj.uuid4();
  return str.substring(16);
};
export const generateTraceId = function generateTraceId() {
  const obj = _mod12397;
  return obj.uuid4();
};
