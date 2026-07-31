// Module ID: 12913
// Function ID: 12914
// Name: isHookModuleTooOld
// Dependencies: [2]
// Exports: attachToProcess, cancelAttachToProcess, findSteamProcess, isHookModuleTooOld

// Module 12913 (isHookModuleTooOld)
const result = require("set").fileFinishedImporting("lib/hook/Hook.native.tsx");

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
