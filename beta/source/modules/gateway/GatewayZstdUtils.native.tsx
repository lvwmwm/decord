// Module ID: 14730
// Function ID: 14731
// Name: react-native
// Dependencies: [14731, 2]
// Exports: createZstdContextWeb, supportsZstd

// Module 14730 (react-native)
import react_nativeDefault from "react-native" /* 14731 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/gateway/GatewayZstdUtils.native.tsx");

export const supportsZstd = function supportsZstd() {
  const obj = react_nativeDefault;
  return obj.getConstants().supportsZstd;
};
export const createZstdContextWeb = function createZstdContextWeb() {
  const error = new Error("Attempting to use createZstdContextWeb in a native context. Use MobileGatewayCompressionHandler instead.");
  throw error;
};
