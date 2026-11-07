// Module ID: 13462
// Function ID: 13463
// Name: usePendingFolderGuildIds
// Dependencies: [5172, 5011, 504, 2]
// Exports: default, getPendingFolderGuildIds

// Module 13462 (usePendingFolderGuildIds)
import get_initialized from "get initialized" /* 504 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 5172 */;
import GuildStore from "GuildStore" /* 5011 */;
import size from "module_2" /* 2 */;

const f105754 = (item) => null == closure_0[item];
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
    return guildIds.filter(f105754);
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
  return guildIds.filter(f105754);
}
