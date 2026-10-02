// Module ID: 561
// Function ID: 562
// Name: FluxApi
// Dependencies: [562, 2]
// Exports: hasFluxApi

// Module 561 (FluxApi)
import shim_mod from "shim" /* 562 */;
import size from "module_2" /* 2 */;

let shim = shim_mod;
shim = shim.getFluxApi();
const result = size.fileFinishedImporting("modules/libdiscore/FluxApi.tsx");

export const FLUX_API = shim;
export const hasFluxApi = function hasFluxApi() {
  return null != shim;
};
