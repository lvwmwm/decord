// Module ID: 7611
// Function ID: 7612
// Name: ProfileCustomizationUtils
// Dependencies: [19, 7605, 7035, 2108, 504, 4685, 1115, 2]
// Exports: announcePendingAvatarChange, getProfilePreviewValue, resolveCollectiblesOverride, showRemoveAvatar, showRemoveBanner, useAvatarDecorationSettings, useAvatarsWithGuilds, useGuildMemberAndUserPendingNameplate, useGuildMemberOrUserPendingDisplayNameStyles, useProfileEffectSettings, useProfileFrameSettings, useUserAvatarDecoration, useUserProfileEffect, useUserProfileFrame

// Module 7611 (ProfileCustomizationUtils)
import get_initialized from "get initialized" /* 504 */;
import intl4 from "intl" /* 1115 */;
import shared from "shared" /* 4685 */;
import react from "react" /* 19 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 7605 */;
import UserProfileStore from "UserProfileStore" /* 7035 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const result = size.fileFinishedImporting("modules/profile_customization/ProfileCustomizationUtils.tsx");

export const useAvatarsWithGuilds = function useAvatarsWithGuilds(arg0) {
  let closure_0 = arg0;
  const items = [arg0];
  return react.useMemo(() => {
    const mutableAllGuildsAndMembers = GuildMemberStore.getMutableAllGuildsAndMembers();
    const obj = {};
    for (const key10008 in mutableAllGuildsAndMembers) {
      let tmp6 = mutableAllGuildsAndMembers[key10008][closure_0];
      let avatar;
      if (tmp6 != null) {
        avatar = tmp6.avatar;
      }
      if (null == avatar) {
        continue;
      } else {
        if (null == obj[avatar]) {
          obj[avatar] = [];
        }
        let arr = obj[avatar];
        let arr2 = arr.push(key10008);
        continue;
      }
      continue;
    }
    const entries = Object.entries(obj);
    return entries.map((item) => item[1][0]);
  }, items);
};
export const useGuildMemberAndUserPendingNameplate = function useGuildMemberAndUserPendingNameplate(user, guildId) {
  let nameplate;
  let pendingErrors;
  let pendingNameplate;
  _require = user;
  dependencyMap = guildId;
  let obj = require("get initialized");
  const items = [GuildMemberStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let member = null;
    if (undefined !== guildId) {
      member = GuildMemberStore.getMember(tmp, user.id);
    }
    return member;
  });
  const items1 = [UserProfileSettingsStore];
  const obj2 = require("get initialized");
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => {
    const obj = { pendingNameplate: UserProfileSettingsStore.getPendingChanges(guildId).pendingNameplate, pendingErrors: UserProfileSettingsStore.getErrors(guildId).nameplate };
    return obj;
  });
  const obj3 = { userNameplate: user.nameplate, guildNameplate: nameplate, pendingNameplate, pendingErrors };
  nameplate = undefined;
  ({ pendingNameplate, pendingErrors } = stateFromStoresObject);
  if (stateFromStores != null) {
    const collectibles = stateFromStores.collectibles;
    if (collectibles != null) {
      nameplate = collectibles.nameplate;
    }
  }
  return obj3;
};
export const useGuildMemberOrUserPendingDisplayNameStyles = function useGuildMemberOrUserPendingDisplayNameStyles(stateFromStores, guildId) {
  let displayNameStyles1;
  let pendingDisplayNameStyles;
  let pendingErrors;
  let tryItOutDisplayNameStyles;
  _require = stateFromStores;
  dependencyMap = guildId;
  let obj = require("get initialized");
  const items = [GuildMemberStore];
  stateFromStores = obj.useStateFromStores(items, () => {
    let member = null;
    if (undefined !== guildId) {
      member = null;
      if (null != stateFromStores) {
        member = GuildMemberStore.getMember(tmp, tmp3.id);
      }
    }
    return member;
  });
  const items1 = [UserProfileSettingsStore];
  const obj2 = require("get initialized");
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => {
    const obj = { pendingDisplayNameStyles: UserProfileSettingsStore.getPendingChanges(guildId).pendingDisplayNameStyles, tryItOutDisplayNameStyles: UserProfileSettingsStore.getTryItOutChanges().tryItOutDisplayNameStyles, pendingErrors: UserProfileSettingsStore.getErrors(guildId).displayNameStyles };
    return obj;
  });
  let displayNameStyles;
  ({ pendingDisplayNameStyles, tryItOutDisplayNameStyles, pendingErrors } = stateFromStoresObject);
  if (stateFromStores != null) {
    displayNameStyles = stateFromStores.displayNameStyles;
  }
  const obj3 = { userDisplayNameStyles: displayNameStyles, guildDisplayNameStyles: displayNameStyles1, pendingDisplayNameStyles, tryItOutDisplayNameStyles, pendingErrors };
  displayNameStyles1 = undefined;
  if (stateFromStores != null) {
    displayNameStyles1 = stateFromStores.displayNameStyles;
  }
  return obj3;
};
export const useUserAvatarDecoration = function useUserAvatarDecoration(user) {
  let avatarDecoration;
  user = user.user;
  const guildId = user.guildId;
  const items = [GuildMemberStore];
  const obj = user(guildId[4]);
  const stateFromStores = obj.useStateFromStores(items, () => {
    let member = null;
    if (null != guildId) {
      member = GuildMemberStore.getMember(tmp, user.id);
    }
    return member;
  });
  if (null != guildId) {
    let avatarDecoration1;
    if (stateFromStores != null) {
      avatarDecoration1 = stateFromStores.avatarDecoration;
    }
    avatarDecoration = avatarDecoration1;
  } else {
    avatarDecoration = user.avatarDecoration;
  }
  return avatarDecoration;
};
export const useUserProfileEffect = function useUserProfileEffect(arg0) {
  let require;
  let user;
  ({ user: require, guildId: dependencyMap } = arg0);
  const items = [UserProfileStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => {
    let profileEffect;
    if (null == dependencyMap) {
      const userProfile = UserProfileStore.getUserProfile(require.id);
      let profileEffect1;
      if (userProfile != null) {
        profileEffect1 = userProfile.profileEffect;
      }
      profileEffect = profileEffect1;
    } else {
      const guildMemberProfile = UserProfileStore.getGuildMemberProfile(require.id, tmp);
      if (guildMemberProfile != null) {
        profileEffect = guildMemberProfile.profileEffect;
      }
    }
    return profileEffect;
  });
};
export const useUserProfileFrame = function useUserProfileFrame(arg0) {
  let require;
  let user;
  ({ user: require, guildId: dependencyMap } = arg0);
  const items = [UserProfileStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => {
    let profileFrame;
    if (null == dependencyMap) {
      const userProfile = UserProfileStore.getUserProfile(require.id);
      let profileFrame1;
      if (userProfile != null) {
        profileFrame1 = userProfile.profileFrame;
      }
      profileFrame = profileFrame1;
    } else {
      const guildMemberProfile = UserProfileStore.getGuildMemberProfile(require.id, tmp);
      if (guildMemberProfile != null) {
        profileFrame = guildMemberProfile.profileFrame;
      }
    }
    return profileFrame;
  });
};
export const useAvatarDecorationSettings = function useAvatarDecorationSettings(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [UserProfileSettingsStore];
  return obj.useStateFromStoresObject(items, () => {
    const obj = { pendingAvatarDecoration: UserProfileSettingsStore.getPendingChanges(closure_0).pendingAvatarDecoration, errors: UserProfileSettingsStore.getErrors(closure_0).avatarDecoration };
    return obj;
  });
};
export const useProfileEffectSettings = function useProfileEffectSettings(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [UserProfileSettingsStore];
  return obj.useStateFromStoresObject(items, () => {
    const obj = { pendingProfileEffect: UserProfileSettingsStore.getPendingChanges(closure_0).pendingProfileEffect, errors: UserProfileSettingsStore.getErrors(closure_0).profileEffect };
    return obj;
  });
};
export const useProfileFrameSettings = function useProfileFrameSettings(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [UserProfileSettingsStore];
  return obj.useStateFromStoresObject(items, () => {
    const obj = { pendingProfileFrame: UserProfileSettingsStore.getPendingChanges(closure_0).pendingProfileFrame, errors: UserProfileSettingsStore.getErrors(closure_0).profileFrame };
    return obj;
  });
};
export const getProfilePreviewValue = function getProfilePreviewValue(arg0) {
  let guildId;
  let guildValue;
  let pendingValue;
  let userValue;
  ({ userValue, guildValue, pendingValue, guildId } = arg0);
  if ("" !== pendingValue) {
    if (null !== pendingValue) {
      if ("" === pendingValue) {
        let tmp2 = userValue;
        if (null != guildId) {
          tmp2 = userValue;
          if ("" !== guildValue) {
            tmp2 = userValue;
            if (null != guildValue) {
              tmp2 = guildValue;
            }
          }
        }
        pendingValue = tmp2;
      }
    }
    return pendingValue;
  }
  let tmp3 = null;
  if (null != guildId) {
    tmp3 = userValue;
  }
  pendingValue = tmp3;
};
export const resolveCollectiblesOverride = function resolveCollectiblesOverride(arg0) {
  let guildId;
  let guildValue;
  let pendingValue;
  let userValue;
  ({ pendingValue, userValue, guildValue, guildId } = arg0);
  if (undefined !== pendingValue) {
    if ("" !== pendingValue) {
      if (null !== pendingValue) {
        if ("" === pendingValue) {
          let tmp2 = userValue;
          if (null != guildId) {
            tmp2 = userValue;
            if ("" !== guildValue) {
              tmp2 = userValue;
              if (null != guildValue) {
                tmp2 = guildValue;
              }
            }
          }
          pendingValue = tmp2;
        }
      }
      if (pendingValue == null) {
        pendingValue = null;
      }
      return pendingValue;
    }
    let tmp3 = null;
    if (null != guildId) {
      tmp3 = userValue;
    }
    pendingValue = tmp3;
  }
};
export const showRemoveAvatar = function showRemoveAvatar(pendingAvatar, avatar) {
  let tmp2;
  if (undefined === pendingAvatar) {
    tmp2 = null != avatar;
  } else {
    tmp2 = null != pendingAvatar;
  }
  return tmp2;
};
export const showRemoveBanner = function showRemoveBanner(pendingBanner, banner) {
  let tmp2;
  if (undefined === pendingBanner) {
    tmp2 = null != banner;
  } else {
    tmp2 = null != pendingBanner;
  }
  return tmp2;
};
export const announcePendingAvatarChange = function announcePendingAvatarChange(remove) {
  if ("set" === remove) {
    const AccessibilityAnnouncer3 = shared.AccessibilityAnnouncer;
    const announce3 = AccessibilityAnnouncer3.announce;
    const intl3 = intl4.intl;
    announce3(intl3.string(intl4.t.dyU5c5));
  } else if ("remove" === remove) {
    const AccessibilityAnnouncer2 = shared.AccessibilityAnnouncer;
    const announce2 = AccessibilityAnnouncer2.announce;
    const intl2 = intl4.intl;
    announce2(intl2.string(intl4.t["f1+oNk"]));
  } else {
    const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
    const announce = AccessibilityAnnouncer.announce;
    const intl = intl4.intl;
    announce(intl.string(intl4.t["/b5nqj"]));
  }
};
