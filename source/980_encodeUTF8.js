// Module ID: 980
// Function ID: 10621
// Name: encodeUTF8
// Dependencies: []

// Module 980 (encodeUTF8)
arg5.encodeUTF8 = function encodeUTF8(arg0) {
  const sentryCarrier = arg1(arg6[0]).getSentryCarrier();
  if (!sentryCarrier.encodePolyfill) {
    const encodePolyfill = arg1(arg6[1]).useEncodePolyfill();
    const obj3 = arg1(arg6[1]);
  }
  return sentryCarrier.encodePolyfill(arg0);
};
