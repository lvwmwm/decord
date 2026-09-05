// Module ID: 1985
// Function ID: 1986
// Name: fluxApi
// Dependencies: [1351, 2]
// Exports: hasFluxApi

// Module 1985 (fluxApi)
import set from "set" /* 2 */;
import isBlockedDomain from "isBlockedDomain" /* 1351 */;

isBlockedDomain = isBlockedDomain.getFluxApi();
const result = set.fileFinishedImporting("modules/libdiscore/FluxApi.tsx");

export const FLUX_API = isBlockedDomain;
export const hasFluxApi = function hasFluxApi() {
  return null != isBlockedDomain;
};
