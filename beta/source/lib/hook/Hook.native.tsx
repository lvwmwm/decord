// Module ID: 14899
// Function ID: 14900
// Name: Hook
// Dependencies: [2]
// Exports: attachToProcess, cancelAttachToProcess, connectToHook, findSteamProcess

// Module 14899 (Hook)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/hook/Hook.native.tsx");

export function attachToProcess() {
  return Promise.resolve();
}
export function cancelAttachToProcess() {
  return Promise.resolve();
}
export function findSteamProcess() {
  return Promise.resolve(null);
}
export function connectToHook() {
  return Promise.resolve(null);
}
