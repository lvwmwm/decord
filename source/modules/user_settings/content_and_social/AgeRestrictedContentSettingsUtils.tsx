// Module ID: 7920
// Function ID: 63153
// Name: resolveNsfwTogglesWithDefaults
// Dependencies: []
// Exports: getViewNsfwCommandsOrDefault, getViewNsfwGuildsOrDefault, useViewNsfwCommandsOrDefault, useViewNsfwGuildsOrDefault

// Module 7920 (resolveNsfwTogglesWithDefaults)
function resolveNsfwTogglesWithDefaults(setting, arg1, nSFWAllowed, isAgeVerified) {
  let tmp = arg1;
  if (arg1) {
    tmp = !isAgeVerified;
  }
  let tmp3 = !tmp;
  if (tmp3) {
    let tmp5 = false !== nSFWAllowed;
    if (tmp5) {
      tmp5 = null != setting && setting;
      const tmp7 = null != setting && setting;
    }
    tmp3 = tmp5;
  }
  return tmp3;
}
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/user_settings/content_and_social/AgeRestrictedContentSettingsUtils.tsx");

export { resolveNsfwTogglesWithDefaults };
export const useViewNsfwCommandsOrDefault = function useViewNsfwCommandsOrDefault() {
  const ViewNsfwCommands = arg1(dependencyMap[1]).ViewNsfwCommands;
  const setting = ViewNsfwCommands.useSetting();
  const isAgeVerified = arg1(dependencyMap[2]).useIsAgeVerified();
  const obj = arg1(dependencyMap[2]);
  const nSFWAllowed = arg1(dependencyMap[3]).useNSFWAllowed();
  const obj2 = arg1(dependencyMap[3]);
  return resolveNsfwTogglesWithDefaults(setting, arg1(dependencyMap[4]).useIsFeatureAgeGated(arg1(dependencyMap[5]).AgeGatedFeature.COMMANDS_TOGGLE), nSFWAllowed, isAgeVerified);
};
export const useViewNsfwGuildsOrDefault = function useViewNsfwGuildsOrDefault() {
  const ViewNsfwGuilds = arg1(dependencyMap[1]).ViewNsfwGuilds;
  const setting = ViewNsfwGuilds.useSetting();
  const isAgeVerified = arg1(dependencyMap[2]).useIsAgeVerified();
  const obj = arg1(dependencyMap[2]);
  const nSFWAllowed = arg1(dependencyMap[3]).useNSFWAllowed();
  const obj2 = arg1(dependencyMap[3]);
  return resolveNsfwTogglesWithDefaults(setting, arg1(dependencyMap[4]).useIsFeatureAgeGated(arg1(dependencyMap[5]).AgeGatedFeature.COMMANDS_TOGGLE), nSFWAllowed, isAgeVerified);
};
export const getViewNsfwCommandsOrDefault = function getViewNsfwCommandsOrDefault() {
  const ViewNsfwCommands = arg1(dependencyMap[1]).ViewNsfwCommands;
  const setting = ViewNsfwCommands.getSetting();
  const obj = arg1(dependencyMap[2]);
  const currentUser = authStore.getCurrentUser();
  const isAgeVerifiedResult = arg1(dependencyMap[2]).isAgeVerified();
  const tmp4 = resolveNsfwTogglesWithDefaults;
  const obj2 = arg1(dependencyMap[4]);
  let nsfwAllowed;
  if (null != currentUser) {
    nsfwAllowed = currentUser.nsfwAllowed;
  }
  return tmp4(setting, arg1(dependencyMap[4]).isFeatureAgeGated(arg1(dependencyMap[5]).AgeGatedFeature.COMMANDS_TOGGLE), nsfwAllowed, isAgeVerifiedResult);
};
export const getViewNsfwGuildsOrDefault = function getViewNsfwGuildsOrDefault() {
  const ViewNsfwGuilds = arg1(dependencyMap[1]).ViewNsfwGuilds;
  const setting = ViewNsfwGuilds.getSetting();
  const obj = arg1(dependencyMap[2]);
  const currentUser = authStore.getCurrentUser();
  const isAgeVerifiedResult = arg1(dependencyMap[2]).isAgeVerified();
  const tmp4 = resolveNsfwTogglesWithDefaults;
  const obj2 = arg1(dependencyMap[4]);
  let nsfwAllowed;
  if (null != currentUser) {
    nsfwAllowed = currentUser.nsfwAllowed;
  }
  return tmp4(setting, arg1(dependencyMap[4]).isFeatureAgeGated(arg1(dependencyMap[5]).AgeGatedFeature.COMMANDS_TOGGLE), nsfwAllowed, isAgeVerifiedResult);
};
