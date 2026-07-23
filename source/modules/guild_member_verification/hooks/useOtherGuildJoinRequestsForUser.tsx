// Module ID: 15309
// Function ID: 116756
// Name: useOtherGuildJoinRequestsForUser
// Dependencies: [31, 6692, 566, 9160, 2]
// Exports: useOtherGuildJoinRequestsForUser

// Module 15309 (useOtherGuildJoinRequestsForUser)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/guild_member_verification/hooks/useOtherGuildJoinRequestsForUser.tsx");

export const useOtherGuildJoinRequestsForUser = function useOtherGuildJoinRequestsForUser(guildId) {
  guildId = guildId.guildId;
  const userId = guildId.userId;
  const selectedJoinRequestId = guildId.selectedJoinRequestId;
  const items = [_isNativeReflectConstruct];
  const items1 = [guildId, userId];
  const stateFromStores = guildId(selectedJoinRequestId[2]).useStateFromStores(items, () => outer1_4.getRequestsForUser(guildId, userId), items1);
  const items2 = [guildId, userId, stateFromStores];
  const effect = stateFromStores.useEffect(() => {
    if (null == stateFromStores) {
      const guildJoinRequestsForUser = userId(selectedJoinRequestId[3]).fetchGuildJoinRequestsForUser(guildId, userId);
      const obj = userId(selectedJoinRequestId[3]);
    }
  }, items2);
  const items3 = [stateFromStores, selectedJoinRequestId];
  return stateFromStores.useMemo(() => {
    const found = null != stateFromStores ? stateFromStores : [].filter((joinRequestId) => joinRequestId.joinRequestId !== outer1_2);
    const substr = found.slice();
    return substr.sort((createdAt, createdAt2) => {
      const time = new Date(createdAt2.createdAt).getTime();
      const date = new Date(createdAt2.createdAt);
      return time - new Date(createdAt.createdAt).getTime();
    });
  }, items3);
};
