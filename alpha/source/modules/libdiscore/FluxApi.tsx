// Module ID: 4886
// Function ID: 4887
// Name: FluxApi
// Dependencies: [1362, 2]
// Exports: hasFluxApi

// Module 4886 (FluxApi)
import shim_mod from "shim" /* 1362 */;
import size from "module_2" /* 2 */;

let shim = shim_mod;
shim = shim.getFluxApi();
const result = size.fileFinishedImporting("modules/libdiscore/FluxApi.tsx");

export const FLUX_API = shim;
export function hasFluxApi() {
  return null != shim;
}
