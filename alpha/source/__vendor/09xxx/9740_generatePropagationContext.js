// Module ID: 9740
// Function ID: 9741
// Name: generatePropagationContext
// Dependencies: [9741]
// Exports: generatePropagationContext, generateSpanId, generateTraceId

// Module 9740 (generatePropagationContext)
import _mod9741 from "module_9741" /* 9741 */;


export function generatePropagationContext() {
  let obj2;
  let str;
  const obj = { traceId: obj2.uuid4(), spanId: str.substring(16) };
  obj2 = _mod9741;
  const obj3 = _mod9741;
  str = obj3.uuid4();
  return obj;
}
export function generateSpanId() {
  const obj = _mod9741;
  const str = obj.uuid4();
  return str.substring(16);
}
export function generateTraceId() {
  const obj = _mod9741;
  return obj.uuid4();
}
