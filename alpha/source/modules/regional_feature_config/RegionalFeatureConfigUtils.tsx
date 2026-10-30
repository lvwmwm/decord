// Module ID: 5688
// Function ID: 5689
// Name: RegionalFeatureConfigUtils
// Dependencies: [5689, 504, 2]
// Exports: hasAgeGatedFeatures, hasTeenDefaults, isFeatureAgeGated, isSettingTeenByDefault, shouldCollectAppStoreSignal, useHasAgeGatedFeatures, useHasTeenDefaults, useIsFeatureAgeGated, useIsSettingTeenByDefault

// Module 5688 (RegionalFeatureConfigUtils)
import get_initialized from "get initialized" /* 504 */;
import RegionalFeatureConfigStore from "RegionalFeatureConfigStore" /* 5689 */;
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
