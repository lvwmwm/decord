// Module ID: 16774
// Function ID: 16775
// Name: moveGuildNode
// Dependencies: [5963, 5260, 6097, 2]
// Exports: default, persistGuildsBarOrder

// Module 16774 (moveGuildNode)
import UserSettingsActionCreators from "UserSettingsActionCreators" /* 5260 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6097 */;
import SortedGuildStore from "SortedGuildStore" /* 5963 */;
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
