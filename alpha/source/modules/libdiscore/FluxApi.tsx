// Module ID: 5019
// Function ID: 5020
// Name: FluxApi
// Dependencies: [1363, 2]
// Exports: hasFluxApi

// Module 5019 (FluxApi)
import shim_mod from "shim" /* 1363 */;
import size from "module_2" /* 2 */;

let shim = shim_mod;
shim = shim.getFluxApi();
const result = size.fileFinishedImporting("modules/libdiscore/FluxApi.tsx");

export const FLUX_API = shim;
export function hasFluxApi() {
  return null != shim;
}
