// Module ID: 4403
// Function ID: 4404
// Name: isClipsEnabled
// Dependencies: [4399, 4404, 589, 500, 2]
// Exports: isClipsEnabled, isDecoupledClipsEnabled, useIsClipsEnabled, useIsDecoupledClipsEnabled

// Module 4403 (isClipsEnabled)
import _migrateDefaultStorage from "_migrateDefaultStorage";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/clips/isClipsEnabled.tsx");

export const isClipsEnabled = function isClipsEnabled() {
  let decoupledClipsEnabled = require(4404) /* apexExperiment */.areClipsAvailable();
  if (decoupledClipsEnabled) {
    decoupledClipsEnabled = store.getState().clipsSettings.clipsEnabled;
  }
  if (decoupledClipsEnabled) {
    decoupledClipsEnabled = store.getState().clipsSettings.decoupledClipsEnabled;
  }
  return decoupledClipsEnabled;
};
export const useIsClipsEnabled = function useIsClipsEnabled() {
  let isClipsAvailable = require(4404) /* apexExperiment */.useIsClipsAvailable();
  const obj = require(4404) /* apexExperiment */;
  const items = [_migrateDefaultStorage];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => store.getState().clipsSettings.clipsEnabled);
  const obj2 = require(589) /* initialize */;
  const items1 = [_migrateDefaultStorage];
  const stateFromStores1 = require(589) /* initialize */.useStateFromStores(items1, () => store.getState().clipsSettings.decoupledClipsEnabled);
  if (isClipsAvailable) {
    isClipsAvailable = stateFromStores;
  }
  if (isClipsAvailable) {
    isClipsAvailable = stateFromStores1;
  }
  return isClipsAvailable;
};
export const isDecoupledClipsEnabled = function isDecoupledClipsEnabled() {
  let decoupledClipsEnabled = require(4404) /* apexExperiment */.areClipsAvailable();
  if (decoupledClipsEnabled) {
    decoupledClipsEnabled = store.getState().clipsSettings.clipsEnabled;
  }
  if (decoupledClipsEnabled) {
    decoupledClipsEnabled = obj2.getState().clipsSettings.decoupledClipsEnabled;
  }
  const obj = require(4404) /* apexExperiment */;
  obj2 = store;
  const tmp = require;
  if (decoupledClipsEnabled) {
    decoupledClipsEnabled = tmpResult.isWindows();
  }
  return decoupledClipsEnabled;
};
export const useIsDecoupledClipsEnabled = function useIsDecoupledClipsEnabled() {
  let isClipsAvailable = require(4404) /* apexExperiment */.useIsClipsAvailable();
  const obj = require(4404) /* apexExperiment */;
  const tmp = require;
  const items = [_migrateDefaultStorage];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => store.getState().clipsSettings.clipsEnabled);
  const obj2 = require(589) /* initialize */;
  const items1 = [_migrateDefaultStorage];
  const stateFromStores1 = require(589) /* initialize */.useStateFromStores(items1, () => store.getState().clipsSettings.decoupledClipsEnabled);
  if (isClipsAvailable) {
    isClipsAvailable = stateFromStores;
  }
  if (isClipsAvailable) {
    isClipsAvailable = stateFromStores1;
  }
  const obj3 = require(589) /* initialize */;
  if (isClipsAvailable) {
    isClipsAvailable = tmpResult.isWindows();
  }
  return isClipsAvailable;
};
