// Module ID: 13379
// Function ID: 13380
// Name: useUserProfileGameFriendApplicationIds
// Dependencies: [19, 4409, 1376, 558, 568, 504, 13359, 2]

// Module 13379 (useUserProfileGameFriendApplicationIds)
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4409 */;
import UserStore from "UserStore" /* 1376 */;

const require = fn;
let closure_5 = [];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_relationships/hooks/useUserProfileGameFriendApplicationIds.tsx");

export const useUserProfileGameFriendApplicationIds = ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  const cResult = userId(568).c(6);
  userId = userId.userId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RelationshipStore, UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    const fn = function u() {
      let isFriendResult = RelationshipStore.isFriend(userId);
      if (!isFriendResult) {
        const user = UserStore.getUser(userId);
        let isProvisional;
        if (user != null) {
          isProvisional = user.isProvisional;
        }
        isFriendResult = isProvisional;
      }
      return isFriendResult;
    };
    cResult[1] = userId;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = userId(568);
  const stateFromStores = userId(504).useStateFromStores(first, tmp7);
  const tmpResult = userId(504);
  const gameFriendsForUser = userId(13359).useGameFriendsForUser(userId);
  if (stateFromStores) {
    const tmp9 = closure_5;
  } else if (cResult[3] !== gameFriendsForUser) {
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor(arg0) {
          return userId.applicationId;
        }
      }
      cResult[5] = I;
      const tmp10 = I;
    } else {
      class I {
        constructor(arg0) {
          return userId.applicationId;
        }
      }
    }
    const mapped = gameFriendsForUser.map(tmp10);
    cResult[3] = gameFriendsForUser;
    cResult[4] = mapped;
  } else {
    class I {
      constructor(arg0) {
        return userId.applicationId;
      }
    }
  }
  return tmp9;
}) : ((userId) => {
  userId = userId.userId;
  let stateFromStores;
  const items = [RelationshipStore, UserStore];
  stateFromStores = userId(stateFromStores[5]).useStateFromStores(items, () => {
    let isFriendResult = RelationshipStore.isFriend(userId);
    if (!isFriendResult) {
      const user = UserStore.getUser(userId);
      let isProvisional;
      if (user != null) {
        isProvisional = user.isProvisional;
      }
      isFriendResult = isProvisional;
    }
    return isFriendResult;
  });
  const obj = userId(stateFromStores[5]);
  const gameFriendsForUser = userId(stateFromStores[6]).useGameFriendsForUser(userId);
  const items1 = [gameFriendsForUser, stateFromStores];
  return gameFriendsForUser.useMemo(() => {
    if (stateFromStores) {
      let mapped = closure_5;
    } else {
      mapped = gameFriendsForUser.map((applicationId) => applicationId.applicationId);
    }
    return mapped;
  }, items1);
});
