// Module ID: 12646
// Function ID: 12647
// Name: generatePropagationContext
// Dependencies: [12647]
// Exports: generatePropagationContext, generateSpanId, generateTraceId

// Module 12646 (generatePropagationContext)
import _mod12647 from "module_12647" /* 12647 */;


export const generatePropagationContext = function generatePropagationContext() {
  let obj2;
  let str;
  const obj = { traceId: obj2.uuid4(), spanId: str.substring(16) };
  obj2 = _mod12647;
  const obj3 = _mod12647;
  str = obj3.uuid4();
  return obj;
};
export const generateSpanId = function generateSpanId() {
  const obj = _mod12647;
  const str = obj.uuid4();
  return str.substring(16);
};
export const generateTraceId = function generateTraceId() {
  const obj = _mod12647;
  return obj.uuid4();
};
