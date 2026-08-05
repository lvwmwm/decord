// Module ID: 12981
// Function ID: 12982
// Name: isHookModuleTooOld
// Dependencies: [2]
// Exports: attachToProcess, cancelAttachToProcess, findSteamProcess, isHookModuleTooOld

// Module 12981 (isHookModuleTooOld)
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
