// Module ID: 12575
// Function ID: 12576
// Name: generatePropagationContext
// Dependencies: [12576]
// Exports: generatePropagationContext, generateSpanId, generateTraceId

// Module 12575 (generatePropagationContext)
import _mod12576 from "module_12576" /* 12576 */;


export const generatePropagationContext = function generatePropagationContext() {
  let obj2;
  let str;
  const obj = { traceId: obj2.uuid4(), spanId: str.substring(16) };
  obj2 = _mod12576;
  const obj3 = _mod12576;
  str = obj3.uuid4();
  return obj;
};
export const generateSpanId = function generateSpanId() {
  const obj = _mod12576;
  const str = obj.uuid4();
  return str.substring(16);
};
export const generateTraceId = function generateTraceId() {
  const obj = _mod12576;
  return obj.uuid4();
};
