// Module ID: 11982
// Function ID: 92611
// Name: useUserProfileGameFriendApplicationIds
// Dependencies: []
// Exports: useUserProfileGameFriendApplicationIds

// Module 11982 (useUserProfileGameFriendApplicationIds)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = [];
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/game_relationships/hooks/useUserProfileGameFriendApplicationIds.tsx");

export const useUserProfileGameFriendApplicationIds = function useUserProfileGameFriendApplicationIds(userId) {
  userId = userId.userId;
  const arg1 = userId;
  const items = [closure_3, closure_4];
  const stateFromStores = arg1(dependencyMap[3]).useStateFromStores(items, () => {
    let isFriendResult = friend.isFriend(userId);
    if (!isFriendResult) {
      const user = user.getUser(userId);
      let isProvisional;
      if (null != user) {
        isProvisional = user.isProvisional;
      }
      isFriendResult = isProvisional;
    }
    return isFriendResult;
  });
  const dependencyMap = stateFromStores;
  const obj = arg1(dependencyMap[3]);
  const gameFriendsForUser = arg1(dependencyMap[4]).useGameFriendsForUser(userId);
  const React = gameFriendsForUser;
  const items1 = [gameFriendsForUser, stateFromStores];
  return React.useMemo(() => {
    if (stateFromStores) {
      let mapped = closure_5;
    } else {
      mapped = gameFriendsForUser.map((applicationId) => applicationId.applicationId);
    }
    return mapped;
  }, items1);
};
