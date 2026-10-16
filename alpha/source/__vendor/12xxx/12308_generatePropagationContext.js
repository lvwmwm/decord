// Module ID: 12308
// Function ID: 12309
// Name: generatePropagationContext
// Dependencies: [12309]
// Exports: generatePropagationContext, generateSpanId, generateTraceId

// Module 12308 (generatePropagationContext)
import _mod12309 from "module_12309" /* 12309 */;


export const generatePropagationContext = function generatePropagationContext() {
  let obj2;
  let str;
  const obj = { traceId: obj2.uuid4(), spanId: str.substring(16) };
  obj2 = _mod12309;
  const obj3 = _mod12309;
  str = obj3.uuid4();
  return obj;
};
export const generateSpanId = function generateSpanId() {
  const obj = _mod12309;
  const str = obj.uuid4();
  return str.substring(16);
};
export const generateTraceId = function generateTraceId() {
  const obj = _mod12309;
  return obj.uuid4();
};
