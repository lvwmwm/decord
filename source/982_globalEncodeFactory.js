// Module ID: 982
// Function ID: 10621
// Name: globalEncodeFactory
// Dependencies: []

// Module 982 (globalEncodeFactory)
function globalEncodeFactory(TextEncoder) {
  const arg1 = TextEncoder;
  return (arg0) => new arg0().encode(arg0);
}
function encodePolyfill(arg0) {
  const uint8Array = new Uint8Array(arg1(arg6[2]).utf8ToBytes(arg0));
  return uint8Array;
}
arg5.useEncodePolyfill = function useEncodePolyfill() {
  const sentryCarrier = arg1(arg6[0]).getSentryCarrier();
  if (arg1(arg6[1]).RN_GLOBAL_OBJ.TextEncoder) {
    sentryCarrier.encodePolyfill = globalEncodeFactory(arg1(arg6[1]).RN_GLOBAL_OBJ.TextEncoder);
  } else {
    sentryCarrier.encodePolyfill = encodePolyfill;
  }
};
arg5.globalEncodeFactory = globalEncodeFactory;
arg5.encodePolyfill = encodePolyfill;
