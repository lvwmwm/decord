// Module ID: 8511
// Function ID: 8512
// Name: hybridObject
// Dependencies: [4895]

// Module 8511 (hybridObject)
import _mod4895 from "module_4895" /* 4895 */;

const NitroModules = _mod4895.NitroModules;
const hybridObject = NitroModules.createHybridObject("NitroFetch");
const NitroModules2 = _mod4895.NitroModules;
const hybridObject1 = NitroModules2.createHybridObject("NativeStorage");
const NitroModules3 = _mod4895.NitroModules;
const boxResult = NitroModules3.box(hybridObject);
const NitroModules4 = _mod4895.NitroModules;

export const NitroFetch = hybridObject;
export const NativeStorage = hybridObject1;
export const boxedNitroFetch = boxResult;
export const NitroCronetSingleton = NitroModules4.createHybridObject("NitroCronet");
