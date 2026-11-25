// Module ID: 18230
// Function ID: 18231
// Name: showMembersManagementActionSheet
// Dependencies: [1386, 1112, 5127, 18231, 2119, 6887, 18232, 7550, 2]
// Exports: default, getMembersManagementActions

// Module 18230 (showMembersManagementActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import UserStore from "UserStore" /* 1386 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/guild_settings/native/showMembersManagementActionSheet.tsx");

export default function showMembersManagementActionSheet(guild) {
  let canPrune;
  let intl;
  let intl2;
  let onFilterRoleId;
  let selectedRoleId;
  guild = guild.guild;
  ({ canPrune, selectedRoleId: importDefault, onFilterRoleId: dependencyMap } = guild);
  let obj = {
    label: intl.string(guild(1112).t.pEasFX),
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { guild, selectedRoleId: importDefault, onFilterRoleId: dependencyMap };
      obj.openLazy(asyncRequire(18231, dependencyMap.paths), "MembersFilter", obj2);
    }
  };
  intl = guild(1112).intl;
  const items = [obj];
  if (canPrune == null) {
    const tmpResult = guild(6887);
    canPrune = tmpResult.canPruneGuildMembers(guild, UserStore.getCurrentUser());
  }
  if (canPrune) {
    let obj2 = {
      label: intl2.string(guild(1112).t["2mIlKQ"]),
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          const obj2 = { guild };
          obj.openLazy(asyncRequire(18232, dependencyMap.paths), "MembersPrune", obj2);
        },
      isDestructive: true
    };
    const push = items.push;
    intl2 = tmp(1112).intl;
    push(obj2);
  }
  const tmpResult2 = guild(7550);
  const result = tmpResult2.showSimpleActionSheet({ key: "GuildSettingsMembersMore", options: items, hasIcons: false });
};
export function getMembersManagementActions(guild) {
  let canPrune;
  let intl;
  let intl2;
  let onFilterRoleId;
  let selectedRoleId;
  guild = guild.guild;
  ({ canPrune, selectedRoleId: importDefault, onFilterRoleId: dependencyMap } = guild);
  let obj = {
    label: intl.string(guild(1112).t.pEasFX),
    action() {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { guild, selectedRoleId: importDefault, onFilterRoleId: dependencyMap };
      obj.openLazy(asyncRequire(18231, dependencyMap.paths), "MembersFilter", obj2);
    }
  };
  intl = guild(1112).intl;
  const items = [obj];
  if (canPrune == null) {
    const tmpResult = guild(6887);
    canPrune = tmpResult.canPruneGuildMembers(guild, UserStore.getCurrentUser());
  }
  if (canPrune) {
    let obj2 = {
      label: intl2.string(guild(1112).t["2mIlKQ"]),
      action() {
          const obj = ActionSheetActionCreatorsDefault;
          const obj2 = { guild };
          obj.openLazy(asyncRequire(18232, dependencyMap.paths), "MembersPrune", obj2);
        },
      variant: "destructive"
    };
    const push = items.push;
    intl2 = tmp(1112).intl;
    push(obj2);
  }
  return items;
}
