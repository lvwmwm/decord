// Module ID: 13014
// Function ID: 13015
// Name: generatePropagationContext
// Dependencies: [13015]
// Exports: generatePropagationContext, generateSpanId, generateTraceId

// Module 13014 (generatePropagationContext)
import _mod13015 from "module_13015" /* 13015 */;


export function generatePropagationContext() {
  let obj2;
  let str;
  const obj = { traceId: obj2.uuid4(), spanId: str.substring(16) };
  obj2 = _mod13015;
  const obj3 = _mod13015;
  str = obj3.uuid4();
  return obj;
}
export function generateSpanId() {
  const obj = _mod13015;
  const str = obj.uuid4();
  return str.substring(16);
}
export function generateTraceId() {
  const obj = _mod13015;
  return obj.uuid4();
}
