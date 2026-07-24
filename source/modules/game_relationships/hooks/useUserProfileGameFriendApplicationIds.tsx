// Module ID: 12131
// Function ID: 95073
// Name: useUserProfileGameFriendApplicationIds
// Dependencies: [31, 3767, 1849, 566, 12012, 2]
// Exports: useUserProfileGameFriendApplicationIds

// Module 12131 (useUserProfileGameFriendApplicationIds)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";

const require = arg1;
let closure_5 = [];
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/game_relationships/hooks/useUserProfileGameFriendApplicationIds.tsx");

export const useUserProfileGameFriendApplicationIds = function useUserProfileGameFriendApplicationIds(userId) {
  userId = userId.userId;
  const items = [_isNativeReflectConstruct, closure_4];
  stateFromStores = userId(stateFromStores[3]).useStateFromStores(items, () => {
    let isFriendResult = outer1_3.isFriend(userId);
    if (!isFriendResult) {
      const user = outer1_4.getUser(userId);
      let isProvisional;
      if (null != user) {
        isProvisional = user.isProvisional;
      }
      isFriendResult = isProvisional;
    }
    return isFriendResult;
  });
  const obj = userId(stateFromStores[3]);
  const gameFriendsForUser = userId(stateFromStores[4]).useGameFriendsForUser(userId);
  const items1 = [gameFriendsForUser, stateFromStores];
  return gameFriendsForUser.useMemo(() => {
    if (stateFromStores) {
      let mapped = outer1_5;
    } else {
      mapped = gameFriendsForUser.map((applicationId) => applicationId.applicationId);
    }
    return mapped;
  }, items1);
};
