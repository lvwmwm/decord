// Module ID: 11003
// Function ID: 11004
// Name: generatePropagationContext
// Dependencies: [11004]
// Exports: generatePropagationContext, generateSpanId, generateTraceId

// Module 11003 (generatePropagationContext)
import _mod11004 from "module_11004" /* 11004 */;


export const generatePropagationContext = function generatePropagationContext() {
  let obj2;
  let str;
  const obj = { traceId: obj2.uuid4(), spanId: str.substring(16) };
  obj2 = _mod11004;
  const obj3 = _mod11004;
  str = obj3.uuid4();
  return obj;
};
export const generateSpanId = function generateSpanId() {
  const obj = _mod11004;
  const str = obj.uuid4();
  return str.substring(16);
};
export const generateTraceId = function generateTraceId() {
  const obj = _mod11004;
  return obj.uuid4();
};
