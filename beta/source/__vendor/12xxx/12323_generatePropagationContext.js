// Module ID: 12323
// Function ID: 12324
// Name: generatePropagationContext
// Dependencies: [12324]
// Exports: generatePropagationContext, generateSpanId, generateTraceId

// Module 12323 (generatePropagationContext)
import _mod12324 from "module_12324" /* 12324 */;


export const generatePropagationContext = function generatePropagationContext() {
  let obj2;
  let str;
  const obj = { traceId: obj2.uuid4(), spanId: str.substring(16) };
  obj2 = _mod12324;
  const obj3 = _mod12324;
  str = obj3.uuid4();
  return obj;
};
export const generateSpanId = function generateSpanId() {
  const obj = _mod12324;
  const str = obj.uuid4();
  return str.substring(16);
};
export const generateTraceId = function generateTraceId() {
  const obj = _mod12324;
  return obj.uuid4();
};
