// Module ID: 12441
// Function ID: 95018
// Name: getCachedUseAltGateway
// Dependencies: []
// Exports: default

// Module 12441 (getCachedUseAltGateway)
const NativeModules = require(dependencyMap[0]).NativeModules;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/gateway/getCachedUseAltGateway.native.tsx");

export default function getCachedUseAltGateway() {
  if (obj.isAndroid()) {
    const useAltGateway2 = importDefault(dependencyMap[2]).getConstants().useAltGateway;
    let tmp3 = null != useAltGateway2 && useAltGateway2;
    const obj2 = importDefault(dependencyMap[2]);
    const tmp7 = null != useAltGateway2 && useAltGateway2;
  } else {
    const useAltGateway = NativeModules.DCDFastConnectManager.useAltGateway;
    tmp3 = null != useAltGateway && useAltGateway;
  }
  return tmp3;
};
