// Module ID: 12519
// Function ID: 12520
// Name: generatePropagationContext
// Dependencies: [12520]
// Exports: generatePropagationContext, generateSpanId, generateTraceId

// Module 12519 (generatePropagationContext)
import _mod12520 from "module_12520" /* 12520 */;


export const generatePropagationContext = function generatePropagationContext() {
  let obj2;
  let str;
  const obj = { traceId: obj2.uuid4(), spanId: str.substring(16) };
  obj2 = _mod12520;
  const obj3 = _mod12520;
  str = obj3.uuid4();
  return obj;
};
export const generateSpanId = function generateSpanId() {
  const obj = _mod12520;
  const str = obj.uuid4();
  return str.substring(16);
};
export const generateTraceId = function generateTraceId() {
  const obj = _mod12520;
  return obj.uuid4();
};
