// Module ID: 12152
// Function ID: 12153
// Name: usePendingFolderGuildIds
// Dependencies: [4828, 4665, 504, 2]
// Exports: default, getPendingFolderGuildIds

// Module 12152 (usePendingFolderGuildIds)
import get_initialized from "get initialized" /* 504 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4828 */;
import GuildStore from "GuildStore" /* 4665 */;
import size from "module_2" /* 2 */;

const f101394 = (item) => null == closure_0[item];
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
    return guildIds.filter(f101394);
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
  return guildIds.filter(f101394);
}
