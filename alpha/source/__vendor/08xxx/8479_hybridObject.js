// Module ID: 8479
// Function ID: 8480
// Name: hybridObject
// Dependencies: [4866]

// Module 8479 (hybridObject)
import _mod4866 from "module_4866" /* 4866 */;

const NitroModules = _mod4866.NitroModules;
const hybridObject = NitroModules.createHybridObject("NitroFetch");
const NitroModules2 = _mod4866.NitroModules;
const hybridObject1 = NitroModules2.createHybridObject("NativeStorage");
const NitroModules3 = _mod4866.NitroModules;
const boxResult = NitroModules3.box(hybridObject);
const NitroModules4 = _mod4866.NitroModules;

export const NitroFetch = hybridObject;
export const NativeStorage = hybridObject1;
export const boxedNitroFetch = boxResult;
export const NitroCronetSingleton = NitroModules4.createHybridObject("NitroCronet");
