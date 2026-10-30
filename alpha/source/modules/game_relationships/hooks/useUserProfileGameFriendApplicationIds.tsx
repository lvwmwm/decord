// Module ID: 14942
// Function ID: 14943
// Name: useUserProfileGameFriendApplicationIds
// Dependencies: [19, 4951, 1384, 504, 14878, 2]
// Exports: useUserProfileGameFriendApplicationIds

// Module 14942 (useUserProfileGameFriendApplicationIds)
import react from "react" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4951 */;
import UserStore from "UserStore" /* 1384 */;
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
