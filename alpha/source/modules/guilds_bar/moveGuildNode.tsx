// Module ID: 17420
// Function ID: 17421
// Name: moveGuildNode
// Dependencies: [6182, 5323, 6324, 2]
// Exports: default, persistGuildsBarOrder

// Module 17420 (moveGuildNode)
import UserSettingsActionCreators from "UserSettingsActionCreators" /* 5323 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6324 */;
import SortedGuildStore from "SortedGuildStore" /* 6182 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guilds_bar/moveGuildNode.tsx");

export default function moveGuildNode(id, id1, c4, flag2) {
  let flag = c4;
  if (c4 === undefined) {
    flag = false;
  }
  if (flag2 === undefined) {
    flag2 = false;
  }
  const obj = GuildActionCreatorsDefault;
  obj.moveById(id, id1, flag, flag2);
  const obj2 = UserSettingsActionCreators;
  obj2.saveGuildFolders(SortedGuildStore.getCompatibleGuildFolders());
};
export const persistGuildsBarOrder = function persistGuildsBarOrder() {
  const obj = UserSettingsActionCreators;
  obj.saveGuildFolders(SortedGuildStore.getCompatibleGuildFolders());
};
