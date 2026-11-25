// Module ID: 10447
// Function ID: 10448
// Name: AgeRestrictedContentSettingsUtils
// Dependencies: [1386, 4738, 6411, 10448, 5575, 6416, 2]
// Exports: getViewNsfwCommandsOrDefault, getViewNsfwGuildsOrDefault, resolveNsfwTogglesWithDefaults, useViewNsfwCommandsOrDefault, useViewNsfwGuildsOrDefault

// Module 10447 (AgeRestrictedContentSettingsUtils)
import UserSettings from "UserSettings" /* 4738 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5575 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6411 */;
import AgeGatedFeature from "AgeGatedFeature" /* 6416 */;
import useNSFWAllowed from "useNSFWAllowed" /* 10448 */;
import UserStore from "UserStore" /* 1386 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/AgeRestrictedContentSettingsUtils.tsx");

export function resolveNsfwTogglesWithDefaults(arg0, arg1, arg2, arg3) {
  let tmp3 = !(arg1 && !arg3);
  const tmp = arg1 && !arg3;
  if (tmp3) {
    let tmp5 = false !== arg2;
    if (tmp5) {
      let flag2 = arg0;
      if (arg0 == null) {
        flag2 = false;
      }
      tmp5 = flag2;
    }
    tmp3 = tmp5;
  }
  return tmp3;
}
export function useViewNsfwCommandsOrDefault() {
  const ViewNsfwCommands = UserSettings.ViewNsfwCommands;
  let flag = ViewNsfwCommands.useSetting();
  const obj = AgeVerificationUtils;
  const isAgeVerified = obj.useIsAgeVerified();
  const obj2 = useNSFWAllowed;
  const nSFWAllowed = obj2.useNSFWAllowed();
  const obj3 = RegionalFeatureConfigUtils;
  let tmp4 = !(obj3.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.COMMANDS_TOGGLE) && !isAgeVerified);
  obj3.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.COMMANDS_TOGGLE) && !isAgeVerified;
  if (tmp4) {
    let tmp5 = false !== nSFWAllowed;
    if (tmp5) {
      if (flag == null) {
        flag = false;
      }
      tmp5 = flag;
    }
    tmp4 = tmp5;
  }
  return tmp4;
}
export function useViewNsfwGuildsOrDefault() {
  const ViewNsfwGuilds = UserSettings.ViewNsfwGuilds;
  let flag = ViewNsfwGuilds.useSetting();
  const obj = AgeVerificationUtils;
  const isAgeVerified = obj.useIsAgeVerified();
  const obj2 = useNSFWAllowed;
  const nSFWAllowed = obj2.useNSFWAllowed();
  const obj3 = RegionalFeatureConfigUtils;
  let tmp4 = !(obj3.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.COMMANDS_TOGGLE) && !isAgeVerified);
  obj3.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.COMMANDS_TOGGLE) && !isAgeVerified;
  if (tmp4) {
    let tmp5 = false !== nSFWAllowed;
    if (tmp5) {
      if (flag == null) {
        flag = false;
      }
      tmp5 = flag;
    }
    tmp4 = tmp5;
  }
  return tmp4;
}
export function getViewNsfwCommandsOrDefault() {
  let nsfwAllowed;
  const ViewNsfwCommands = UserSettings.ViewNsfwCommands;
  let flag = ViewNsfwCommands.getSetting();
  const obj = AgeVerificationUtils;
  const isAgeVerifiedResult = obj.isAgeVerified();
  const currentUser = UserStore.getCurrentUser();
  const obj2 = RegionalFeatureConfigUtils;
  let isFeatureAgeGatedResult = obj2.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.COMMANDS_TOGGLE);
  if (currentUser != null) {
    nsfwAllowed = currentUser.nsfwAllowed;
  }
  if (isFeatureAgeGatedResult) {
    isFeatureAgeGatedResult = !isAgeVerifiedResult;
  }
  let tmp4 = !isFeatureAgeGatedResult;
  if (tmp4) {
    let tmp5 = false !== nsfwAllowed;
    if (tmp5) {
      if (flag == null) {
        flag = false;
      }
      tmp5 = flag;
    }
    tmp4 = tmp5;
  }
  return tmp4;
}
export function getViewNsfwGuildsOrDefault() {
  let nsfwAllowed;
  const ViewNsfwGuilds = UserSettings.ViewNsfwGuilds;
  let flag = ViewNsfwGuilds.getSetting();
  const obj = AgeVerificationUtils;
  const isAgeVerifiedResult = obj.isAgeVerified();
  const currentUser = UserStore.getCurrentUser();
  const obj2 = RegionalFeatureConfigUtils;
  let isFeatureAgeGatedResult = obj2.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.COMMANDS_TOGGLE);
  if (currentUser != null) {
    nsfwAllowed = currentUser.nsfwAllowed;
  }
  if (isFeatureAgeGatedResult) {
    isFeatureAgeGatedResult = !isAgeVerifiedResult;
  }
  let tmp4 = !isFeatureAgeGatedResult;
  if (tmp4) {
    let tmp5 = false !== nsfwAllowed;
    if (tmp5) {
      if (flag == null) {
        flag = false;
      }
      tmp5 = flag;
    }
    tmp4 = tmp5;
  }
  return tmp4;
}
