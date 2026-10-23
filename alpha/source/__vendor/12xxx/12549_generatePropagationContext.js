// Module ID: 12549
// Function ID: 12550
// Name: generatePropagationContext
// Dependencies: [12550]
// Exports: generatePropagationContext, generateSpanId, generateTraceId

// Module 12549 (generatePropagationContext)
import _mod12550 from "module_12550" /* 12550 */;


export const generatePropagationContext = function generatePropagationContext() {
  let obj2;
  let str;
  const obj = { traceId: obj2.uuid4(), spanId: str.substring(16) };
  obj2 = _mod12550;
  const obj3 = _mod12550;
  str = obj3.uuid4();
  return obj;
};
export const generateSpanId = function generateSpanId() {
  const obj = _mod12550;
  const str = obj.uuid4();
  return str.substring(16);
};
export const generateTraceId = function generateTraceId() {
  const obj = _mod12550;
  return obj.uuid4();
};
