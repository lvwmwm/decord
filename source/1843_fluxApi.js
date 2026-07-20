// Module ID: 1843
// Function ID: 20232
// Name: fluxApi
// Dependencies: []
// Exports: hasFluxApi

// Module 1843 (fluxApi)
const _module = require(dependencyMap[0]);
const fluxApi = _module.getFluxApi();
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/libdiscore/FluxApi.tsx");

export const FLUX_API = fluxApi;
export const hasFluxApi = function hasFluxApi() {
  return null != fluxApi;
};
