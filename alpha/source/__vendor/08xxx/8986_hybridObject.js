// Module ID: 8986
// Function ID: 8987
// Name: hybridObject
// Dependencies: [5115]

// Module 8986 (hybridObject)
import _mod5115 from "module_5115" /* 5115 */;

const NitroModules = _mod5115.NitroModules;
const hybridObject = NitroModules.createHybridObject("NitroFetch");
const NitroModules2 = _mod5115.NitroModules;
const hybridObject1 = NitroModules2.createHybridObject("NativeStorage");
const NitroModules3 = _mod5115.NitroModules;
const boxResult = NitroModules3.box(hybridObject);
const NitroModules4 = _mod5115.NitroModules;

export const NitroFetch = hybridObject;
export const NativeStorage = hybridObject1;
export const boxedNitroFetch = boxResult;
export const NitroCronetSingleton = NitroModules4.createHybridObject("NitroCronet");
