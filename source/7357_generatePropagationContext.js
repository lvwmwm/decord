// Module ID: 7357
// Function ID: 7358
// Name: generatePropagationContext
// Dependencies: [7358]

// Module 7357 (generatePropagationContext)
const require = arg1;
const dependencyMap = arg6;
arg5.generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: null, spanId: null };
  obj[0] = require(7358) /* addContextToFrame */.uuid4();
  const obj2 = require(7358) /* addContextToFrame */;
  const obj3 = require(7358) /* addContextToFrame */;
  obj[1] = require(7358) /* addContextToFrame */.uuid4().substring(16);
  return obj;
};
arg5.generateSpanId = function generateSpanId() {
  const obj = require(7358) /* addContextToFrame */;
  return require(7358) /* addContextToFrame */.uuid4().substring(16);
};
arg5.generateTraceId = function generateTraceId() {
  return require(7358) /* addContextToFrame */.uuid4();
};
