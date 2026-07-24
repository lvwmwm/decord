// Module ID: 3809
// Function ID: 31407
// Name: isFeatureAgeGated
// Dependencies: [3810, 566, 2]
// Exports: hasAgeGatedFeatures, hasTeenDefaults, isFeatureAgeGated, isSettingTeenByDefault, useHasAgeGatedFeatures, useHasTeenDefaults, useIsFeatureAgeGated, useIsSettingTeenByDefault

// Module 3809 (isFeatureAgeGated)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/regional_feature_config/RegionalFeatureConfigUtils.tsx");

export const isFeatureAgeGated = function isFeatureAgeGated(AGE_GATED_SPACES) {
  return _isNativeReflectConstruct.isFeatureAgeGated(AGE_GATED_SPACES);
};
export const useIsFeatureAgeGated = function useIsFeatureAgeGated(STAGE_SPEAKING) {
  const _require = STAGE_SPEAKING;
  const items = [_isNativeReflectConstruct];
  return _require(566).useStateFromStores(items, () => outer1_2.isFeatureAgeGated(closure_0));
};
export const isSettingTeenByDefault = function isSettingTeenByDefault(GUILD_ACTIVITY_STATUS) {
  return _isNativeReflectConstruct.isSettingTeenByDefault(GUILD_ACTIVITY_STATUS);
};
export const useIsSettingTeenByDefault = function useIsSettingTeenByDefault(GUILD_ACTIVITY_STATUS) {
  const _require = GUILD_ACTIVITY_STATUS;
  const items = [_isNativeReflectConstruct];
  return _require(566).useStateFromStores(items, () => outer1_2.isSettingTeenByDefault(closure_0));
};
export const hasAgeGatedFeatures = function hasAgeGatedFeatures() {
  return _isNativeReflectConstruct.hasAgeGatedFeatures();
};
export const useHasAgeGatedFeatures = function useHasAgeGatedFeatures() {
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => outer1_2.hasAgeGatedFeatures());
};
export const hasTeenDefaults = function hasTeenDefaults() {
  return _isNativeReflectConstruct.hasTeenDefaults();
};
export const useHasTeenDefaults = function useHasTeenDefaults() {
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => outer1_2.hasTeenDefaults());
};
