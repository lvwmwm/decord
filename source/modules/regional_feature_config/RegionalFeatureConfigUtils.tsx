// Module ID: 3807
// Function ID: 31401
// Name: isFeatureAgeGated
// Dependencies: []
// Exports: hasAgeGatedFeatures, hasTeenDefaults, isFeatureAgeGated, isSettingTeenByDefault, useHasAgeGatedFeatures, useHasTeenDefaults, useIsFeatureAgeGated, useIsSettingTeenByDefault

// Module 3807 (isFeatureAgeGated)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/regional_feature_config/RegionalFeatureConfigUtils.tsx");

export const isFeatureAgeGated = function isFeatureAgeGated(AGE_GATED_SPACES) {
  return closure_2.isFeatureAgeGated(AGE_GATED_SPACES);
};
export const useIsFeatureAgeGated = function useIsFeatureAgeGated(STAGE_SPEAKING) {
  const arg1 = STAGE_SPEAKING;
  const items = [closure_2];
  return arg1(dependencyMap[1]).useStateFromStores(items, () => featureAgeGated.isFeatureAgeGated(arg0));
};
export const isSettingTeenByDefault = function isSettingTeenByDefault(GUILD_ACTIVITY_STATUS) {
  return closure_2.isSettingTeenByDefault(GUILD_ACTIVITY_STATUS);
};
export const useIsSettingTeenByDefault = function useIsSettingTeenByDefault(GUILD_ACTIVITY_STATUS) {
  const arg1 = GUILD_ACTIVITY_STATUS;
  const items = [closure_2];
  return arg1(dependencyMap[1]).useStateFromStores(items, () => settingTeenByDefault.isSettingTeenByDefault(arg0));
};
export const hasAgeGatedFeatures = function hasAgeGatedFeatures() {
  return closure_2.hasAgeGatedFeatures();
};
export const useHasAgeGatedFeatures = function useHasAgeGatedFeatures() {
  const items = [closure_2];
  return arg1(dependencyMap[1]).useStateFromStores(items, () => closure_2.hasAgeGatedFeatures());
};
export const hasTeenDefaults = function hasTeenDefaults() {
  return closure_2.hasTeenDefaults();
};
export const useHasTeenDefaults = function useHasTeenDefaults() {
  const items = [closure_2];
  return arg1(dependencyMap[1]).useStateFromStores(items, () => closure_2.hasTeenDefaults());
};
