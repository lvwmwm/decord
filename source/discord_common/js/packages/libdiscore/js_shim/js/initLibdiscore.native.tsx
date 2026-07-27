// Module ID: 1848
// Function ID: 20274
// Name: _initLibdiscore
// Dependencies: [5, 27, 1849, 2]
// Exports: initLibdiscore, isLibdiscoreInitialized

// Module 1848 (_initLibdiscore)
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
