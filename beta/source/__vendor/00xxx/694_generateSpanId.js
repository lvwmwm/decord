// Module ID: 694
// Function ID: 695
// Name: generateSpanId
// Dependencies: [695]
// Exports: generateSpanId, generateTraceId

// Module 694 (generateSpanId)
import uuid4 from "uuid4" /* 695 */;

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
