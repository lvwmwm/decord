// Module ID: 12863
// Function ID: 12864
// Name: generatePropagationContext
// Dependencies: [12864]
// Exports: generatePropagationContext, generateSpanId, generateTraceId

// Module 12863 (generatePropagationContext)
import _mod12864 from "module_12864" /* 12864 */;


export function generatePropagationContext() {
  let obj2;
  let str;
  const obj = { traceId: obj2.uuid4(), spanId: str.substring(16) };
  obj2 = _mod12864;
  const obj3 = _mod12864;
  str = obj3.uuid4();
  return obj;
}
export function generateSpanId() {
  const obj = _mod12864;
  const str = obj.uuid4();
  return str.substring(16);
}
export function generateTraceId() {
  const obj = _mod12864;
  return obj.uuid4();
}
