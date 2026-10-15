// Module ID: 17617
// Function ID: 17618
// Name: showMembersManagementActionSheet
// Dependencies: [1390, 1126, 5115, 17618, 2000, 7186, 17619, 7110, 2]
// Exports: default, getMembersManagementActions

// Module 17617 (showMembersManagementActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5115 */;
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
      obj.openLazy(asyncRequire(17618, dependencyMap.paths), "MembersFilter", obj2);
    }
  };
  intl = guild(1126).intl;
  const items = [obj];
  if (canPrune == null) {
    const tmpResult = guild(7186);
    canPrune = tmpResult.canPruneGuildMembers(guild, UserStore.getCurrentUser());
  }
  if (canPrune) {
    let obj2 = {
      label: intl2.string(guild(1126).t["2mIlKQ"]),
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          const obj2 = { guild };
          obj.openLazy(asyncRequire(17619, dependencyMap.paths), "MembersPrune", obj2);
        },
      isDestructive: true
    };
    const push = items.push;
    intl2 = tmp(1126).intl;
    push(obj2);
  }
  const tmpResult2 = guild(7110);
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
      obj.openLazy(asyncRequire(17618, dependencyMap.paths), "MembersFilter", obj2);
    }
  };
  intl = guild(1126).intl;
  const items = [obj];
  if (canPrune == null) {
    const tmpResult = guild(7186);
    canPrune = tmpResult.canPruneGuildMembers(guild, UserStore.getCurrentUser());
  }
  if (canPrune) {
    let obj2 = {
      label: intl2.string(guild(1126).t["2mIlKQ"]),
      action() {
          const obj = ActionSheetActionCreatorsDefault;
          const obj2 = { guild };
          obj.openLazy(asyncRequire(17619, dependencyMap.paths), "MembersPrune", obj2);
        },
      variant: "destructive"
    };
    const push = items.push;
    intl2 = tmp(1126).intl;
    push(obj2);
  }
  return items;
};
