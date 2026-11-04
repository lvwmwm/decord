// Module ID: 8680
// Function ID: 8681
// Name: usePendingAvatarSettings
// Dependencies: [19, 8681, 558, 576, 8684, 573, 8685, 8687, 8688, 2]

// Module 8680 (usePendingAvatarSettings)
import react from "react" /* 19 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 8685 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 8687 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8681 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

const useCallback = react.useCallback;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePendingAvatarSettings(isTryItOut) {
  let closure_2;
  let first;
  let pendingAvatar;
  let pendingAvatarDecoration;
  let pendingErrors;
  let obj = isTryItOut(576);
  const cResult = obj.c(15);
  isTryItOut = isTryItOut.isTryItOut;
  const guildId = isTryItOut.guildId;
  const tmp4 = guildId(8684)(isTryItOut.analyticsLocations);
  dependencyMap = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserProfileSettingsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === guildId) {
    let tmp7;
    let setTryItOutAvatar;
    if (cResult[2] === isTryItOut) {
      tmp7 = cResult[3];
    }
    const tmpResult = isTryItOut(573);
    const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp7);
    ({ pendingAvatar, pendingAvatarDecoration, pendingErrors } = stateFromStoresObject);
    if (cResult[4] !== guildId) {
      const fn2 = function l(avatar) {
        const obj = UserProfileSettingsActionCreators;
        const obj2 = { guildId, avatar };
        obj.setPendingChanges(obj2);
        let str = "set";
        const announcePendingAvatarChange = ProfileCustomizationUtils.announcePendingAvatarChange;
        ProfileCustomizationUtils;
        if (null == avatar) {
          str = "remove";
        }
        const result = announcePendingAvatarChange(str);
      };
      cResult[4] = guildId;
      cResult[5] = fn2;
      setTryItOutAvatar = fn2;
    } else {
      setTryItOutAvatar = cResult[5];
    }
    if (cResult[6] === guildId) {
      let setTryItOutAvatarDecoration;
      if (cResult[7] === tmp4) {
        setTryItOutAvatarDecoration = cResult[8];
      }
      if (isTryItOut) {
        setTryItOutAvatar = tmp(8688).setTryItOutAvatar;
      }
      if (isTryItOut) {
        setTryItOutAvatarDecoration = tmp(8688).setTryItOutAvatarDecoration;
      }
      if (cResult[9] === pendingAvatar) {
        if (cResult[10] === pendingAvatarDecoration) {
          if (cResult[11] === pendingErrors) {
            if (cResult[12] === setTryItOutAvatar) {
              let tmp9;
              if (cResult[13] === setTryItOutAvatarDecoration) {
                tmp9 = cResult[14];
              }
              return tmp9;
            }
          }
        }
      }
      let obj2 = { pendingAvatar, pendingAvatarDecoration, pendingErrors, setPendingAvatar: null, setPendingAvatarDecoration: setTryItOutAvatarDecoration };
      class O {
        constructor(avatarDecoration) {
          const obj = UserProfileSettingsActionCreators;
          const obj2 = { guildId, avatarDecoration };
          obj.setPendingChanges(obj2);
          if (null != avatarDecoration) {
            closure_2(avatarDecoration);
          }
        }
      }
      cResult[9] = pendingAvatar;
      cResult[10] = pendingAvatarDecoration;
      cResult[11] = pendingErrors;
      cResult[12] = setTryItOutAvatar;
      cResult[13] = setTryItOutAvatarDecoration;
      cResult[14] = obj2;
      tmp9 = obj2;
    }
    class O {
      constructor(avatarDecoration) {
        const obj = UserProfileSettingsActionCreators;
        const obj2 = { guildId, avatarDecoration };
        obj.setPendingChanges(obj2);
        if (null != avatarDecoration) {
          closure_2(avatarDecoration);
        }
      }
    }
    cResult[6] = guildId;
    cResult[7] = tmp4;
    cResult[8] = O;
    setTryItOutAvatarDecoration = O;
  }
  const fn = function s() {
    let tryItOutAvatarDecoration;
    const pendingChanges = UserProfileSettingsStore.getPendingChanges(guildId);
    const obj3 = { pendingAvatar: null, pendingAvatarDecoration: null, pendingErrors: null };
    if (isTryItOut) {
      const tryItOutChanges = obj.getTryItOutChanges();
      ({ tryItOutAvatar: obj2.pendingAvatar, tryItOutAvatarDecoration } = tryItOutChanges);
      if (tryItOutAvatarDecoration == null) {
        tryItOutAvatarDecoration = pendingChanges.pendingAvatarDecoration;
      }
      obj3.pendingAvatarDecoration = tryItOutAvatarDecoration;
      obj3.pendingErrors = UserProfileSettingsStore.getErrors(guildId).avatarDecoration;
      return obj3;
    } else {
      ({ pendingAvatar: obj2.pendingAvatar, pendingAvatarDecoration: obj2.pendingAvatarDecoration } = pendingChanges);
      obj3.pendingErrors = UserProfileSettingsStore.getErrors(guildId).avatarDecoration;
      return obj3;
    }
  };
  cResult[1] = guildId;
  cResult[2] = isTryItOut;
  cResult[3] = fn;
  tmp7 = fn;
}) : (function usePendingAvatarSettings(isTryItOut) {
  let closure_2;
  let pendingAvatar;
  let pendingAvatarDecoration;
  let pendingErrors;
  isTryItOut = isTryItOut.isTryItOut;
  const guildId = isTryItOut.guildId;
  const tmp2 = guildId(8684)(isTryItOut.analyticsLocations);
  dependencyMap = tmp2;
  let obj = isTryItOut(573);
  const items = [UserProfileSettingsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let tryItOutAvatarDecoration;
    const pendingChanges = UserProfileSettingsStore.getPendingChanges(guildId);
    const obj3 = { pendingAvatar: null, pendingAvatarDecoration: null, pendingErrors: null };
    if (isTryItOut) {
      const tryItOutChanges = obj.getTryItOutChanges();
      ({ tryItOutAvatar: obj2.pendingAvatar, tryItOutAvatarDecoration } = tryItOutChanges);
      if (tryItOutAvatarDecoration == null) {
        tryItOutAvatarDecoration = pendingChanges.pendingAvatarDecoration;
      }
      obj3.pendingAvatarDecoration = tryItOutAvatarDecoration;
      obj3.pendingErrors = UserProfileSettingsStore.getErrors(guildId).avatarDecoration;
      return obj3;
    } else {
      ({ pendingAvatar: obj2.pendingAvatar, pendingAvatarDecoration: obj2.pendingAvatarDecoration } = pendingChanges);
      obj3.pendingErrors = UserProfileSettingsStore.getErrors(guildId).avatarDecoration;
      return obj3;
    }
  });
  const items1 = [guildId];
  ({ pendingAvatar, pendingAvatarDecoration, pendingErrors } = stateFromStoresObject);
  let setTryItOutAvatar = useCallback((avatar) => {
    const obj = UserProfileSettingsActionCreators;
    const obj2 = { guildId, avatar };
    obj.setPendingChanges(obj2);
    let str = "set";
    const announcePendingAvatarChange = ProfileCustomizationUtils.announcePendingAvatarChange;
    ProfileCustomizationUtils;
    if (null == avatar) {
      str = "remove";
    }
    const result = announcePendingAvatarChange(str);
  }, items1);
  const items2 = [tmp2, guildId];
  let setTryItOutAvatarDecoration = useCallback((avatarDecoration) => {
    const obj = UserProfileSettingsActionCreators;
    const obj2 = { guildId, avatarDecoration };
    obj.setPendingChanges(obj2);
    if (null != avatarDecoration) {
      closure_2(avatarDecoration);
    }
  }, items2);
  let obj2 = { pendingAvatar, pendingAvatarDecoration, pendingErrors, setPendingAvatar: setTryItOutAvatar, setPendingAvatarDecoration: setTryItOutAvatarDecoration };
  if (isTryItOut) {
    setTryItOutAvatar = tmp3(8688).setTryItOutAvatar;
  }
  if (isTryItOut) {
    setTryItOutAvatarDecoration = tmp3(8688).setTryItOutAvatarDecoration;
  }
  return obj2;
});
let result = size.fileFinishedImporting("modules/user_profile/hooks/usePendingAvatarSettings.tsx");

export default tmp2;
