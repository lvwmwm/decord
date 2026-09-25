// Module ID: 9214
// Function ID: 9215
// Name: usePendingFolderGuildIds
// Dependencies: [4653, 2066, 504, 2]
// Exports: default, getPendingFolderGuildIds

// Module 9214 (usePendingFolderGuildIds)
import initialize from "initialize" /* 504 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4653 */;
import GuildStore from "GuildStore" /* 2066 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/usePendingFolderGuildIds.tsx");

export default function usePendingFolderGuildIds() {
  let items = [UserGuildJoinRequestStore, GuildStore];
  return initialize.useStateFromStoresArray(items, () => {
    const items = [UserGuildJoinRequestStore, GuildStore];
    [obj, obj2] = items;
    const guildIds = obj.computeGuildIds();
    const guilds = obj2.getGuilds();
    return guildIds.filter((item) => null == closure_0[item]);
  });
};
export const getPendingFolderGuildIds = function getPendingFolderGuildIds() {
  let tmp = arg0;
  if (arg0 === undefined) {
    const items = [UserGuildJoinRequestStore, GuildStore];
    tmp = items;
  }
  [obj, obj2] = tmp;
  const guildIds = obj.computeGuildIds();
  const guilds = obj2.getGuilds();
  return guildIds.filter((item) => null == closure_0[item]);
};
