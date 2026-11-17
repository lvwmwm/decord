// Module ID: 5187
// Function ID: 5188
// Name: FluxApi
// Dependencies: [1366, 2]
// Exports: hasFluxApi

// Module 5187 (FluxApi)
import shim_mod from "shim" /* 1366 */;
import size from "module_2" /* 2 */;

let shim = shim_mod;
shim = shim.getFluxApi();
const result = size.fileFinishedImporting("modules/libdiscore/FluxApi.tsx");

export const FLUX_API = shim;
export function hasFluxApi() {
  return null != shim;
}
