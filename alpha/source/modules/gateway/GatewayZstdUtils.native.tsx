// Module ID: 13475
// Function ID: 13476
// Name: GatewayZstdUtils
// Dependencies: [17, 1369, 13476, 2]
// Exports: createZstdContextWeb, supportsZstd

// Module 13475 (GatewayZstdUtils)
import react_native from "react-native" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import react_nativeDefault from "react-native" /* 13476 */;
import size from "module_2" /* 2 */;

const NativeModules = react_native.NativeModules;
const result = size.fileFinishedImporting("modules/gateway/GatewayZstdUtils.native.tsx");

export const supportsZstd = function supportsZstd() {
  let flag;
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    const obj2 = react_nativeDefault;
    flag = obj2.getConstants().supportsZstd;
  } else {
    const DCDCompressionManager = NativeModules.DCDCompressionManager;
    flag = undefined;
    if (DCDCompressionManager != null) {
      flag = DCDCompressionManager.supportsZstd;
    }
    if (flag == null) {
      flag = false;
    }
  }
  return flag;
};
export const createZstdContextWeb = function createZstdContextWeb() {
  const error = new Error("Attempting to use createZstdContextWeb in a native context. Use MobileGatewayCompressionHandler instead.");
  throw error;
};
