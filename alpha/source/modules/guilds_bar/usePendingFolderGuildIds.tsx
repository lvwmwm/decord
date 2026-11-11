// Module ID: 10741
// Function ID: 10742
// Name: usePendingFolderGuildIds
// Dependencies: [5287, 5114, 504, 2]
// Exports: default, getPendingFolderGuildIds

// Module 10741 (usePendingFolderGuildIds)
import get_initialized from "get initialized" /* 504 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 5287 */;
import GuildStore from "GuildStore" /* 5114 */;
import size from "module_2" /* 2 */;

const f99877 = (item) => null == closure_0[item];
const result = size.fileFinishedImporting("modules/guilds_bar/usePendingFolderGuildIds.tsx");

export default function usePendingFolderGuildIds() {
  const obj = get_initialized;
  let items = [UserGuildJoinRequestStore, GuildStore];
  return obj.useStateFromStoresArray(items, () => {
    let obj;
    let obj2;
    const items = [UserGuildJoinRequestStore, GuildStore];
    [obj, obj2] = items;
    const guildIds = obj.computeGuildIds();
    const guilds = obj2.getGuilds();
    return guildIds.filter(f99877);
  });
};
export function getPendingFolderGuildIds() {
  let obj;
  let obj2;
  let tmp = arg0;
  if (arg0 === undefined) {
    const items = [UserGuildJoinRequestStore, GuildStore];
    tmp = items;
  }
  [obj, obj2] = tmp;
  const guildIds = obj.computeGuildIds();
  const guilds = obj2.getGuilds();
  return guildIds.filter(f99877);
}
