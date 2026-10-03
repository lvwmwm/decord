// Module ID: 16277
// Function ID: 16278
// Name: moveGuildNode
// Dependencies: [5616, 8863, 5705, 2]
// Exports: default, persistGuildsBarOrder

// Module 16277 (moveGuildNode)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5705 */;
import UserSettingsActionCreators from "UserSettingsActionCreators" /* 8863 */;
import SortedGuildStore from "SortedGuildStore" /* 5616 */;
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
