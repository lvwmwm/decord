// Module ID: 9940
// Function ID: 9941
// Name: hybridObject
// Dependencies: [5210]

// Module 9940 (hybridObject)
import _mod5210 from "module_5210" /* 5210 */;

const NitroModules = _mod5210.NitroModules;
const hybridObject = NitroModules.createHybridObject("NitroFetch");
const NitroModules2 = _mod5210.NitroModules;
const hybridObject1 = NitroModules2.createHybridObject("NativeStorage");
const NitroModules3 = _mod5210.NitroModules;
const boxResult = NitroModules3.box(hybridObject);
const NitroModules4 = _mod5210.NitroModules;

export const NitroFetch = hybridObject;
export const NativeStorage = hybridObject1;
export const boxedNitroFetch = boxResult;
export const NitroCronetSingleton = NitroModules4.createHybridObject("NitroCronet");
