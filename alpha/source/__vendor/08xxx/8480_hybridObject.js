// Module ID: 8480
// Function ID: 8481
// Name: hybridObject
// Dependencies: [4864]

// Module 8480 (hybridObject)
import _mod4864 from "module_4864" /* 4864 */;

const NitroModules = _mod4864.NitroModules;
const hybridObject = NitroModules.createHybridObject("NitroFetch");
const NitroModules2 = _mod4864.NitroModules;
const hybridObject1 = NitroModules2.createHybridObject("NativeStorage");
const NitroModules3 = _mod4864.NitroModules;
const boxResult = NitroModules3.box(hybridObject);
const NitroModules4 = _mod4864.NitroModules;

export const NitroFetch = hybridObject;
export const NativeStorage = hybridObject1;
export const boxedNitroFetch = boxResult;
export const NitroCronetSingleton = NitroModules4.createHybridObject("NitroCronet");
