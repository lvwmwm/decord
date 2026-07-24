// Module ID: 1843
// Function ID: 20239
// Name: fluxApi
// Dependencies: [1844, 2]
// Exports: hasFluxApi

// Module 1843 (fluxApi)
import isBlockedDomain from "isBlockedDomain";

isBlockedDomain = isBlockedDomain.getFluxApi();
const result = require("set").fileFinishedImporting("modules/libdiscore/FluxApi.tsx");

export const FLUX_API = isBlockedDomain;
export const hasFluxApi = function hasFluxApi() {
  return null != isBlockedDomain;
};
