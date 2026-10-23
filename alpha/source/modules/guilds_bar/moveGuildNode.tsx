// Module ID: 17748
// Function ID: 17749
// Name: moveGuildNode
// Dependencies: [6699, 5866, 6828, 2]
// Exports: default, persistGuildsBarOrder

// Module 17748 (moveGuildNode)
import UserSettingsActionCreators from "UserSettingsActionCreators" /* 5866 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6828 */;
import SortedGuildStore from "SortedGuildStore" /* 6699 */;
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
