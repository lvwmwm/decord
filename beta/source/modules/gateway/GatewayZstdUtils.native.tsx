// Module ID: 14922
// Function ID: 14923
// Name: react-native
// Dependencies: [14923, 2]
// Exports: createZstdContextWeb, supportsZstd

// Module 14922 (react-native)
import react_nativeDefault from "react-native" /* 14923 */;
import size from "module_2" /* 2 */;

let constants;

const result = size.fileFinishedImporting("modules/gateway/GatewayZstdUtils.native.tsx");

export function supportsZstd() {
  const obj = react_nativeDefault;
  constants = obj.getConstants();
  let flag;
  if (constants != null) {
    flag = constants.supportsZstd;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}
export function createZstdContextWeb() {
  const error = new Error("Attempting to use createZstdContextWeb in a native context. Use MobileGatewayCompressionHandler instead.");
  throw error;
}
