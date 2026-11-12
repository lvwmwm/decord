// Module ID: 18784
// Function ID: 18785
// Name: moveGuildNode
// Dependencies: [6860, 6096, 6990, 2]
// Exports: default, persistGuildsBarOrder

// Module 18784 (moveGuildNode)
import UserSettingsActionCreators from "UserSettingsActionCreators" /* 6096 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6990 */;
import SortedGuildStore from "SortedGuildStore" /* 6860 */;
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
