// Module ID: 13302
// Function ID: 13303
// Name: generatePropagationContext
// Dependencies: [13303]
// Exports: generatePropagationContext, generateSpanId, generateTraceId

// Module 13302 (generatePropagationContext)
import _mod13303 from "module_13303" /* 13303 */;


export function generatePropagationContext() {
  let obj2;
  let str;
  const obj = { traceId: obj2.uuid4(), spanId: str.substring(16) };
  obj2 = _mod13303;
  const obj3 = _mod13303;
  str = obj3.uuid4();
  return obj;
}
export function generateSpanId() {
  const obj = _mod13303;
  const str = obj.uuid4();
  return str.substring(16);
}
export function generateTraceId() {
  const obj = _mod13303;
  return obj.uuid4();
}
