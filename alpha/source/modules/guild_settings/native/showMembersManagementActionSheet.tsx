// Module ID: 18599
// Function ID: 18600
// Name: showMembersManagementActionSheet
// Dependencies: [1384, 1114, 5253, 18600, 1995, 7433, 18601, 7357, 2]
// Exports: default, getMembersManagementActions

// Module 18599 (showMembersManagementActionSheet)
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import UserStore from "UserStore" /* 1384 */;
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
    label: intl.string(guild(1114).t.pEasFX),
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { guild, selectedRoleId: importDefault, onFilterRoleId: dependencyMap };
      obj.openLazy(asyncRequire(18600, dependencyMap.paths), "MembersFilter", obj2);
    }
  };
  intl = guild(1114).intl;
  const items = [obj];
  if (canPrune == null) {
    const tmpResult = guild(7433);
    canPrune = tmpResult.canPruneGuildMembers(guild, UserStore.getCurrentUser());
  }
  if (canPrune) {
    let obj2 = {
      label: intl2.string(guild(1114).t["2mIlKQ"]),
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          const obj2 = { guild };
          obj.openLazy(asyncRequire(18601, dependencyMap.paths), "MembersPrune", obj2);
        },
      isDestructive: true
    };
    const push = items.push;
    intl2 = tmp(1114).intl;
    push(obj2);
  }
  const tmpResult2 = guild(7357);
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
    label: intl.string(guild(1114).t.pEasFX),
    action() {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { guild, selectedRoleId: importDefault, onFilterRoleId: dependencyMap };
      obj.openLazy(asyncRequire(18600, dependencyMap.paths), "MembersFilter", obj2);
    }
  };
  intl = guild(1114).intl;
  const items = [obj];
  if (canPrune == null) {
    const tmpResult = guild(7433);
    canPrune = tmpResult.canPruneGuildMembers(guild, UserStore.getCurrentUser());
  }
  if (canPrune) {
    let obj2 = {
      label: intl2.string(guild(1114).t["2mIlKQ"]),
      action() {
          const obj = ActionSheetActionCreatorsDefault;
          const obj2 = { guild };
          obj.openLazy(asyncRequire(18601, dependencyMap.paths), "MembersPrune", obj2);
        },
      variant: "destructive"
    };
    const push = items.push;
    intl2 = tmp(1114).intl;
    push(obj2);
  }
  return items;
}
