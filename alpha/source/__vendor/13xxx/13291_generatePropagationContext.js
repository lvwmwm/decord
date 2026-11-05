// Module ID: 13291
// Function ID: 13292
// Name: generatePropagationContext
// Dependencies: [13292]
// Exports: generatePropagationContext, generateSpanId, generateTraceId

// Module 13291 (generatePropagationContext)
import _mod13292 from "module_13292" /* 13292 */;


export function generatePropagationContext() {
  let obj2;
  let str;
  const obj = { traceId: obj2.uuid4(), spanId: str.substring(16) };
  obj2 = _mod13292;
  const obj3 = _mod13292;
  str = obj3.uuid4();
  return obj;
}
export function generateSpanId() {
  const obj = _mod13292;
  const str = obj.uuid4();
  return str.substring(16);
}
export function generateTraceId() {
  const obj = _mod13292;
  return obj.uuid4();
}
