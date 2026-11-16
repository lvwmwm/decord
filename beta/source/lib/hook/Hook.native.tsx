// Module ID: 16114
// Function ID: 16115
// Name: Hook
// Dependencies: [2]
// Exports: attachToProcess, cancelAttachToProcess, connectToHook, findSteamProcess

// Module 16114 (Hook)
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
