// Module ID: 8389
// Function ID: 8390
// Name: resolveNsfwTogglesWithDefaults
// Dependencies: [1922, 4034, 4559, 8390, 4040, 5181, 2]
// Exports: getViewNsfwCommandsOrDefault, getViewNsfwGuildsOrDefault, resolveNsfwTogglesWithDefaults, useViewNsfwCommandsOrDefault, useViewNsfwGuildsOrDefault

// Module 8389 (resolveNsfwTogglesWithDefaults)
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
const result = require("useAgeVerificationRunner").fileFinishedImporting("modules/user_settings/content_and_social/AgeRestrictedContentSettingsUtils.tsx");

export const resolveNsfwTogglesWithDefaults = function resolveNsfwTogglesWithDefaults(arg0, arg1, arg2, arg3) {
  let tmp = arg1;
  if (arg1) {
    tmp = !arg3;
  }
  let tmp3 = !tmp;
  if (!tmp) {
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
};
export const useViewNsfwCommandsOrDefault = function useViewNsfwCommandsOrDefault() {
  const ViewNsfwCommands = require(4034) /* explicitContentFromProto */.ViewNsfwCommands;
  let flag = ViewNsfwCommands.useSetting();
  const isAgeVerified = require(4559) /* useAgeVerificationRunner */.useIsAgeVerified();
  const obj = require(4559) /* useAgeVerificationRunner */;
  const nSFWAllowed = require(8390) /* useNSFWAllowed */.useNSFWAllowed();
  const obj2 = require(8390) /* useNSFWAllowed */;
  const tmp3 = require(4040) /* isFeatureAgeGated */.useIsFeatureAgeGated(require(5181) /* AgeGatedFeature */.AgeGatedFeature.COMMANDS_TOGGLE) && !isAgeVerified;
  let tmp4 = !tmp3;
  if (!tmp3) {
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
};
export const useViewNsfwGuildsOrDefault = function useViewNsfwGuildsOrDefault() {
  const ViewNsfwGuilds = require(4034) /* explicitContentFromProto */.ViewNsfwGuilds;
  let flag = ViewNsfwGuilds.useSetting();
  const isAgeVerified = require(4559) /* useAgeVerificationRunner */.useIsAgeVerified();
  const obj = require(4559) /* useAgeVerificationRunner */;
  const nSFWAllowed = require(8390) /* useNSFWAllowed */.useNSFWAllowed();
  const obj2 = require(8390) /* useNSFWAllowed */;
  const tmp3 = require(4040) /* isFeatureAgeGated */.useIsFeatureAgeGated(require(5181) /* AgeGatedFeature */.AgeGatedFeature.COMMANDS_TOGGLE) && !isAgeVerified;
  let tmp4 = !tmp3;
  if (!tmp3) {
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
};
export const getViewNsfwCommandsOrDefault = function getViewNsfwCommandsOrDefault() {
  const ViewNsfwCommands = require(4034) /* explicitContentFromProto */.ViewNsfwCommands;
  let flag = ViewNsfwCommands.getSetting();
  const obj = require(4559) /* useAgeVerificationRunner */;
  const currentUser = authStore.getCurrentUser();
  const isAgeVerifiedResult = require(4559) /* useAgeVerificationRunner */.isAgeVerified();
  let isFeatureAgeGatedResult = require(4040) /* isFeatureAgeGated */.isFeatureAgeGated(require(5181) /* AgeGatedFeature */.AgeGatedFeature.COMMANDS_TOGGLE);
  if (currentUser != null) {
    const nsfwAllowed = currentUser.nsfwAllowed;
  }
  if (isFeatureAgeGatedResult) {
    isFeatureAgeGatedResult = !isAgeVerifiedResult;
  }
  let tmp4 = !isFeatureAgeGatedResult;
  if (!isFeatureAgeGatedResult) {
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
};
export const getViewNsfwGuildsOrDefault = function getViewNsfwGuildsOrDefault() {
  const ViewNsfwGuilds = require(4034) /* explicitContentFromProto */.ViewNsfwGuilds;
  let flag = ViewNsfwGuilds.getSetting();
  const obj = require(4559) /* useAgeVerificationRunner */;
  const currentUser = authStore.getCurrentUser();
  const isAgeVerifiedResult = require(4559) /* useAgeVerificationRunner */.isAgeVerified();
  let isFeatureAgeGatedResult = require(4040) /* isFeatureAgeGated */.isFeatureAgeGated(require(5181) /* AgeGatedFeature */.AgeGatedFeature.COMMANDS_TOGGLE);
  if (currentUser != null) {
    const nsfwAllowed = currentUser.nsfwAllowed;
  }
  if (isFeatureAgeGatedResult) {
    isFeatureAgeGatedResult = !isAgeVerifiedResult;
  }
  let tmp4 = !isFeatureAgeGatedResult;
  if (!isFeatureAgeGatedResult) {
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
};
