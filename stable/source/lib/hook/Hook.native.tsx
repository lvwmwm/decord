// Module ID: 16232
// Function ID: 16233
// Name: Hook
// Dependencies: [2]
// Exports: attachToProcess, cancelAttachToProcess, connectToHook, findSteamProcess

// Module 16232 (Hook)
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
