// Module ID: 4700
// Function ID: 4701
// Name: FluxApi
// Dependencies: [1366, 2]
// Exports: hasFluxApi

// Module 4700 (FluxApi)
import shim_mod from "shim" /* 1366 */;
import size from "module_2" /* 2 */;

let shim = shim_mod;
shim = shim.getFluxApi();
const result = size.fileFinishedImporting("modules/libdiscore/FluxApi.tsx");

export const FLUX_API = shim;
export function hasFluxApi() {
  return null != shim;
}
