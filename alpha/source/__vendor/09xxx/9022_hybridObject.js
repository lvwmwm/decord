// Module ID: 9022
// Function ID: 9023
// Name: hybridObject
// Dependencies: [5325]

// Module 9022 (hybridObject)
import _mod5325 from "module_5325" /* 5325 */;

const NitroModules = _mod5325.NitroModules;
const hybridObject = NitroModules.createHybridObject("NitroFetch");
const NitroModules2 = _mod5325.NitroModules;
const hybridObject1 = NitroModules2.createHybridObject("NativeStorage");
const NitroModules3 = _mod5325.NitroModules;
const boxResult = NitroModules3.box(hybridObject);
const NitroModules4 = _mod5325.NitroModules;

export const NitroFetch = hybridObject;
export const NativeStorage = hybridObject1;
export const boxedNitroFetch = boxResult;
export const NitroCronetSingleton = NitroModules4.createHybridObject("NitroCronet");
