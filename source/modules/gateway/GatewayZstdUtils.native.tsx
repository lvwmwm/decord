// Module ID: 12462
// Function ID: 95250
// Name: supportsZstd
// Dependencies: [29, 1352, 4026, 1857]
// Exports: createZstdContextWeb, supportsZstd

// Module 12462 (supportsZstd)
import { NativeModules } from "_objectWithoutProperties";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const result = _isNativeReflectConstruct.fileFinishedImporting("modules/gateway/GatewayZstdUtils.native.tsx");

export const supportsZstd = function supportsZstd() {
  if (obj.isAndroid()) {
    let supportsZstd = importDefault(dependencyMap[2]).getConstants().supportsZstd;
    const obj2 = importDefault(dependencyMap[2]);
  } else {
    const DCDCompressionManager = NativeModules.DCDCompressionManager;
    supportsZstd = undefined;
    if (null != DCDCompressionManager) {
      supportsZstd = DCDCompressionManager.supportsZstd;
    }
    supportsZstd = null != supportsZstd && supportsZstd;
  }
  return supportsZstd;
};
export const createZstdContextWeb = function createZstdContextWeb() {
  const error = new Error("Attempting to use createZstdContextWeb in a native context. Use MobileGatewayCompressionHandler instead.");
  throw error;
};
