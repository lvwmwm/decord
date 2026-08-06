// Module ID: 1897
// Function ID: 1898
// Name: fluxApi
// Dependencies: [1898, 2]
// Exports: hasFluxApi

// Module 1897 (fluxApi)
import isBlockedDomain from "isBlockedDomain";

isBlockedDomain = isBlockedDomain.getFluxApi();
const result = require("set").fileFinishedImporting("modules/libdiscore/FluxApi.tsx");

export const FLUX_API = isBlockedDomain;
export const hasFluxApi = function hasFluxApi() {
  return null != isBlockedDomain;
};
