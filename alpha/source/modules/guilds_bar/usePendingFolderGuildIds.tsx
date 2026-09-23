// Module ID: 10112
// Function ID: 10113
// Name: usePendingFolderGuildIds
// Dependencies: [4649, 2064, 504, 2]
// Exports: default, getPendingFolderGuildIds

// Module 10112 (usePendingFolderGuildIds)
import initialize from "initialize" /* 504 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4649 */;
import GuildStore from "GuildStore" /* 2064 */;

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
