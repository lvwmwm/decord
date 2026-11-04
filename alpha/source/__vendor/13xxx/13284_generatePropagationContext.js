// Module ID: 13284
// Function ID: 13285
// Name: generatePropagationContext
// Dependencies: [13285]
// Exports: generatePropagationContext, generateSpanId, generateTraceId

// Module 13284 (generatePropagationContext)
import _mod13285 from "module_13285" /* 13285 */;


export function generatePropagationContext() {
  let obj2;
  let str;
  const obj = { traceId: obj2.uuid4(), spanId: str.substring(16) };
  obj2 = _mod13285;
  const obj3 = _mod13285;
  str = obj3.uuid4();
  return obj;
}
export function generateSpanId() {
  const obj = _mod13285;
  const str = obj.uuid4();
  return str.substring(16);
}
export function generateTraceId() {
  const obj = _mod13285;
  return obj.uuid4();
}
