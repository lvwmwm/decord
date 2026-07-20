// Module ID: 806
// Function ID: 9044
// Name: generateSpanId
// Dependencies: []

// Module 806 (generateSpanId)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.generateSpanId = function generateSpanId() {
  const obj = arg1(arg6[0]);
  return arg1(arg6[0]).uuid4().substring(16);
};
arg5.generateTraceId = function generateTraceId() {
  return arg1(arg6[0]).uuid4();
};
