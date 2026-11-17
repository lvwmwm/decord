// Module ID: 9820
// Function ID: 9821
// Name: generatePropagationContext
// Dependencies: [9821]
// Exports: generatePropagationContext, generateSpanId, generateTraceId

// Module 9820 (generatePropagationContext)
import _mod9821 from "module_9821" /* 9821 */;


export function generatePropagationContext() {
  let obj2;
  let str;
  const obj = { traceId: obj2.uuid4(), spanId: str.substring(16) };
  obj2 = _mod9821;
  const obj3 = _mod9821;
  str = obj3.uuid4();
  return obj;
}
export function generateSpanId() {
  const obj = _mod9821;
  const str = obj.uuid4();
  return str.substring(16);
}
export function generateTraceId() {
  const obj = _mod9821;
  return obj.uuid4();
}
