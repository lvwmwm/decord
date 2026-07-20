// Module ID: 566
// Function ID: 6824
// Name: initialize
// Dependencies: []
// Exports: destroy, initialize

// Module 566 (initialize)
let DeviceSettingsStore;
let NO_DATA;
let OfflineCacheStore;
let createFetchStore;
function initialize() {
  Store.initialize();
}
const _module = require(dependencyMap[0]);
const PersistedStore = _module.PersistedStore;
({ DeviceSettingsStore, OfflineCacheStore } = _module);
const Store = require(dependencyMap[1]).Store;
const _module1 = require(dependencyMap[2]);
const obj = { Emitter: importDefault(dependencyMap[3]), Store, PersistedStore, DeviceSettingsStore, OfflineCacheStore, connectStores: importDefault(dependencyMap[4]), initialize };
({ createFetchStore, NO_DATA } = _module1);
Object.defineProperty(obj, "initialized", { get: () => Store.initialized, set: undefined });
const _module2 = require(dependencyMap[5]);
const result = _module2.fileFinishedImporting("../discord_common/js/packages/flux/index.tsx");

export default obj;
export { NO_DATA };
export { Store };
export const Dispatcher = require(dependencyMap[6]).Dispatcher;
export const BatchedStoreListener = require(dependencyMap[7]).BatchedStoreListener;
export { createFetchStore };
export const statesWillNeverBeEqual = require(dependencyMap[8]).statesWillNeverBeEqual;
export const useStateFromStores = require(dependencyMap[8]).useStateFromStores;
export const useStateFromStoresObject = require(dependencyMap[8]).useStateFromStoresObject;
export const useStateFromStoresArray = require(dependencyMap[8]).useStateFromStoresArray;
export { initialize };
export const destroy = function destroy() {
  PersistedStore.destroy();
};
