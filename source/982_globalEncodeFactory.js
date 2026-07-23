// Module ID: 982
// Function ID: 10626
// Name: globalEncodeFactory
// Dependencies: [981, 793, 983]

// Module 982 (globalEncodeFactory)
const require = arg1;
const dependencyMap = arg6;
function globalEncodeFactory(TextEncoder) {
  let closure_0 = TextEncoder;
  return (arg0) => new closure_0().encode(arg0);
}
function encodePolyfill(arg0) {
  const uint8Array = new Uint8Array(require(983) /* utf8ToBytes */.utf8ToBytes(arg0));
  return uint8Array;
}
arg5.useEncodePolyfill = function useEncodePolyfill() {
  const sentryCarrier = require(981) /* getSentryCarrier */.getSentryCarrier();
  if (require(793) /* RN_GLOBAL_OBJ */.RN_GLOBAL_OBJ.TextEncoder) {
    sentryCarrier.encodePolyfill = globalEncodeFactory(require(793) /* RN_GLOBAL_OBJ */.RN_GLOBAL_OBJ.TextEncoder);
  } else {
    sentryCarrier.encodePolyfill = encodePolyfill;
  }
};
arg5.globalEncodeFactory = globalEncodeFactory;
arg5.encodePolyfill = encodePolyfill;
