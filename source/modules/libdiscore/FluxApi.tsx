// Module ID: 1914
// Function ID: 1915
// Name: fluxApi
// Dependencies: [1915, 2]
// Exports: hasFluxApi

// Module 1914 (fluxApi)
import set from "set" /* 2 */;
import isBlockedDomain from "isBlockedDomain" /* 1915 */;

isBlockedDomain = isBlockedDomain.getFluxApi();
const result = set.fileFinishedImporting("modules/libdiscore/FluxApi.tsx");

export const FLUX_API = isBlockedDomain;
export const hasFluxApi = function hasFluxApi() {
  return null != isBlockedDomain;
};
