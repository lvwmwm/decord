// Module ID: 15201
// Function ID: 15202
// Name: useUserProfileGameFriendApplicationIds
// Dependencies: [19, 5083, 1385, 504, 15130, 2]
// Exports: useUserProfileGameFriendApplicationIds

// Module 15201 (useUserProfileGameFriendApplicationIds)
import react from "react" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 5083 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

let closure_5 = [];
const result = size.fileFinishedImporting("modules/game_relationships/hooks/useUserProfileGameFriendApplicationIds.tsx");

export function useUserProfileGameFriendApplicationIds(userId) {
  userId = userId.userId;
  let stateFromStores;
  const items = [RelationshipStore, UserStore];
  const obj = userId(stateFromStores[3]);
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
  const obj2 = userId(stateFromStores[4]);
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
}
