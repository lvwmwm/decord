// Module ID: 9973
// Function ID: 9974
// Name: hybridObject
// Dependencies: [5242]

// Module 9973 (hybridObject)
import _mod5242 from "module_5242" /* 5242 */;

const NitroModules = _mod5242.NitroModules;
const hybridObject = NitroModules.createHybridObject("NitroFetch");
const NitroModules2 = _mod5242.NitroModules;
const hybridObject1 = NitroModules2.createHybridObject("NativeStorage");
const NitroModules3 = _mod5242.NitroModules;
const boxResult = NitroModules3.box(hybridObject);
const NitroModules4 = _mod5242.NitroModules;

export const NitroFetch = hybridObject;
export const NativeStorage = hybridObject1;
export const boxedNitroFetch = boxResult;
export const NitroCronetSingleton = NitroModules4.createHybridObject("NitroCronet");
