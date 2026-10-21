// Module ID: 12489
// Function ID: 12490
// Name: generatePropagationContext
// Dependencies: [12490]
// Exports: generatePropagationContext, generateSpanId, generateTraceId

// Module 12489 (generatePropagationContext)
import _mod12490 from "module_12490" /* 12490 */;


export const generatePropagationContext = function generatePropagationContext() {
  let obj2;
  let str;
  const obj = { traceId: obj2.uuid4(), spanId: str.substring(16) };
  obj2 = _mod12490;
  const obj3 = _mod12490;
  str = obj3.uuid4();
  return obj;
};
export const generateSpanId = function generateSpanId() {
  const obj = _mod12490;
  const str = obj.uuid4();
  return str.substring(16);
};
export const generateTraceId = function generateTraceId() {
  const obj = _mod12490;
  return obj.uuid4();
};
