// Module ID: 12016
// Function ID: 12017
// Name: generatePropagationContext
// Dependencies: [12017]
// Exports: generatePropagationContext, generateSpanId, generateTraceId

// Module 12016 (generatePropagationContext)
import _mod12017 from "module_12017" /* 12017 */;


export const generatePropagationContext = function generatePropagationContext() {
  let obj2;
  let str;
  const obj = { traceId: obj2.uuid4(), spanId: str.substring(16) };
  obj2 = _mod12017;
  const obj3 = _mod12017;
  str = obj3.uuid4();
  return obj;
};
export const generateSpanId = function generateSpanId() {
  const obj = _mod12017;
  const str = obj.uuid4();
  return str.substring(16);
};
export const generateTraceId = function generateTraceId() {
  const obj = _mod12017;
  return obj.uuid4();
};
