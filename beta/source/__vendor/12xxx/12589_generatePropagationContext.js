// Module ID: 12589
// Function ID: 12590
// Name: generatePropagationContext
// Dependencies: [12590]
// Exports: generatePropagationContext, generateSpanId, generateTraceId

// Module 12589 (generatePropagationContext)
import _mod12590 from "module_12590" /* 12590 */;


export const generatePropagationContext = function generatePropagationContext() {
  let obj2;
  let str;
  const obj = { traceId: obj2.uuid4(), spanId: str.substring(16) };
  obj2 = _mod12590;
  const obj3 = _mod12590;
  str = obj3.uuid4();
  return obj;
};
export const generateSpanId = function generateSpanId() {
  const obj = _mod12590;
  const str = obj.uuid4();
  return str.substring(16);
};
export const generateTraceId = function generateTraceId() {
  const obj = _mod12590;
  return obj.uuid4();
};
