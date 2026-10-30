// Module ID: 693
// Function ID: 694
// Name: generateSpanId
// Dependencies: [694]
// Exports: generateSpanId, generateTraceId

// Module 693 (generateSpanId)
import uuid4 from "uuid4" /* 694 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function generateSpanId() {
  const obj = uuid4;
  const str = obj.uuid4();
  return str.substring(16);
}
export function generateTraceId() {
  const obj = uuid4;
  return obj.uuid4();
}
