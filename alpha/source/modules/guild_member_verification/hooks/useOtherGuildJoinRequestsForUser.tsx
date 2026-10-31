// Module ID: 18651
// Function ID: 18652
// Name: useOtherGuildJoinRequestsForUser
// Dependencies: [19, 6917, 504, 6916, 2]
// Exports: useOtherGuildJoinRequestsForUser

// Module 18651 (useOtherGuildJoinRequestsForUser)
import GuildJoinRequestActionCreatorsDefault from "GuildJoinRequestActionCreators" /* 6916 */;
import react from "react" /* 19 */;
import GuildJoinRequestStore from "GuildJoinRequestStore" /* 6917 */;
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
