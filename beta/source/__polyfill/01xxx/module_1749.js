// Module ID: 1749
// Function ID: 1750
// Dependencies: [1716, 1717]
// Exports: callMicrotasks

// Module 1749
import registerCustomSerializable from "registerCustomSerializable" /* 1716 */;
import serializableMappingFlag from "serializableMappingFlag" /* 1717 */;

let tmp2;
const items = [{ code: "(function callMicrotasks_Pnpm_deprecatedTs1(){})" }];
[tmp2] = items;
function callMicrotasks() {

}
callMicrotasks.__workletHash = 2444743836321;
callMicrotasks.__initData = tmp2;

export const makeShareable = registerCustomSerializable.makeShareable;
export const makeShareableCloneOnUIRecursive = registerCustomSerializable.makeShareableCloneOnUIRecursive;
export const makeShareableCloneRecursive = registerCustomSerializable.createSerializable;
export const isShareableRef = registerCustomSerializable.isSerializableRef;
export const shareableMappingCache = serializableMappingFlag.serializableMappingCache;
export { callMicrotasks };
