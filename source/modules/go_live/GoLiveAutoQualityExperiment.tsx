// Module ID: 10684
// Function ID: 83287
// Name: getGoLiveAutoQualityExperimentConfig
// Dependencies: []
// Exports: maybeMigrateToAutoQuality, useGoLiveAutoQualityExperimentConfig

// Module 10684 (getGoLiveAutoQualityExperimentConfig)
function getGoLiveAutoQualityExperimentConfig(location) {
  return store.getConfig({ location: location.location });
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const ApplicationStreamPresets = arg1(dependencyMap[2]).ApplicationStreamPresets;
let obj = { "Null": true, "Null": false, "Null": false };
obj = { defaultConfig: obj };
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
let closure_5 = importDefault(dependencyMap[3])(obj);
const importDefaultResult = importDefault(dependencyMap[3]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/go_live/GoLiveAutoQualityExperiment.tsx");

export { getGoLiveAutoQualityExperimentConfig };
export const useGoLiveAutoQualityExperimentConfig = function useGoLiveAutoQualityExperimentConfig(location) {
  const arg1 = location.location;
  const items = [closure_2];
  return arg1(dependencyMap[4]).useStateFromStores(items, () => callback({ location }));
};
export const maybeMigrateToAutoQuality = function maybeMigrateToAutoQuality() {
  const Storage = arg1(dependencyMap[5]).Storage;
  const value = Storage.get("GoLiveAutoQualityMigrationVersion");
  if (store.getConfig({ location: "maybeMigrateToAutoQuality" }).migrateAutoQuality) {
    if (tmp3 < 1) {
      const state = state.getState();
      if (state.preset !== ApplicationStreamPresets.PRESET_CUSTOM) {
        let obj = arg1(dependencyMap[6]);
        obj = { preset: ApplicationStreamPresets.PRESET_AUTO };
        ({ resolution: obj2.resolution, fps: obj2.frameRate, soundshareEnabled: obj2.soundshareEnabled } = state);
        obj.noTrack = true;
        obj.updateStreamSettings(obj);
        const Storage2 = arg1(dependencyMap[5]).Storage;
        const result = Storage2.set("GoLiveAutoQualityMigrationVersion", 1);
      }
    }
  }
};
