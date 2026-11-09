// Module ID: 19020
// Function ID: 19021
// Name: useOtherGuildJoinRequestsForUser
// Dependencies: [19, 6972, 504, 6971, 2]
// Exports: useOtherGuildJoinRequestsForUser

// Module 19020 (useOtherGuildJoinRequestsForUser)
import GuildJoinRequestActionCreatorsDefault from "GuildJoinRequestActionCreators" /* 6971 */;
import react from "react" /* 19 */;
import GuildJoinRequestStore from "GuildJoinRequestStore" /* 6972 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_member_verification/hooks/useOtherGuildJoinRequestsForUser.tsx");

export function useOtherGuildJoinRequestsForUser(guildId) {
  guildId = guildId.guildId;
  const userId = guildId.userId;
  const selectedJoinRequestId = guildId.selectedJoinRequestId;
  let obj = guildId(selectedJoinRequestId[2]);
  let items = [GuildJoinRequestStore];
  const items1 = [guildId, userId];
  const stateFromStores = obj.useStateFromStores(items, () => GuildJoinRequestStore.getRequestsForUser(guildId, userId), items1);
  const items2 = [guildId, userId, stateFromStores];
  const effect = stateFromStores.useEffect(() => {
    if (null == stateFromStores) {
      const obj = GuildJoinRequestActionCreatorsDefault;
      const guildJoinRequestsForUser = obj.fetchGuildJoinRequestsForUser(guildId, userId);
    }
  }, items2);
  const items3 = [stateFromStores, selectedJoinRequestId];
  return stateFromStores.useMemo(() => {
    let items = stateFromStores;
    if (stateFromStores == null) {
      items = [];
    }
    const found = items.filter((joinRequestId) => joinRequestId.joinRequestId !== selectedJoinRequestId);
    const substr = found.slice();
    return substr.sort((createdAt, createdAt2) => {
      const date = new Date(createdAt2.createdAt);
      const time = date.getTime();
      const date1 = new Date(createdAt.createdAt);
      return time - date1.getTime();
    });
  }, items3);
}
