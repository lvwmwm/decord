// Module ID: 6357
// Function ID: 56928
// Name: generateTraceId
// Dependencies: [6358]

// Module 6357 (generateTraceId)
const require = arg1;
const dependencyMap = arg6;
function generateTraceId() {
  return require(6358) /* getFirstException */.uuid4();
}
function generateSpanId() {
  const obj = require(6358) /* getFirstException */;
  return require(6358) /* getFirstException */.uuid4().substring(16);
}
arg5.generatePropagationContext = function generatePropagationContext() {
  return { traceId: generateTraceId(), spanId: generateSpanId() };
};
arg5.generateSpanId = generateSpanId;
arg5.generateTraceId = generateTraceId;
