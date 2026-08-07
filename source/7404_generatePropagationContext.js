// Module ID: 7404
// Function ID: 7405
// Name: generatePropagationContext
// Dependencies: [7405]

// Module 7404 (generatePropagationContext)
const require = arg1;
const dependencyMap = arg6;
arg5.generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: null, spanId: null };
  obj[0] = require(7405) /* addContextToFrame */.uuid4();
  const obj2 = require(7405) /* addContextToFrame */;
  const obj3 = require(7405) /* addContextToFrame */;
  obj[1] = require(7405) /* addContextToFrame */.uuid4().substring(16);
  return obj;
};
arg5.generateSpanId = function generateSpanId() {
  const obj = require(7405) /* addContextToFrame */;
  return require(7405) /* addContextToFrame */.uuid4().substring(16);
};
arg5.generateTraceId = function generateTraceId() {
  return require(7405) /* addContextToFrame */.uuid4();
};
