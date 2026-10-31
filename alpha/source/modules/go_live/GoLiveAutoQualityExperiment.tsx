// Module ID: 11923
// Function ID: 11924
// Name: GoLiveAutoQualityExperiment
// Dependencies: [1246, 5943, 5864, 1448, 504, 510, 7901, 2]
// Exports: getGoLiveAutoQualityExperimentConfig, maybeMigrateToAutoQuality, useGoLiveAutoQualityExperimentConfig

// Module 11923 (GoLiveAutoQualityExperiment)
import Storage3 from "Storage" /* 510 */;
import StreamSettingsConstants from "StreamSettingsConstants" /* 5864 */;
import StreamActionCreators from "StreamActionCreators" /* 7901 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import ApplicationStreamingSettingsStore from "ApplicationStreamingSettingsStore" /* 5943 */;
import ApexExperiment from "apex/ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

let obj3;
const ApplicationStreamPresets = StreamSettingsConstants.ApplicationStreamPresets;
let obj = { allowAutoQuality: false, defaultAutoQuality: false, migrateAutoQuality: false };
const GoLiveAutoQualityMigrationVersion = "GoLiveAutoQualityMigrationVersion";
const obj2 = { name: "2025-10-go-live-auto-quality", kind: "user", defaultConfig: obj, variations: obj3 };
obj3 = { 1: null, 2: null };
const obj4 = { allowAutoQuality: true, migrateAutoQuality: true };
const merged = Object.assign(obj);
obj3[1] = obj4;
const obj5 = { allowAutoQuality: true, defaultAutoQuality: true };
const merged1 = Object.assign(obj);
obj3[2] = obj5;
let closure_6 = ApexExperiment(obj2);
let result = size.fileFinishedImporting("modules/go_live/GoLiveAutoQualityExperiment.tsx");

export function getGoLiveAutoQualityExperimentConfig(location) {
  const obj = { location: location.location };
  return closure_6.getConfig(obj);
}
export function useGoLiveAutoQualityExperimentConfig(location) {
  let config;
  location = location.location;
  let obj = location(504);
  const items = [ApexExperimentStore];
  return obj.useStateFromStores(items, () => {
    const obj = { location };
    return config.getConfig(obj);
  });
}
export function maybeMigrateToAutoQuality() {
  const migrateAutoQuality = closure_6.getConfig({ location: "maybeMigrateToAutoQuality" }).migrateAutoQuality;
  const Storage = Storage3.Storage;
  let num = Storage.get(GoLiveAutoQualityMigrationVersion);
  const tmp3 = GoLiveAutoQualityMigrationVersion;
  if (num == null) {
    num = 0;
  }
  if (migrateAutoQuality) {
    if (tmp4 < 1) {
      const state = ApplicationStreamingSettingsStore.getState();
      if (state.preset !== ApplicationStreamPresets.PRESET_CUSTOM) {
        const obj = { preset: tmp9.PRESET_AUTO, resolution: null, frameRate: null, soundshareEnabled: null, noTrack: true };
        ({ resolution: obj2.resolution, fps: obj2.frameRate, soundshareEnabled: obj2.soundshareEnabled } = state);
        const tmpResult = StreamActionCreators;
        tmpResult.updateStreamSettings(obj);
        const Storage2 = tmp(510).Storage;
        const result = Storage2.set(tmp3, 1);
      }
    }
  }
}
