// Module ID: 12314
// Function ID: 12315
// Name: generatePropagationContext
// Dependencies: [12315]
// Exports: generatePropagationContext, generateSpanId, generateTraceId

// Module 12314 (generatePropagationContext)
import _mod12315 from "module_12315" /* 12315 */;


export const generatePropagationContext = function generatePropagationContext() {
  let obj2;
  let str;
  const obj = { traceId: obj2.uuid4(), spanId: str.substring(16) };
  obj2 = _mod12315;
  const obj3 = _mod12315;
  str = obj3.uuid4();
  return obj;
};
export const generateSpanId = function generateSpanId() {
  const obj = _mod12315;
  const str = obj.uuid4();
  return str.substring(16);
};
export const generateTraceId = function generateTraceId() {
  const obj = _mod12315;
  return obj.uuid4();
};
