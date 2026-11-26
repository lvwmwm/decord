// Module ID: 9807
// Function ID: 9808
// Name: generatePropagationContext
// Dependencies: [9808]
// Exports: generatePropagationContext, generateSpanId, generateTraceId

// Module 9807 (generatePropagationContext)
import _mod9808 from "module_9808" /* 9808 */;


export function generatePropagationContext() {
  let obj2;
  let str;
  const obj = { traceId: obj2.uuid4(), spanId: str.substring(16) };
  obj2 = _mod9808;
  const obj3 = _mod9808;
  str = obj3.uuid4();
  return obj;
}
export function generateSpanId() {
  const obj = _mod9808;
  const str = obj.uuid4();
  return str.substring(16);
}
export function generateTraceId() {
  const obj = _mod9808;
  return obj.uuid4();
}
