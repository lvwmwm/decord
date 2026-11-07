// Module ID: 13288
// Function ID: 13289
// Name: generatePropagationContext
// Dependencies: [13289]
// Exports: generatePropagationContext, generateSpanId, generateTraceId

// Module 13288 (generatePropagationContext)
import _mod13289 from "module_13289" /* 13289 */;


export function generatePropagationContext() {
  let obj2;
  let str;
  const obj = { traceId: obj2.uuid4(), spanId: str.substring(16) };
  obj2 = _mod13289;
  const obj3 = _mod13289;
  str = obj3.uuid4();
  return obj;
}
export function generateSpanId() {
  const obj = _mod13289;
  const str = obj.uuid4();
  return str.substring(16);
}
export function generateTraceId() {
  const obj = _mod13289;
  return obj.uuid4();
}
