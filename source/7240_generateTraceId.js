// Module ID: 7240
// Function ID: 58300
// Name: generateTraceId
// Dependencies: []

// Module 7240 (generateTraceId)
function generateTraceId() {
  return arg1(arg6[0]).uuid4();
}
function generateSpanId() {
  const obj = arg1(arg6[0]);
  return arg1(arg6[0]).uuid4().substring(16);
}
arg5.generatePropagationContext = function generatePropagationContext() {
  return { traceId: generateTraceId(), spanId: generateSpanId() };
};
arg5.generateSpanId = generateSpanId;
arg5.generateTraceId = generateTraceId;
