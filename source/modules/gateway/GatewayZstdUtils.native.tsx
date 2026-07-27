// Module ID: 12644
// Function ID: 97887
// Name: supportsZstd
// Dependencies: [27, 477, 12645, 2]
// Exports: createZstdContextWeb, supportsZstd

// Module 12644 (supportsZstd)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/gateway/GatewayZstdUtils.native.tsx");

export const supportsZstd = function supportsZstd() {
  if (obj.isAndroid()) {
    let supportsZstd = importDefault(12645).getConstants().supportsZstd;
    const obj2 = importDefault(12645);
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
