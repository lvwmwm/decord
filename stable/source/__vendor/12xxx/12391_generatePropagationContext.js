// Module ID: 12391
// Function ID: 12392
// Name: generatePropagationContext
// Dependencies: [12392]
// Exports: generatePropagationContext, generateSpanId, generateTraceId

// Module 12391 (generatePropagationContext)
import _mod12392 from "module_12392" /* 12392 */;


export const generatePropagationContext = function generatePropagationContext() {
  let obj2;
  let str;
  const obj = { traceId: obj2.uuid4(), spanId: str.substring(16) };
  obj2 = _mod12392;
  const obj3 = _mod12392;
  str = obj3.uuid4();
  return obj;
};
export const generateSpanId = function generateSpanId() {
  const obj = _mod12392;
  const str = obj.uuid4();
  return str.substring(16);
};
export const generateTraceId = function generateTraceId() {
  const obj = _mod12392;
  return obj.uuid4();
};
