// Module ID: 5819
// Function ID: 5820
// Name: RegionalFeatureConfigUtils
// Dependencies: [5820, 504, 5826, 2]
// Exports: hasAgeGatedFeatures, hasTeenDefaults, isFeatureAgeGated, isSettingTeenByDefault, isTidaMediaTakedownRegion, shouldCollectAppStoreSignal, useHasAgeGatedFeatures, useHasTeenDefaults, useIsFeatureAgeGated, useIsSettingTeenByDefault, useIsTidaMediaTakedownRegion

// Module 5819 (RegionalFeatureConfigUtils)
import get_initialized from "get initialized" /* 504 */;
import MediaTakedownRegulation from "MediaTakedownRegulation" /* 5826 */;
import RegionalFeatureConfigStore from "RegionalFeatureConfigStore" /* 5820 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/regional_feature_config/RegionalFeatureConfigUtils.tsx");

export function isFeatureAgeGated(arg0) {
  return RegionalFeatureConfigStore.isFeatureAgeGated(arg0);
}
export function useIsFeatureAgeGated(AGE_GATED_SPACES) {
  _require = AGE_GATED_SPACES;
  const items = [RegionalFeatureConfigStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => RegionalFeatureConfigStore.isFeatureAgeGated(AGE_GATED_SPACES));
}
export function isSettingTeenByDefault(arg0) {
  return RegionalFeatureConfigStore.isSettingTeenByDefault(arg0);
}
export function useIsSettingTeenByDefault(GUILD_ACTIVITY_STATUS) {
  _require = GUILD_ACTIVITY_STATUS;
  const items = [RegionalFeatureConfigStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => RegionalFeatureConfigStore.isSettingTeenByDefault(GUILD_ACTIVITY_STATUS));
}
export function hasAgeGatedFeatures() {
  return RegionalFeatureConfigStore.hasAgeGatedFeatures();
}
export function useHasAgeGatedFeatures() {
  const items = [RegionalFeatureConfigStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => RegionalFeatureConfigStore.hasAgeGatedFeatures());
}
export function hasTeenDefaults() {
  return RegionalFeatureConfigStore.hasTeenDefaults();
}
export function useHasTeenDefaults() {
  const items = [RegionalFeatureConfigStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => RegionalFeatureConfigStore.hasTeenDefaults());
}
export function shouldCollectAppStoreSignal() {
  return RegionalFeatureConfigStore.shouldCollectAppStoreSignal();
}
export function isTidaMediaTakedownRegion() {
  return RegionalFeatureConfigStore.isMediaTakedownRegulation(MediaTakedownRegulation.MediaTakedownRegulation.TIDA);
}
export function useIsTidaMediaTakedownRegion() {
  let mediaTakedownRegulation;
  const items = [RegionalFeatureConfigStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => mediaTakedownRegulation.isMediaTakedownRegulation(require("MediaTakedownRegulation").MediaTakedownRegulation.TIDA));
}
