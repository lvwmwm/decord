// Module ID: 4891
// Function ID: 4892
// Name: FluxApi
// Dependencies: [1361, 2]
// Exports: hasFluxApi

// Module 4891 (FluxApi)
import shim_mod from "shim" /* 1361 */;
import size from "module_2" /* 2 */;

let shim = shim_mod;
shim = shim.getFluxApi();
const result = size.fileFinishedImporting("modules/libdiscore/FluxApi.tsx");

export const FLUX_API = shim;
export function hasFluxApi() {
  return null != shim;
}
