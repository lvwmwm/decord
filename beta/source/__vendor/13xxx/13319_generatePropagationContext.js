// Module ID: 13319
// Function ID: 13320
// Name: generatePropagationContext
// Dependencies: [13320]
// Exports: generatePropagationContext, generateSpanId, generateTraceId

// Module 13319 (generatePropagationContext)
import _mod13320 from "module_13320" /* 13320 */;


export function generatePropagationContext() {
  let obj2;
  let str;
  const obj = { traceId: obj2.uuid4(), spanId: str.substring(16) };
  obj2 = _mod13320;
  const obj3 = _mod13320;
  str = obj3.uuid4();
  return obj;
}
export function generateSpanId() {
  const obj = _mod13320;
  const str = obj.uuid4();
  return str.substring(16);
}
export function generateTraceId() {
  const obj = _mod13320;
  return obj.uuid4();
}
