// Module ID: 18065
// Function ID: 18066
// Name: moveGuildNode
// Dependencies: [6133, 5987, 6960, 2]
// Exports: default, persistGuildsBarOrder

// Module 18065 (moveGuildNode)
import UserSettingsActionCreators from "UserSettingsActionCreators" /* 5987 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6960 */;
import SortedGuildStore from "SortedGuildStore" /* 6133 */;
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
