// Module ID: 12643
// Function ID: 97882
// Name: supportsZstd
// Dependencies: [27, 477, 12644, 2]
// Exports: createZstdContextWeb, supportsZstd

// Module 12643 (supportsZstd)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/gateway/GatewayZstdUtils.native.tsx");

export const supportsZstd = function supportsZstd() {
  if (obj.isAndroid()) {
    let supportsZstd = importDefault(12644).getConstants().supportsZstd;
    const obj2 = importDefault(12644);
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
