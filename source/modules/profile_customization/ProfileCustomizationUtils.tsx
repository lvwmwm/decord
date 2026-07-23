// Module ID: 7846
// Function ID: 62551
// Name: getProfilePreviewValue
// Dependencies: [31, 7841, 6856, 1917, 566, 3976, 1212, 2]
// Exports: announcePendingAvatarChange, resolveCollectiblesOverride, showRemoveAvatar, showRemoveBanner, useAvatarDecorationSettings, useAvatarsWithGuilds, useGuildMemberAndUserPendingNameplate, useGuildMemberOrUserPendingDisplayNameStyles, useProfileEffectSettings, useProfileFrameSettings, useUserAvatarDecoration, useUserProfileEffect, useUserProfileFrame

// Module 7846 (getProfilePreviewValue)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";

const require = arg1;
function getProfilePreviewValue(arg0) {
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
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/profile_customization/ProfileCustomizationUtils.tsx");

export const useAvatarsWithGuilds = function useAvatarsWithGuilds(arg0) {
  let closure_0 = arg0;
  const items = [arg0];
  return React.useMemo(() => {
    const mutableAllGuildsAndMembers = outer1_5.getMutableAllGuildsAndMembers();
    const obj = {};
    for (const key10007 in mutableAllGuildsAndMembers) {
      let tmp5 = key10007;
      let tmp6 = closure_0;
      let tmp7 = mutableAllGuildsAndMembers[key10007][closure_0];
      let avatar;
      if (null != tmp7) {
        avatar = tmp7.avatar;
      }
      if (null == avatar) {
        continue;
      } else {
        if (null == obj[avatar]) {
          obj[avatar] = [];
        }
        let arr = obj[avatar];
        arr = arr.push(key10007);
        continue;
      }
      continue;
    }
    if (null != obj) {
      const _Object = Object;
      const entries = Object.entries(obj);
      let mapped = entries.map((arg0) => arg0[1][0]);
    } else {
      mapped = [];
    }
    return mapped;
  }, items);
};
export const useGuildMemberAndUserPendingNameplate = function useGuildMemberAndUserPendingNameplate(user, guildId) {
  let pendingErrors;
  let pendingNameplate;
  const _require = user;
  const dependencyMap = guildId;
  let obj = _require(566);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let member = null;
    if (undefined !== closure_1) {
      member = outer1_5.getMember(closure_1, user.id);
    }
    return member;
  });
  const items1 = [_isNativeReflectConstruct];
  const stateFromStoresObject = _require(566).useStateFromStoresObject(items1, () => ({ pendingNameplate: outer1_3.getPendingChanges(closure_1).pendingNameplate, pendingErrors: outer1_3.getErrors(closure_1).nameplate }));
  obj = { userNameplate: user.nameplate };
  let nameplate;
  ({ pendingNameplate, pendingErrors } = stateFromStoresObject);
  if (null != stateFromStores) {
    const collectibles = stateFromStores.collectibles;
    if (null != collectibles) {
      nameplate = collectibles.nameplate;
    }
  }
  obj.guildNameplate = nameplate;
  obj.pendingNameplate = pendingNameplate;
  obj.pendingErrors = pendingErrors;
  return obj;
};
export const useGuildMemberOrUserPendingDisplayNameStyles = function useGuildMemberOrUserPendingDisplayNameStyles(stateFromStores, guildId) {
  let pendingDisplayNameStyles;
  let pendingErrors;
  let tryItOutDisplayNameStyles;
  const _require = stateFromStores;
  const dependencyMap = guildId;
  let obj = _require(566);
  const items = [closure_5];
  stateFromStores = obj.useStateFromStores(items, () => {
    let member = null;
    if (undefined !== closure_1) {
      member = null;
      if (null != stateFromStores) {
        member = outer1_5.getMember(closure_1, stateFromStores.id);
      }
    }
    return member;
  });
  const items1 = [_isNativeReflectConstruct];
  const stateFromStoresObject = _require(566).useStateFromStoresObject(items1, () => ({ pendingDisplayNameStyles: outer1_3.getPendingChanges(closure_1).pendingDisplayNameStyles, tryItOutDisplayNameStyles: outer1_3.getTryItOutChanges().tryItOutDisplayNameStyles, pendingErrors: outer1_3.getErrors(closure_1).displayNameStyles }));
  obj = {};
  let displayNameStyles;
  ({ pendingDisplayNameStyles, tryItOutDisplayNameStyles, pendingErrors } = stateFromStoresObject);
  if (null != stateFromStores) {
    displayNameStyles = stateFromStores.displayNameStyles;
  }
  obj.userDisplayNameStyles = displayNameStyles;
  let displayNameStyles1;
  if (null != stateFromStores) {
    displayNameStyles1 = stateFromStores.displayNameStyles;
  }
  obj.guildDisplayNameStyles = displayNameStyles1;
  obj.pendingDisplayNameStyles = pendingDisplayNameStyles;
  obj.tryItOutDisplayNameStyles = tryItOutDisplayNameStyles;
  obj.pendingErrors = pendingErrors;
  return obj;
};
export const useUserAvatarDecoration = function useUserAvatarDecoration(user) {
  user = user.user;
  const guildId = user.guildId;
  const items = [closure_5];
  const stateFromStores = user(guildId[4]).useStateFromStores(items, () => {
    let member = null;
    if (null != guildId) {
      member = outer1_5.getMember(guildId, user.id);
    }
    return member;
  });
  if (null != guildId) {
    let avatarDecoration;
    if (null != stateFromStores) {
      avatarDecoration = stateFromStores.avatarDecoration;
    }
  } else {
    avatarDecoration = user.avatarDecoration;
  }
  return avatarDecoration;
};
export const useUserProfileEffect = function useUserProfileEffect(arg0) {
  let dependencyMap;
  let require;
  ({ user: require, guildId: dependencyMap } = arg0);
  const items = [closure_4];
  return require(566) /* initialize */.useStateFromStores(items, () => {
    if (null == closure_1) {
      const userProfile = outer1_4.getUserProfile(user.id);
      let profileEffect;
      if (null != userProfile) {
        profileEffect = userProfile.profileEffect;
      }
    } else {
      const guildMemberProfile = outer1_4.getGuildMemberProfile(user.id, closure_1);
      if (null != guildMemberProfile) {
        profileEffect = guildMemberProfile.profileEffect;
      }
    }
    return profileEffect;
  });
};
export const useUserProfileFrame = function useUserProfileFrame(arg0) {
  let dependencyMap;
  let require;
  ({ user: require, guildId: dependencyMap } = arg0);
  const items = [closure_4];
  return require(566) /* initialize */.useStateFromStores(items, () => {
    if (null == closure_1) {
      const userProfile = outer1_4.getUserProfile(user.id);
      let profileFrame;
      if (null != userProfile) {
        profileFrame = userProfile.profileFrame;
      }
    } else {
      const guildMemberProfile = outer1_4.getGuildMemberProfile(user.id, closure_1);
      if (null != guildMemberProfile) {
        profileFrame = guildMemberProfile.profileFrame;
      }
    }
    return profileFrame;
  });
};
export const useAvatarDecorationSettings = function useAvatarDecorationSettings(arg0) {
  const _require = arg0;
  const items = [_isNativeReflectConstruct];
  return _require(566).useStateFromStoresObject(items, () => ({ pendingAvatarDecoration: outer1_3.getPendingChanges(closure_0).pendingAvatarDecoration, errors: outer1_3.getErrors(closure_0).avatarDecoration }));
};
export const useProfileEffectSettings = function useProfileEffectSettings(arg0) {
  const _require = arg0;
  const items = [_isNativeReflectConstruct];
  return _require(566).useStateFromStoresObject(items, () => ({ pendingProfileEffect: outer1_3.getPendingChanges(closure_0).pendingProfileEffect, errors: outer1_3.getErrors(closure_0).profileEffect }));
};
export const useProfileFrameSettings = function useProfileFrameSettings(arg0) {
  const _require = arg0;
  const items = [_isNativeReflectConstruct];
  return _require(566).useStateFromStoresObject(items, () => ({ pendingProfileFrame: outer1_3.getPendingChanges(closure_0).pendingProfileFrame, errors: outer1_3.getErrors(closure_0).profileFrame }));
};
export { getProfilePreviewValue };
export const resolveCollectiblesOverride = function resolveCollectiblesOverride(pendingValue) {
  pendingValue = pendingValue.pendingValue;
  if (undefined !== pendingValue) {
    const obj = { userValue: tmp, guildValue: tmp2, pendingValue, guildId: tmp3 };
    const tmp5 = getProfilePreviewValue(obj);
    let tmp6 = null;
    if (null != tmp5) {
      tmp6 = tmp5;
    }
    return tmp6;
  }
};
export const showRemoveAvatar = function showRemoveAvatar(pendingAvatar, avatar) {
  if (undefined === pendingAvatar) {
    let tmp2 = null != avatar;
  } else {
    tmp2 = null != pendingAvatar;
  }
  return tmp2;
};
export const showRemoveBanner = function showRemoveBanner(arg0, banner) {
  if (undefined === arg0) {
    let tmp2 = null != banner;
  } else {
    tmp2 = null != arg0;
  }
  return tmp2;
};
export const announcePendingAvatarChange = function announcePendingAvatarChange(set) {
  if ("set" === set) {
    const AccessibilityAnnouncer3 = require(3976) /* AccessibilityAnnouncer */.AccessibilityAnnouncer;
    const intl3 = require(1212) /* getSystemLocale */.intl;
    AccessibilityAnnouncer3.announce(intl3.string(require(1212) /* getSystemLocale */.t.dyU5c5));
  } else if ("remove" === set) {
    const AccessibilityAnnouncer2 = require(3976) /* AccessibilityAnnouncer */.AccessibilityAnnouncer;
    const intl2 = require(1212) /* getSystemLocale */.intl;
    AccessibilityAnnouncer2.announce(intl2.string(require(1212) /* getSystemLocale */.t["f1+oNk"]));
  } else {
    const AccessibilityAnnouncer = require(3976) /* AccessibilityAnnouncer */.AccessibilityAnnouncer;
    const intl = require(1212) /* getSystemLocale */.intl;
    AccessibilityAnnouncer.announce(intl.string(require(1212) /* getSystemLocale */.t["/b5nqj"]));
  }
};
