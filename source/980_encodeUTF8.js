// Module ID: 980
// Function ID: 10622
// Name: encodeUTF8
// Dependencies: [981, 982]

// Module 980 (encodeUTF8)
const require = arg1;
const dependencyMap = arg6;
arg5.encodeUTF8 = function encodeUTF8(arg0) {
  const sentryCarrier = require(981) /* getSentryCarrier */.getSentryCarrier();
  if (!sentryCarrier.encodePolyfill) {
    const encodePolyfill = require(982) /* globalEncodeFactory */.useEncodePolyfill();
    const obj3 = require(982) /* globalEncodeFactory */;
  }
  return sentryCarrier.encodePolyfill(arg0);
};
