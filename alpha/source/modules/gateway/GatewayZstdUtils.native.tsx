// Module ID: 13922
// Function ID: 13923
// Name: GatewayZstdUtils
// Dependencies: [17, 1382, 13923, 2]
// Exports: createZstdContextWeb, supportsZstd

// Module 13922 (GatewayZstdUtils)
import react_native from "react-native" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import react_nativeDefault from "react-native" /* 13923 */;
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
