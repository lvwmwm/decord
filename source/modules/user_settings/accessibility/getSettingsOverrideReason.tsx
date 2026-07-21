// Module ID: 14093
// Function ID: 106994
// Name: getSettingsOverrideReason
// Dependencies: []
// Exports: useSettingsOverrideReason

// Module 14093 (getSettingsOverrideReason)
function getSettingsOverrideReason(arg0) {
  if (constants.REDUCED_MOTION === arg0) {
    const intl2 = arg1(dependencyMap[2]).intl;
    return intl2.format(arg1(dependencyMap[2]).t.1dT9V4, {});
  } else if (constants.REDUCED_MOTION_STICKERS === arg0) {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(arg1(dependencyMap[2]).t.2ExvRu);
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = arg1(dependencyMap[1]).SettingsOverrideReasonKeys;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/user_settings/accessibility/getSettingsOverrideReason.tsx");

export default getSettingsOverrideReason;
export const useSettingsOverrideReason = function useSettingsOverrideReason(arg0) {
  const arg1 = arg0;
  const items = [closure_2];
  return arg1(dependencyMap[3]).useStateFromStores(items, () => callback(appliedOverrideReasonKey.getAppliedOverrideReasonKey(arg0)));
};
