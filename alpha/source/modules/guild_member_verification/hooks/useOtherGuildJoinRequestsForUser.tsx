// Module ID: 18609
// Function ID: 18610
// Name: useOtherGuildJoinRequestsForUser
// Dependencies: [19, 6911, 504, 6910, 2]
// Exports: useOtherGuildJoinRequestsForUser

// Module 18609 (useOtherGuildJoinRequestsForUser)
import GuildJoinRequestActionCreatorsDefault from "GuildJoinRequestActionCreators" /* 6910 */;
import react from "react" /* 19 */;
import GuildJoinRequestStore from "GuildJoinRequestStore" /* 6911 */;
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
