// Module ID: 15263
// Function ID: 15264
// Name: Hook
// Dependencies: [2]
// Exports: attachToProcess, cancelAttachToProcess, findSteamProcess

// Module 15263 (Hook)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/hook/Hook.native.tsx");

export const attachToProcess = function attachToProcess() {
  return Promise.resolve();
};
export const cancelAttachToProcess = function cancelAttachToProcess() {
  return Promise.resolve();
};
export const findSteamProcess = function findSteamProcess() {
  return Promise.resolve(null);
};
