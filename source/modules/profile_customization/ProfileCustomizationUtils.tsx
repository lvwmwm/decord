// Module ID: 7839
// Function ID: 62491
// Name: getProfilePreviewValue
// Dependencies: []
// Exports: announcePendingAvatarChange, resolveCollectiblesOverride, showRemoveAvatar, showRemoveBanner, useAvatarDecorationSettings, useAvatarsWithGuilds, useGuildMemberAndUserPendingNameplate, useGuildMemberOrUserPendingDisplayNameStyles, useProfileEffectSettings, useProfileFrameSettings, useUserAvatarDecoration, useUserProfileEffect, useUserProfileFrame

// Module 7839 (getProfilePreviewValue)
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
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/profile_customization/ProfileCustomizationUtils.tsx");

export const useAvatarsWithGuilds = function useAvatarsWithGuilds(arg0) {
  const arg1 = arg0;
  const items = [arg0];
  return React.useMemo(() => {
    const mutableAllGuildsAndMembers = mutableAllGuildsAndMembers.getMutableAllGuildsAndMembers();
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
        // continue
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
  guildId = user;
  const dependencyMap = guildId;
  let obj = guildId(dependencyMap[4]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let member = null;
    if (undefined !== arg1) {
      member = member.getMember(arg1, arg0.id);
    }
    return member;
  });
  const items1 = [closure_3];
  const stateFromStoresObject = guildId(dependencyMap[4]).useStateFromStoresObject(items1, () => ({ pendingNameplate: store.getPendingChanges(arg1).pendingNameplate, pendingErrors: store.getErrors(arg1).nameplate }));
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
  guildId = stateFromStores;
  const dependencyMap = guildId;
  let obj = guildId(dependencyMap[4]);
  const items = [closure_5];
  stateFromStores = obj.useStateFromStores(items, () => {
    let member = null;
    if (undefined !== arg1) {
      member = null;
      if (null != arg0) {
        member = member.getMember(arg1, arg0.id);
      }
    }
    return member;
  });
  const items1 = [closure_3];
  const stateFromStoresObject = guildId(dependencyMap[4]).useStateFromStoresObject(items1, () => ({ pendingDisplayNameStyles: store.getPendingChanges(arg1).pendingDisplayNameStyles, tryItOutDisplayNameStyles: store.getTryItOutChanges().tryItOutDisplayNameStyles, pendingErrors: store.getErrors(arg1).displayNameStyles }));
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
  const arg1 = user;
  const guildId = user.guildId;
  const dependencyMap = guildId;
  const items = [closure_5];
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => {
    let member = null;
    if (null != guildId) {
      member = member.getMember(guildId, user.id);
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
  ({ user: closure_0, guildId: closure_1 } = arg0);
  const items = [closure_4];
  return arg1(dependencyMap[4]).useStateFromStores(items, () => {
    if (null == closure_1) {
      const userProfile = authStore.getUserProfile(user.id);
      let profileEffect;
      if (null != userProfile) {
        profileEffect = userProfile.profileEffect;
      }
    } else {
      const guildMemberProfile = authStore.getGuildMemberProfile(user.id, closure_1);
      if (null != guildMemberProfile) {
        profileEffect = guildMemberProfile.profileEffect;
      }
    }
    return profileEffect;
  });
};
export const useUserProfileFrame = function useUserProfileFrame(arg0) {
  ({ user: closure_0, guildId: closure_1 } = arg0);
  const items = [closure_4];
  return arg1(dependencyMap[4]).useStateFromStores(items, () => {
    if (null == closure_1) {
      const userProfile = authStore.getUserProfile(user.id);
      let profileFrame;
      if (null != userProfile) {
        profileFrame = userProfile.profileFrame;
      }
    } else {
      const guildMemberProfile = authStore.getGuildMemberProfile(user.id, closure_1);
      if (null != guildMemberProfile) {
        profileFrame = guildMemberProfile.profileFrame;
      }
    }
    return profileFrame;
  });
};
export const useAvatarDecorationSettings = function useAvatarDecorationSettings(arg0) {
  const arg1 = arg0;
  const items = [closure_3];
  return arg1(dependencyMap[4]).useStateFromStoresObject(items, () => ({ pendingAvatarDecoration: store.getPendingChanges(arg0).pendingAvatarDecoration, errors: store.getErrors(arg0).avatarDecoration }));
};
export const useProfileEffectSettings = function useProfileEffectSettings(arg0) {
  const arg1 = arg0;
  const items = [closure_3];
  return arg1(dependencyMap[4]).useStateFromStoresObject(items, () => ({ pendingProfileEffect: store.getPendingChanges(arg0).pendingProfileEffect, errors: store.getErrors(arg0).profileEffect }));
};
export const useProfileFrameSettings = function useProfileFrameSettings(arg0) {
  const arg1 = arg0;
  const items = [closure_3];
  return arg1(dependencyMap[4]).useStateFromStoresObject(items, () => ({ pendingProfileFrame: store.getPendingChanges(arg0).pendingProfileFrame, errors: store.getErrors(arg0).profileFrame }));
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
    const AccessibilityAnnouncer3 = arg1(dependencyMap[5]).AccessibilityAnnouncer;
    const intl3 = arg1(dependencyMap[6]).intl;
    AccessibilityAnnouncer3.announce(intl3.string(arg1(dependencyMap[6]).t.dyU5c5));
  } else if ("remove" === set) {
    const AccessibilityAnnouncer2 = arg1(dependencyMap[5]).AccessibilityAnnouncer;
    const intl2 = arg1(dependencyMap[6]).intl;
    AccessibilityAnnouncer2.announce(intl2.string(arg1(dependencyMap[6]).t.f1+oNk));
  } else {
    const AccessibilityAnnouncer = arg1(dependencyMap[5]).AccessibilityAnnouncer;
    const intl = arg1(dependencyMap[6]).intl;
    AccessibilityAnnouncer.announce(intl.string(arg1(dependencyMap[6]).t./b5nqj));
  }
};
