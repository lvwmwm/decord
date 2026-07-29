// Module ID: 6378
// Function ID: 6379
// Name: generatePropagationContext
// Dependencies: [6379]

// Module 6378 (generatePropagationContext)
const require = arg1;
const dependencyMap = arg6;
arg5.generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: null, spanId: null };
  obj[0] = require(6379) /* addContextToFrame */.uuid4();
  const obj2 = require(6379) /* addContextToFrame */;
  const obj3 = require(6379) /* addContextToFrame */;
  obj[1] = require(6379) /* addContextToFrame */.uuid4().substring(16);
  return obj;
};
arg5.generateSpanId = function generateSpanId() {
  const obj = require(6379) /* addContextToFrame */;
  return require(6379) /* addContextToFrame */.uuid4().substring(16);
};
arg5.generateTraceId = function generateTraceId() {
  return require(6379) /* addContextToFrame */.uuid4();
};
