// Module ID: 1844
// Function ID: 20251
// Name: fluxApi
// Dependencies: [1845, 2]
// Exports: hasFluxApi

// Module 1844 (fluxApi)
import isBlockedDomain from "isBlockedDomain";

isBlockedDomain = isBlockedDomain.getFluxApi();
const result = require("set").fileFinishedImporting("modules/libdiscore/FluxApi.tsx");

export const FLUX_API = isBlockedDomain;
export const hasFluxApi = function hasFluxApi() {
  return null != isBlockedDomain;
};
