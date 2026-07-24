// Module ID: 7246
// Function ID: 58386
// Name: generateTraceId
// Dependencies: [7247]

// Module 7246 (generateTraceId)
const require = arg1;
const dependencyMap = arg6;
function generateTraceId() {
  return require(7247) /* getFirstException */.uuid4();
}
function generateSpanId() {
  const obj = require(7247) /* getFirstException */;
  return require(7247) /* getFirstException */.uuid4().substring(16);
}
arg5.generatePropagationContext = function generatePropagationContext() {
  return { traceId: generateTraceId(), spanId: generateSpanId() };
};
arg5.generateSpanId = generateSpanId;
arg5.generateTraceId = generateTraceId;
