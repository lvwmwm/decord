// Module ID: 7530
// Function ID: 7531
// Name: generatePropagationContext
// Dependencies: [7531]

// Module 7530 (generatePropagationContext)
const require = arg1;
const dependencyMap = arg6;
arg5.generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: null, spanId: null };
  obj[0] = require(7531) /* addContextToFrame */.uuid4();
  const obj2 = require(7531) /* addContextToFrame */;
  const obj3 = require(7531) /* addContextToFrame */;
  obj[1] = require(7531) /* addContextToFrame */.uuid4().substring(16);
  return obj;
};
arg5.generateSpanId = function generateSpanId() {
  const obj = require(7531) /* addContextToFrame */;
  return require(7531) /* addContextToFrame */.uuid4().substring(16);
};
arg5.generateTraceId = function generateTraceId() {
  return require(7531) /* addContextToFrame */.uuid4();
};
