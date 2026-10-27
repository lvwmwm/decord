// Module ID: 17724
// Function ID: 17725
// Name: showMembersManagementActionSheet
// Dependencies: [1392, 1128, 5155, 17725, 2002, 7242, 17726, 7167, 2]
// Exports: default, getMembersManagementActions

// Module 17724 (showMembersManagementActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import UserStore from "UserStore" /* 1392 */;
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
    label: intl.string(guild(1128).t.pEasFX),
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { guild, selectedRoleId: importDefault, onFilterRoleId: dependencyMap };
      obj.openLazy(asyncRequire(17725, dependencyMap.paths), "MembersFilter", obj2);
    }
  };
  intl = guild(1128).intl;
  const items = [obj];
  if (canPrune == null) {
    const tmpResult = guild(7242);
    canPrune = tmpResult.canPruneGuildMembers(guild, UserStore.getCurrentUser());
  }
  if (canPrune) {
    let obj2 = {
      label: intl2.string(guild(1128).t["2mIlKQ"]),
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          const obj2 = { guild };
          obj.openLazy(asyncRequire(17726, dependencyMap.paths), "MembersPrune", obj2);
        },
      isDestructive: true
    };
    const push = items.push;
    intl2 = tmp(1128).intl;
    push(obj2);
  }
  const tmpResult2 = guild(7167);
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
    label: intl.string(guild(1128).t.pEasFX),
    action() {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { guild, selectedRoleId: importDefault, onFilterRoleId: dependencyMap };
      obj.openLazy(asyncRequire(17725, dependencyMap.paths), "MembersFilter", obj2);
    }
  };
  intl = guild(1128).intl;
  const items = [obj];
  if (canPrune == null) {
    const tmpResult = guild(7242);
    canPrune = tmpResult.canPruneGuildMembers(guild, UserStore.getCurrentUser());
  }
  if (canPrune) {
    let obj2 = {
      label: intl2.string(guild(1128).t["2mIlKQ"]),
      action() {
          const obj = ActionSheetActionCreatorsDefault;
          const obj2 = { guild };
          obj.openLazy(asyncRequire(17726, dependencyMap.paths), "MembersPrune", obj2);
        },
      variant: "destructive"
    };
    const push = items.push;
    intl2 = tmp(1128).intl;
    push(obj2);
  }
  return items;
};
