// Module ID: 15193
// Function ID: 114586
// Name: useOtherGuildJoinRequestsForUser
// Dependencies: []
// Exports: useOtherGuildJoinRequestsForUser

// Module 15193 (useOtherGuildJoinRequestsForUser)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_member_verification/hooks/useOtherGuildJoinRequestsForUser.tsx");

export const useOtherGuildJoinRequestsForUser = function useOtherGuildJoinRequestsForUser(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const userId = guildId.userId;
  const importDefault = userId;
  const selectedJoinRequestId = guildId.selectedJoinRequestId;
  const dependencyMap = selectedJoinRequestId;
  const items = [closure_4];
  const items1 = [guildId, userId];
  const stateFromStores = arg1(dependencyMap[2]).useStateFromStores(items, () => requestsForUser.getRequestsForUser(guildId, userId), items1);
  const React = stateFromStores;
  const items2 = [guildId, userId, stateFromStores];
  const effect = React.useEffect(() => {
    if (null == stateFromStores) {
      const guildJoinRequestsForUser = userId(selectedJoinRequestId[3]).fetchGuildJoinRequestsForUser(guildId, userId);
      const obj = userId(selectedJoinRequestId[3]);
    }
  }, items2);
  const items3 = [stateFromStores, selectedJoinRequestId];
  return React.useMemo(() => {
    const found = null != stateFromStores ? stateFromStores : [].filter((joinRequestId) => joinRequestId.joinRequestId !== closure_2);
    const substr = found.slice();
    return substr.sort((createdAt, createdAt2) => {
      const time = new Date(createdAt2.createdAt).getTime();
      const date = new Date(createdAt2.createdAt);
      return time - new Date(createdAt.createdAt).getTime();
    });
  }, items3);
};
