// Module ID: 13049
// Function ID: 13050
// Name: generatePropagationContext
// Dependencies: [13050]
// Exports: generatePropagationContext, generateSpanId, generateTraceId

// Module 13049 (generatePropagationContext)
import _mod13050 from "module_13050" /* 13050 */;


export function generatePropagationContext() {
  let obj2;
  let str;
  const obj = { traceId: obj2.uuid4(), spanId: str.substring(16) };
  obj2 = _mod13050;
  const obj3 = _mod13050;
  str = obj3.uuid4();
  return obj;
}
export function generateSpanId() {
  const obj = _mod13050;
  const str = obj.uuid4();
  return str.substring(16);
}
export function generateTraceId() {
  const obj = _mod13050;
  return obj.uuid4();
}
