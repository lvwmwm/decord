// Module ID: 6321
// Function ID: 56839
// Name: generateTraceId
// Dependencies: [6322]

// Module 6321 (generateTraceId)
const require = arg1;
const dependencyMap = arg6;
function generateTraceId() {
  return require(6322) /* getFirstException */.uuid4();
}
function generateSpanId() {
  const obj = require(6322) /* getFirstException */;
  return require(6322) /* getFirstException */.uuid4().substring(16);
}
arg5.generatePropagationContext = function generatePropagationContext() {
  return { traceId: generateTraceId(), spanId: generateSpanId() };
};
arg5.generateSpanId = generateSpanId;
arg5.generateTraceId = generateTraceId;
