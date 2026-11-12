// Module ID: 13320
// Function ID: 13321
// Name: generatePropagationContext
// Dependencies: [13321]
// Exports: generatePropagationContext, generateSpanId, generateTraceId

// Module 13320 (generatePropagationContext)
import _mod13321 from "module_13321" /* 13321 */;


export function generatePropagationContext() {
  let obj2;
  let str;
  const obj = { traceId: obj2.uuid4(), spanId: str.substring(16) };
  obj2 = _mod13321;
  const obj3 = _mod13321;
  str = obj3.uuid4();
  return obj;
}
export function generateSpanId() {
  const obj = _mod13321;
  const str = obj.uuid4();
  return str.substring(16);
}
export function generateTraceId() {
  const obj = _mod13321;
  return obj.uuid4();
}
