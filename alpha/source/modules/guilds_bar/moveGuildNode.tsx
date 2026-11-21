// Module ID: 17913
// Function ID: 17914
// Name: moveGuildNode
// Dependencies: [6550, 5826, 6511, 2]
// Exports: default, persistGuildsBarOrder

// Module 17913 (moveGuildNode)
import UserSettingsActionCreators from "UserSettingsActionCreators" /* 5826 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6511 */;
import SortedGuildStore from "SortedGuildStore" /* 6550 */;
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
