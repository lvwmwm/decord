// Module ID: 5688
// Function ID: 48636
// Name: resolveNsfwTogglesWithDefaults
// Dependencies: [1850, 3838, 4382, 5689, 3844, 4991, 2]
// Exports: getViewNsfwCommandsOrDefault, getViewNsfwGuildsOrDefault, useViewNsfwCommandsOrDefault, useViewNsfwGuildsOrDefault

// Module 5688 (resolveNsfwTogglesWithDefaults)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
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
const result = require("isReactiveCheckEnabled").fileFinishedImporting("modules/user_settings/content_and_social/AgeRestrictedContentSettingsUtils.tsx");

export { resolveNsfwTogglesWithDefaults };
export const useViewNsfwCommandsOrDefault = function useViewNsfwCommandsOrDefault() {
  const ViewNsfwCommands = require(3838) /* explicitContentFromProto */.ViewNsfwCommands;
  const setting = ViewNsfwCommands.useSetting();
  const isAgeVerified = require(4382) /* isReactiveCheckEnabled */.useIsAgeVerified();
  const obj = require(4382) /* isReactiveCheckEnabled */;
  const nSFWAllowed = require(5689) /* useNSFWAllowed */.useNSFWAllowed();
  const obj2 = require(5689) /* useNSFWAllowed */;
  return resolveNsfwTogglesWithDefaults(setting, require(3844) /* isFeatureAgeGated */.useIsFeatureAgeGated(require(4991) /* AgeGatedFeature */.AgeGatedFeature.COMMANDS_TOGGLE), nSFWAllowed, isAgeVerified);
};
export const useViewNsfwGuildsOrDefault = function useViewNsfwGuildsOrDefault() {
  const ViewNsfwGuilds = require(3838) /* explicitContentFromProto */.ViewNsfwGuilds;
  const setting = ViewNsfwGuilds.useSetting();
  const isAgeVerified = require(4382) /* isReactiveCheckEnabled */.useIsAgeVerified();
  const obj = require(4382) /* isReactiveCheckEnabled */;
  const nSFWAllowed = require(5689) /* useNSFWAllowed */.useNSFWAllowed();
  const obj2 = require(5689) /* useNSFWAllowed */;
  return resolveNsfwTogglesWithDefaults(setting, require(3844) /* isFeatureAgeGated */.useIsFeatureAgeGated(require(4991) /* AgeGatedFeature */.AgeGatedFeature.COMMANDS_TOGGLE), nSFWAllowed, isAgeVerified);
};
export const getViewNsfwCommandsOrDefault = function getViewNsfwCommandsOrDefault() {
  const ViewNsfwCommands = require(3838) /* explicitContentFromProto */.ViewNsfwCommands;
  const setting = ViewNsfwCommands.getSetting();
  const obj = require(4382) /* isReactiveCheckEnabled */;
  const currentUser = authStore.getCurrentUser();
  const isAgeVerifiedResult = require(4382) /* isReactiveCheckEnabled */.isAgeVerified();
  const tmp4 = resolveNsfwTogglesWithDefaults;
  const obj2 = require(3844) /* isFeatureAgeGated */;
  let nsfwAllowed;
  if (null != currentUser) {
    nsfwAllowed = currentUser.nsfwAllowed;
  }
  return tmp4(setting, require(3844) /* isFeatureAgeGated */.isFeatureAgeGated(require(4991) /* AgeGatedFeature */.AgeGatedFeature.COMMANDS_TOGGLE), nsfwAllowed, isAgeVerifiedResult);
};
export const getViewNsfwGuildsOrDefault = function getViewNsfwGuildsOrDefault() {
  const ViewNsfwGuilds = require(3838) /* explicitContentFromProto */.ViewNsfwGuilds;
  const setting = ViewNsfwGuilds.getSetting();
  const obj = require(4382) /* isReactiveCheckEnabled */;
  const currentUser = authStore.getCurrentUser();
  const isAgeVerifiedResult = require(4382) /* isReactiveCheckEnabled */.isAgeVerified();
  const tmp4 = resolveNsfwTogglesWithDefaults;
  const obj2 = require(3844) /* isFeatureAgeGated */;
  let nsfwAllowed;
  if (null != currentUser) {
    nsfwAllowed = currentUser.nsfwAllowed;
  }
  return tmp4(setting, require(3844) /* isFeatureAgeGated */.isFeatureAgeGated(require(4991) /* AgeGatedFeature */.AgeGatedFeature.COMMANDS_TOGGLE), nsfwAllowed, isAgeVerifiedResult);
};
