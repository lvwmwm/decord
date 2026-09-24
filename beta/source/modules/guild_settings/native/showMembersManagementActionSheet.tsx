// Module ID: 16935
// Function ID: 16936
// Name: showMembersManagementActionSheet
// Dependencies: [1376, 1119, 4757, 16936, 1984, 7541, 16937, 7473, 2]
// Exports: default, getMembersManagementActions

// Module 16935 (showMembersManagementActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import UserStore from "UserStore" /* 1376 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/native/showMembersManagementActionSheet.tsx");

export default function showMembersManagementActionSheet(guild) {
  guild = guild.guild;
  ({ canPrune, selectedRoleId: importDefault, onFilterRoleId: dependencyMap } = guild);
  const obj = { label: null, onPress: null };
  const intl = guild(1119).intl;
  obj.label = intl.string(guild(1119).t.pEasFX);
  obj.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16936, dependencyMap.paths), "MembersFilter", { guild, selectedRoleId, onFilterRoleId });
  };
  const items = [obj];
  if (canPrune == null) {
    canPrune = tmp(7541).canPruneGuildMembers(guild, UserStore.getCurrentUser());
    const tmpResult = tmp(7541);
  }
  if (canPrune) {
    const obj2 = { label: null, onPress: null, isDestructive: true };
    const intl2 = tmp(1119).intl;
    obj2.label = intl2.string(tmp(1119).t["2mIlKQ"]);
    obj2.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16937, dependencyMap.paths), "MembersPrune", { guild });
    };
    items.push(obj2);
  }
  const result = guild(7473).showSimpleActionSheet({ key: "GuildSettingsMembersMore", options: items, hasIcons: false });
};
export const getMembersManagementActions = function getMembersManagementActions(guild) {
  guild = guild.guild;
  ({ canPrune, selectedRoleId: importDefault, onFilterRoleId: dependencyMap } = guild);
  const obj = { label: null, action: null };
  const intl = guild(1119).intl;
  obj.label = intl.string(guild(1119).t.pEasFX);
  obj.action = function action() {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16936, dependencyMap.paths), "MembersFilter", { guild, selectedRoleId, onFilterRoleId });
  };
  const items = [obj];
  if (canPrune == null) {
    canPrune = tmp(7541).canPruneGuildMembers(guild, UserStore.getCurrentUser());
    const tmpResult = tmp(7541);
  }
  if (canPrune) {
    const obj2 = { label: null, action: null, variant: "destructive" };
    const intl2 = tmp(1119).intl;
    obj2.label = intl2.string(tmp(1119).t["2mIlKQ"]);
    obj2.action = function action() {
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16937, dependencyMap.paths), "MembersPrune", { guild });
    };
    items.push(obj2);
  }
  return items;
};
