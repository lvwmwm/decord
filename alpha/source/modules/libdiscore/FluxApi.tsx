// Module ID: 4671
// Function ID: 4672
// Name: FluxApi
// Dependencies: [1364, 2]
// Exports: hasFluxApi

// Module 4671 (FluxApi)
import shim_mod from "shim" /* 1364 */;
import size from "module_2" /* 2 */;

let shim = shim_mod;
shim = shim.getFluxApi();
const result = size.fileFinishedImporting("modules/libdiscore/FluxApi.tsx");

export const FLUX_API = shim;
export function hasFluxApi() {
  return null != shim;
}
