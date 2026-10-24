// Module ID: 12583
// Function ID: 12584
// Name: generatePropagationContext
// Dependencies: [12584]
// Exports: generatePropagationContext, generateSpanId, generateTraceId

// Module 12583 (generatePropagationContext)
import _mod12584 from "module_12584" /* 12584 */;


export const generatePropagationContext = function generatePropagationContext() {
  let obj2;
  let str;
  const obj = { traceId: obj2.uuid4(), spanId: str.substring(16) };
  obj2 = _mod12584;
  const obj3 = _mod12584;
  str = obj3.uuid4();
  return obj;
};
export const generateSpanId = function generateSpanId() {
  const obj = _mod12584;
  const str = obj.uuid4();
  return str.substring(16);
};
export const generateTraceId = function generateTraceId() {
  const obj = _mod12584;
  return obj.uuid4();
};
