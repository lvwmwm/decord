// Module ID: 15459
// Function ID: 15460
// Name: react-native
// Dependencies: [15460, 2]
// Exports: createZstdContextWeb, supportsZstd

// Module 15459 (react-native)
import react_nativeDefault from "react-native" /* 15460 */;
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
