// Module ID: 875
// Function ID: 876
// Name: globalEncodeFactory
// Dependencies: [874, 685, 876]
// Exports: useEncodePolyfill

// Module 875 (globalEncodeFactory)
import RN_GLOBAL_OBJ from "RN_GLOBAL_OBJ" /* 685 */;
import _mod874 from "module_874" /* 874 */;
import utf8ToBytes from "utf8ToBytes" /* 876 */;

require = arg1;
const dependencyMap = arg6;
function globalEncodeFactory(arg0) {
  closure_0 = arg0;
  return (arg0) => {
    const encoder = new TextEncoder();
    return encoder.encode(arg0);
  };
}
function encodePolyfill(arr) {
  const uint8Array = new Uint8Array(utf8ToBytes.utf8ToBytes(arr));
  return uint8Array;
}

export const useEncodePolyfill = () => {
  const sentryCarrier = _mod874.getSentryCarrier();
  if (RN_GLOBAL_OBJ.RN_GLOBAL_OBJ.TextEncoder) {
    if (typeof globalEncodeFactory === "function") {
      const TextEncoder = RN_GLOBAL_OBJ.RN_GLOBAL_OBJ.TextEncoder;
      sentryCarrier.encodePolyfill = (arg0) => {
        const encoder = new TextEncoder();
        return encoder.encode(arg0);
      };
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    sentryCarrier.encodePolyfill = encodePolyfill;
  }
};
export { globalEncodeFactory };
export { encodePolyfill };
