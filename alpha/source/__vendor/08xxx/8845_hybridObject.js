// Module ID: 8845
// Function ID: 8846
// Name: hybridObject
// Dependencies: [4989]

// Module 8845 (hybridObject)
import _mod4989 from "module_4989" /* 4989 */;

const NitroModules = _mod4989.NitroModules;
const hybridObject = NitroModules.createHybridObject("NitroFetch");
const NitroModules2 = _mod4989.NitroModules;
const hybridObject1 = NitroModules2.createHybridObject("NativeStorage");
const NitroModules3 = _mod4989.NitroModules;
const boxResult = NitroModules3.box(hybridObject);
const NitroModules4 = _mod4989.NitroModules;

export const NitroFetch = hybridObject;
export const NativeStorage = hybridObject1;
export const boxedNitroFetch = boxResult;
export const NitroCronetSingleton = NitroModules4.createHybridObject("NitroCronet");
