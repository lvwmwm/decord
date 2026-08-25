// Module ID: 13305
// Function ID: 13306
// Name: isHookModuleTooOld
// Dependencies: [2]
// Exports: attachToProcess, cancelAttachToProcess, findSteamProcess, isHookModuleTooOld

// Module 13305 (isHookModuleTooOld)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("lib/hook/Hook.native.tsx");

export function isHookModuleTooOld() {
  return true;
}
export const attachToProcess = function attachToProcess(soundshareId, arg1) {
  return Promise.resolve();
};
export const cancelAttachToProcess = function cancelAttachToProcess(soundshareId) {
  return Promise.resolve();
};
export const findSteamProcess = function findSteamProcess() {
  return Promise.resolve(null);
};
