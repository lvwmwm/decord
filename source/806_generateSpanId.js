// Module ID: 806
// Function ID: 9050
// Name: generateSpanId
// Dependencies: [807]

// Module 806 (generateSpanId)
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.generateSpanId = function generateSpanId() {
  const obj = require(807) /* getFirstException */;
  return require(807) /* getFirstException */.uuid4().substring(16);
};
arg5.generateTraceId = function generateTraceId() {
  return require(807) /* getFirstException */.uuid4();
};
