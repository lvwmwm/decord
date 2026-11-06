// Module ID: 18686
// Function ID: 18687
// Name: moveGuildNode
// Dependencies: [6852, 6090, 6982, 2]
// Exports: default, persistGuildsBarOrder

// Module 18686 (moveGuildNode)
import UserSettingsActionCreators from "UserSettingsActionCreators" /* 6090 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6982 */;
import SortedGuildStore from "SortedGuildStore" /* 6852 */;
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
export function persistGuildsBarOrder() {
  const obj = UserSettingsActionCreators;
  obj.saveGuildFolders(SortedGuildStore.getCompatibleGuildFolders());
}
