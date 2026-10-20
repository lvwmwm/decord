// Module ID: 17531
// Function ID: 17532
// Name: moveGuildNode
// Dependencies: [6652, 5826, 6781, 2]
// Exports: default, persistGuildsBarOrder

// Module 17531 (moveGuildNode)
import UserSettingsActionCreators from "UserSettingsActionCreators" /* 5826 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6781 */;
import SortedGuildStore from "SortedGuildStore" /* 6652 */;
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
