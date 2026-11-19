// Module ID: 7948
// Function ID: 7949
// Name: showUserProfileActionSheet
// Dependencies: [5, 7144, 4734, 3, 1388, 2121, 6835, 4617, 7949, 5006, 8029, 2]
// Exports: getUserProfileActionSheetKey, getUserProfileBlockedSpeedBumpActionSheetKey, getUserProfileIgnoredSpeedBumpActionSheetKey, showUserProfileActionSheetPostConnection

// Module 7948 (showUserProfileActionSheet)
import LoggerDefault from "Logger" /* 3 */;
import asyncRequire from "asyncRequire" /* 2121 */;
import UserSettings from "UserSettings" /* 4617 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import PostConnectionCallbackStore from "PostConnectionCallbackStore" /* 7144 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import RelationshipStore from "RelationshipStore" /* 4734 */;
import size from "module_2" /* 2 */;

let authStore, c4, c5;

function showUserProfileActionSheet(ignoreBlockedSpeedBump, arg1) {
  let str4;
  let str = arg1;
  const timestamp = Date.now();
  const IgnoreProfileSpeedbumpDisabled = UserSettings.IgnoreProfileSpeedbumpDisabled;
  if (!ignoreBlockedSpeedBump.ignoreBlockedSpeedBump) {
    const isBlockedResult = RelationshipStore.isBlocked(ignoreBlockedSpeedBump.userId);
    const isIgnoredResult = RelationshipStore.isIgnored(ignoreBlockedSpeedBump.userId);
    if (isIgnoredResult) {
      const tmp8 = asyncRequire(7949, dependencyMap.paths);
      const _HermesInternal = HermesInternal;
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      const combined = "" + UserProfile + "IgnoredSpeedBump" + ignoreBlockedSpeedBump.userId;
      const obj = { speedBumpType: str4, openedAt: timestamp };
      const merged = Object.assign(ignoreBlockedSpeedBump);
      str4 = "ignore";
      if (isBlockedResult) {
        str4 = "block";
      }
      return openLazy(tmp8, combined, obj, str);
    }
  }
  const tmp21 = asyncRequire(8029, dependencyMap.paths);
  const openLazy2 = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const combined1 = "" + UserProfile + ignoreBlockedSpeedBump.userId;
  const obj2 = { openedAt: timestamp };
  const merged1 = Object.assign(ignoreBlockedSpeedBump);
  if (str == null) {
    str = "replaceAll";
  }
  return openLazy2(tmp21, combined1, obj2, str);
}
const addPostConnectionCallback = PostConnectionCallbackStore.addPostConnectionCallback;
const UserProfile = "UserProfile";
let closure_7 = new LoggerDefault("showUserProfileActionSheet");
const tmp2 = new LoggerDefault("showUserProfileActionSheet");
const result = size.fileFinishedImporting("modules/user_profile/native/showUserProfileActionSheet.tsx");

export default showUserProfileActionSheet;
export const USER_PROFILE_ACTION_SHEET_KEY_PREFIX = "UserProfile";
export function getUserProfileActionSheetKey(userId) {
  return "" + UserProfile + userId;
}
export function getUserProfileBlockedSpeedBumpActionSheetKey(arg0) {
  return "" + UserProfile + "BlockedSpeedBump" + arg0;
}
export function getUserProfileIgnoredSpeedBumpActionSheetKey(arg0) {
  return "" + UserProfile + "IgnoredSpeedBump" + arg0;
}
export function showUserProfileActionSheetPostConnection(arg0) {
  let closure_0 = arg0;
  const tmp = addPostConnectionCallback(_asyncToGenerator(async (arg0, value) => {
    let closure_2;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "+60" };
      }
    } else {
      let c3;
      try {
        let getUser;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp;
            authStore = undefined;
            getUser = undefined;
            c4 = 1;
            c5 = 1;
            const obj4 = { value: authStore(tmp34[5])(tmp34[4], tmp34.paths), done: false };
            return obj4;
          }
        } else {
          if (1 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              authStore = value.default;
              if (null == authStore.getUser(closure_129_0.userId)) {
                c3 = 1;
                c4 = 3;
                c5 = 1;
                const obj6 = { value: authStore(tmp34[5])(tmp34[6], tmp34.paths), done: false };
                return obj6;
              }
            }
          } else if (2 === c4) {
            c3 = 0;
            const _HermesInternal = HermesInternal;
            logger.log("Failed to fetch user " + closure_129_0.userId + ":", tmp34);
          } else if (3 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              getUser = value.getUser;
              c4 = 4;
              c5 = 1;
              const obj8 = { value: getUser(closure_129_0.userId), done: false };
              return obj8;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
          }
          if (null != authStore.getUser(closure_129_0.userId)) {
            showUserProfileActionSheet(closure_129_0);
          }
          c5 = 3;
          return { value: "HermesInternal", done: "+60" };
        }
      } catch (tmp34) {
        if (0 === c3) {
          c5 = 3;
          throw tmp34;
        } else {
          c4 = 2;
        }
      }
    }
  }));
}
