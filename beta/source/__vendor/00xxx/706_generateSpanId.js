// Module ID: 706
// Function ID: 707
// Name: generateSpanId
// Dependencies: [707]
// Exports: generateSpanId, generateTraceId

// Module 706 (generateSpanId)
import uuid4 from "uuid4" /* 707 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const generateSpanId = function generateSpanId() {
  const obj = uuid4;
  const str = obj.uuid4();
  return str.substring(16);
};
export const generateTraceId = function generateTraceId() {
  const obj = uuid4;
  return obj.uuid4();
};
