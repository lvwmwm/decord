// Module ID: 13265
// Function ID: 13266
// Name: generatePropagationContext
// Dependencies: [13266]
// Exports: generatePropagationContext, generateSpanId, generateTraceId

// Module 13265 (generatePropagationContext)
import _mod13266 from "module_13266" /* 13266 */;


export function generatePropagationContext() {
  let obj2;
  let str;
  const obj = { traceId: obj2.uuid4(), spanId: str.substring(16) };
  obj2 = _mod13266;
  const obj3 = _mod13266;
  str = obj3.uuid4();
  return obj;
}
export function generateSpanId() {
  const obj = _mod13266;
  const str = obj.uuid4();
  return str.substring(16);
}
export function generateTraceId() {
  const obj = _mod13266;
  return obj.uuid4();
}
