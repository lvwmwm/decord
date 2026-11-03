// Module ID: 13200
// Function ID: 13201
// Name: generatePropagationContext
// Dependencies: [13201]
// Exports: generatePropagationContext, generateSpanId, generateTraceId

// Module 13200 (generatePropagationContext)
import _mod13201 from "module_13201" /* 13201 */;


export function generatePropagationContext() {
  let obj2;
  let str;
  const obj = { traceId: obj2.uuid4(), spanId: str.substring(16) };
  obj2 = _mod13201;
  const obj3 = _mod13201;
  str = obj3.uuid4();
  return obj;
}
export function generateSpanId() {
  const obj = _mod13201;
  const str = obj.uuid4();
  return str.substring(16);
}
export function generateTraceId() {
  const obj = _mod13201;
  return obj.uuid4();
}
