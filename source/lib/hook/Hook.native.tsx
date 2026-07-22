// Module ID: 12651
// Function ID: 97311
// Name: isHookModuleTooOld
// Dependencies: []
// Exports: attachToProcess, cancelAttachToProcess, findSteamProcess, isHookModuleTooOld

// Module 12651 (isHookModuleTooOld)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("lib/hook/Hook.native.tsx");

export function isHookModuleTooOld() {
  return true;
}
export const attachToProcess = function attachToProcess(pidFromDesktopSource, arg1) {
  return Promise.resolve();
};
export const cancelAttachToProcess = function cancelAttachToProcess(soundshareId) {
  return Promise.resolve();
};
export const findSteamProcess = function findSteamProcess() {
  return Promise.resolve(null);
};
