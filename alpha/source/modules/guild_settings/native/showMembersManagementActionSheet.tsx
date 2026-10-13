// Module ID: 17343
// Function ID: 17344
// Name: showMembersManagementActionSheet
// Dependencies: [1390, 1126, 5056, 17344, 2000, 6968, 17345, 6891, 2]
// Exports: default, getMembersManagementActions

// Module 17343 (showMembersManagementActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import UserStore from "UserStore" /* 1390 */;
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
    label: intl.string(guild(1126).t.pEasFX),
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { guild, selectedRoleId: importDefault, onFilterRoleId: dependencyMap };
      obj.openLazy(asyncRequire(17344, dependencyMap.paths), "MembersFilter", obj2);
    }
  };
  intl = guild(1126).intl;
  const items = [obj];
  if (canPrune == null) {
    const tmpResult = guild(6968);
    canPrune = tmpResult.canPruneGuildMembers(guild, UserStore.getCurrentUser());
  }
  if (canPrune) {
    let obj2 = {
      label: intl2.string(guild(1126).t["2mIlKQ"]),
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          const obj2 = { guild };
          obj.openLazy(asyncRequire(17345, dependencyMap.paths), "MembersPrune", obj2);
        },
      isDestructive: true
    };
    const push = items.push;
    intl2 = tmp(1126).intl;
    push(obj2);
  }
  const tmpResult2 = guild(6891);
  const result = tmpResult2.showSimpleActionSheet({ key: "GuildSettingsMembersMore", options: items, hasIcons: false });
};
export const getMembersManagementActions = function getMembersManagementActions(guild) {
  let canPrune;
  let intl;
  let intl2;
  let onFilterRoleId;
  let selectedRoleId;
  guild = guild.guild;
  ({ canPrune, selectedRoleId: importDefault, onFilterRoleId: dependencyMap } = guild);
  let obj = {
    label: intl.string(guild(1126).t.pEasFX),
    action() {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { guild, selectedRoleId: importDefault, onFilterRoleId: dependencyMap };
      obj.openLazy(asyncRequire(17344, dependencyMap.paths), "MembersFilter", obj2);
    }
  };
  intl = guild(1126).intl;
  const items = [obj];
  if (canPrune == null) {
    const tmpResult = guild(6968);
    canPrune = tmpResult.canPruneGuildMembers(guild, UserStore.getCurrentUser());
  }
  if (canPrune) {
    let obj2 = {
      label: intl2.string(guild(1126).t["2mIlKQ"]),
      action() {
          const obj = ActionSheetActionCreatorsDefault;
          const obj2 = { guild };
          obj.openLazy(asyncRequire(17345, dependencyMap.paths), "MembersPrune", obj2);
        },
      variant: "destructive"
    };
    const push = items.push;
    intl2 = tmp(1126).intl;
    push(obj2);
  }
  return items;
};
