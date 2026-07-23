// Module ID: 566
// Function ID: 6824
// Name: initialize
// Dependencies: [567, 568, 619, 570, 626, 2, 627, 625, 624]
// Exports: destroy, initialize

// Module 566 (initialize)
import _superPropGet from "_superPropGet";
import { Store } from "Store";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

let DeviceSettingsStore;
let NO_DATA;
let OfflineCacheStore;
let createFetchStore;
function initialize() {
  Store.initialize();
}
const PersistedStore = _superPropGet.PersistedStore;
({ DeviceSettingsStore, OfflineCacheStore } = _superPropGet);
const obj = { Emitter: require("logger"), Store, PersistedStore, DeviceSettingsStore, OfflineCacheStore, connectStores: require("_callSuper"), initialize };
({ createFetchStore, NO_DATA } = _isNativeReflectConstruct);
Object.defineProperty(obj, "initialized", { get: () => Store.initialized, set: undefined });
const result = require("_isNativeReflectConstruct").fileFinishedImporting("../discord_common/js/packages/flux/index.tsx");

export default obj;
export { NO_DATA };
export { Store };
export const Dispatcher = require("_createForOfIteratorHelperLoose").Dispatcher;
export const BatchedStoreListener = require("BatchedStoreListener").BatchedStoreListener;
export { createFetchStore };
export const statesWillNeverBeEqual = require("defaultAreStatesEqual").statesWillNeverBeEqual;
export const useStateFromStores = require("defaultAreStatesEqual").useStateFromStores;
export const useStateFromStoresObject = require("defaultAreStatesEqual").useStateFromStoresObject;
export const useStateFromStoresArray = require("defaultAreStatesEqual").useStateFromStoresArray;
export { initialize };
export const destroy = function destroy() {
  PersistedStore.destroy();
};
