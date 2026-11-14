// Module ID: 1752
// Function ID: 1753
// Dependencies: [1719, 1720]
// Exports: callMicrotasks

// Module 1752
import registerCustomSerializable from "registerCustomSerializable" /* 1719 */;
import serializableMappingFlag from "serializableMappingFlag" /* 1720 */;

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
