// Module ID: 12433
// Function ID: 12434
// Name: generatePropagationContext
// Dependencies: [12434]
// Exports: generatePropagationContext, generateSpanId, generateTraceId

// Module 12433 (generatePropagationContext)
import _mod12434 from "module_12434" /* 12434 */;


export const generatePropagationContext = function generatePropagationContext() {
  let obj2;
  let str;
  const obj = { traceId: obj2.uuid4(), spanId: str.substring(16) };
  obj2 = _mod12434;
  const obj3 = _mod12434;
  str = obj3.uuid4();
  return obj;
};
export const generateSpanId = function generateSpanId() {
  const obj = _mod12434;
  const str = obj.uuid4();
  return str.substring(16);
};
export const generateTraceId = function generateTraceId() {
  const obj = _mod12434;
  return obj.uuid4();
};
