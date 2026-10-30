// Module ID: 15846
// Function ID: 15847
// Name: Hook
// Dependencies: [2]
// Exports: attachToProcess, cancelAttachToProcess, findSteamProcess

// Module 15846 (Hook)
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
