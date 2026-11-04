// Module ID: 13283
// Function ID: 13284
// Name: generatePropagationContext
// Dependencies: [13284]
// Exports: generatePropagationContext, generateSpanId, generateTraceId

// Module 13283 (generatePropagationContext)
import _mod13284 from "module_13284" /* 13284 */;


export function generatePropagationContext() {
  let obj2;
  let str;
  const obj = { traceId: obj2.uuid4(), spanId: str.substring(16) };
  obj2 = _mod13284;
  const obj3 = _mod13284;
  str = obj3.uuid4();
  return obj;
}
export function generateSpanId() {
  const obj = _mod13284;
  const str = obj.uuid4();
  return str.substring(16);
}
export function generateTraceId() {
  const obj = _mod13284;
  return obj.uuid4();
}
