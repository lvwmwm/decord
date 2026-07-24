// Module ID: 10723
// Function ID: 83528
// Name: getGoLiveAutoQualityExperimentConfig
// Dependencies: [1188, 4220, 4185, 1325, 566, 587, 4309, 2]
// Exports: maybeMigrateToAutoQuality, useGoLiveAutoQualityExperimentConfig

// Module 10723 (getGoLiveAutoQualityExperimentConfig)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import { ApplicationStreamPresets } from "makeButton";
import importDefaultResult from "getUnitId";

const require = arg1;
function getGoLiveAutoQualityExperimentConfig(location) {
  return store.getConfig({ location: location.location });
}
let obj = { allowAutoQuality: false, defaultAutoQuality: false, migrateAutoQuality: false };
obj = { name: "2025-10-go-live-auto-quality", kind: "user" };
obj.defaultConfig = obj;
obj = {};
const obj1 = {};
const merged = Object.assign(obj);
obj1["allowAutoQuality"] = true;
obj1["migrateAutoQuality"] = true;
obj[1] = obj1;
const obj2 = {};
const merged1 = Object.assign(obj);
obj2["allowAutoQuality"] = true;
obj2["defaultAutoQuality"] = true;
obj[2] = obj2;
obj.variations = obj;
let closure_5 = require("getUnitId")(obj);
let result = require("makeButton").fileFinishedImporting("modules/go_live/GoLiveAutoQualityExperiment.tsx");

export { getGoLiveAutoQualityExperimentConfig };
export const useGoLiveAutoQualityExperimentConfig = function useGoLiveAutoQualityExperimentConfig(location) {
  location = location.location;
  const items = [_isNativeReflectConstruct];
  return location(566).useStateFromStores(items, () => outer1_6({ location }));
};
export const maybeMigrateToAutoQuality = function maybeMigrateToAutoQuality() {
  const Storage = require(587) /* Storage */.Storage;
  const value = Storage.get("GoLiveAutoQualityMigrationVersion");
  if (store.getConfig({ location: "maybeMigrateToAutoQuality" }).migrateAutoQuality) {
    if (tmp3 < 1) {
      state = state.getState();
      if (state.preset !== ApplicationStreamPresets.PRESET_CUSTOM) {
        let obj = require(4309) /* isVoiceChannelFull */;
        obj = { preset: ApplicationStreamPresets.PRESET_AUTO };
        ({ resolution: obj2.resolution, fps: obj2.frameRate, soundshareEnabled: obj2.soundshareEnabled } = state);
        obj.noTrack = true;
        obj.updateStreamSettings(obj);
        const Storage2 = require(587) /* Storage */.Storage;
        const result = Storage2.set("GoLiveAutoQualityMigrationVersion", 1);
      }
    }
  }
};
