// Module ID: 9741
// Function ID: 9742
// Name: generatePropagationContext
// Dependencies: [9742]
// Exports: generatePropagationContext, generateSpanId, generateTraceId

// Module 9741 (generatePropagationContext)
import _mod9742 from "module_9742" /* 9742 */;


export function generatePropagationContext() {
  let obj2;
  let str;
  const obj = { traceId: obj2.uuid4(), spanId: str.substring(16) };
  obj2 = _mod9742;
  const obj3 = _mod9742;
  str = obj3.uuid4();
  return obj;
}
export function generateSpanId() {
  const obj = _mod9742;
  const str = obj.uuid4();
  return str.substring(16);
}
export function generateTraceId() {
  const obj = _mod9742;
  return obj.uuid4();
}
