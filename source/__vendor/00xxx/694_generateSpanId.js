// Module ID: 694
// Function ID: 695
// Name: generateSpanId
// Dependencies: [695]

// Module 694 (generateSpanId)
import addContextToFrame from "addContextToFrame" /* 695 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.generateSpanId = function generateSpanId() {
  const obj = addContextToFrame;
  return addContextToFrame.uuid4().substring(16);
};
arg5.generateTraceId = function generateTraceId() {
  return addContextToFrame.uuid4();
};
