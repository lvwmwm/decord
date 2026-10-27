// Module ID: 12591
// Function ID: 12592
// Name: generatePropagationContext
// Dependencies: [12592]
// Exports: generatePropagationContext, generateSpanId, generateTraceId

// Module 12591 (generatePropagationContext)
import _mod12592 from "module_12592" /* 12592 */;


export const generatePropagationContext = function generatePropagationContext() {
  let obj2;
  let str;
  const obj = { traceId: obj2.uuid4(), spanId: str.substring(16) };
  obj2 = _mod12592;
  const obj3 = _mod12592;
  str = obj3.uuid4();
  return obj;
};
export const generateSpanId = function generateSpanId() {
  const obj = _mod12592;
  const str = obj.uuid4();
  return str.substring(16);
};
export const generateTraceId = function generateTraceId() {
  const obj = _mod12592;
  return obj.uuid4();
};
