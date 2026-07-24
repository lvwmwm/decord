// Module ID: 1847
// Function ID: 20262
// Name: _initLibdiscore
// Dependencies: [5, 27, 1848, 2]
// Exports: initLibdiscore, isLibdiscoreInitialized

// Module 1847 (_initLibdiscore)
import asyncGeneratorStep from "asyncGeneratorStep";
import { NativeModules } from "get ActivityIndicator";
import importAllResult from "setTimeout";

async function _initLibdiscore() {
  return obj ? obj.resume() : undefined;
}
const result = require("setTimeout").registerTimerPolyfills();
const result1 = require("setTimeout").fileFinishedImporting("../discord_common/js/packages/libdiscore/js_shim/js/initLibdiscore.native.tsx");

export const isLibdiscoreInitialized = function isLibdiscoreInitialized() {
  return undefined !== NativeModules.LibDiscoreModule;
};
export const initLibdiscore = function initLibdiscore() {
  return _initLibdiscore(...arguments);
};
