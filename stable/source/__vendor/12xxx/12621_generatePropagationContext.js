// Module ID: 12621
// Function ID: 12622
// Name: generatePropagationContext
// Dependencies: [12622]
// Exports: generatePropagationContext, generateSpanId, generateTraceId

// Module 12621 (generatePropagationContext)
import _mod12622 from "module_12622" /* 12622 */;


export const generatePropagationContext = function generatePropagationContext() {
  let obj2;
  let str;
  const obj = { traceId: obj2.uuid4(), spanId: str.substring(16) };
  obj2 = _mod12622;
  const obj3 = _mod12622;
  str = obj3.uuid4();
  return obj;
};
export const generateSpanId = function generateSpanId() {
  const obj = _mod12622;
  const str = obj.uuid4();
  return str.substring(16);
};
export const generateTraceId = function generateTraceId() {
  const obj = _mod12622;
  return obj.uuid4();
};
