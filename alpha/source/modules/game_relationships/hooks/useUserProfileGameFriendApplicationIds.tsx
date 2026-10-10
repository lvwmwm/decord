// Module ID: 13363
// Function ID: 13364
// Name: useUserProfileGameFriendApplicationIds
// Dependencies: [19, 4760, 1390, 558, 576, 504, 13183, 2]

// Module 13363 (useUserProfileGameFriendApplicationIds)
import react from "react" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4760 */;
import UserStore from "UserStore" /* 1390 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_5 = [];
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useUserProfileGameFriendApplicationIds(userId) {
  let first;
  let tmp7;
  let tmp9;
  let tmp = userId;
  const obj = userId(576);
  const cResult = obj.c(6);
  userId = userId.userId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RelationshipStore, UserStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    const fn = function u() {
      let isFriendResult = RelationshipStore.isFriend(userId);
      const tmp = userId;
      if (!isFriendResult) {
        const user = UserStore.getUser(tmp);
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
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  const tmpResult2 = tmp(13183);
  const gameFriendsForUser = tmpResult2.useGameFriendsForUser(userId);
  if (stateFromStores) {
    tmp9 = closure_5;
  } else if (cResult[3] !== gameFriendsForUser) {
    let tmp10;
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function v(applicationId) {
        return applicationId.applicationId;
      };
      cResult[5] = fn2;
      tmp10 = fn2;
    } else {
      tmp10 = cResult[5];
    }
    const mapped = gameFriendsForUser.map(tmp10);
    cResult[3] = gameFriendsForUser;
    cResult[4] = mapped;
    tmp9 = mapped;
  } else {
    tmp9 = cResult[4];
  }
  return tmp9;
}) : (function useUserProfileGameFriendApplicationIds(userId) {
  userId = userId.userId;
  let stateFromStores;
  const items = [RelationshipStore, UserStore];
  const obj = userId(stateFromStores[5]);
  stateFromStores = obj.useStateFromStores(items, () => {
    let isFriendResult = RelationshipStore.isFriend(userId);
    const tmp = userId;
    if (!isFriendResult) {
      const user = UserStore.getUser(tmp);
      let isProvisional;
      if (user != null) {
        isProvisional = user.isProvisional;
      }
      isFriendResult = isProvisional;
    }
    return isFriendResult;
  });
  const obj2 = userId(stateFromStores[6]);
  const gameFriendsForUser = obj2.useGameFriendsForUser(userId);
  const items1 = [gameFriendsForUser, stateFromStores];
  return gameFriendsForUser.useMemo(() => {
    let mapped;
    const tmp = stateFromStores;
    if (tmp) {
      mapped = closure_5;
    } else {
      mapped = gameFriendsForUser.map((applicationId) => applicationId.applicationId);
    }
    return mapped;
  }, items1);
});
const result = size.fileFinishedImporting("modules/game_relationships/hooks/useUserProfileGameFriendApplicationIds.tsx");

export const useUserProfileGameFriendApplicationIds = tmp2;
