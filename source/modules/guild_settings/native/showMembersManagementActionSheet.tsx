// Module ID: 15299
// Function ID: 116670
// Name: showMembersManagementActionSheet
// Dependencies: [1849, 1212, 4098, 15300, 1934, 5646, 15301, 5497, 2]
// Exports: default, getMembersManagementActions

// Module 15299 (showMembersManagementActionSheet)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
let result = require("showActionSheet").fileFinishedImporting("modules/guild_settings/native/showMembersManagementActionSheet.tsx");

export default function showMembersManagementActionSheet(guild) {
  let canPrune;
  let dependencyMap;
  let importDefault;
  guild = guild.guild;
  ({ canPrune, selectedRoleId: importDefault, onFilterRoleId: dependencyMap } = guild);
  let obj = {};
  const intl = guild(1212).intl;
  obj.label = intl.string(guild(1212).t.pEasFX);
  obj.onPress = function onPress() {
    let obj = outer1_1(outer1_2[2]);
    obj = { guild, selectedRoleId: closure_1, onFilterRoleId: closure_2 };
    obj.openLazy(guild(outer1_2[4])(outer1_2[3], outer1_2.paths), "MembersFilter", obj);
  };
  const items = [obj];
  if (null == canPrune) {
    canPrune = guild(5646).canPruneGuildMembers(guild, authStore.getCurrentUser());
    const obj2 = guild(5646);
  }
  if (canPrune) {
    obj = {};
    const intl2 = guild(1212).intl;
    obj.label = intl2.string(guild(1212).t["2mIlKQ"]);
    obj.onPress = function onPress() {
      let obj = outer1_1(outer1_2[2]);
      obj = { guild };
      obj.openLazy(guild(outer1_2[4])(outer1_2[6], outer1_2.paths), "MembersPrune", obj);
    };
    obj.isDestructive = true;
    items.push(obj);
  }
  obj = { key: "GuildSettingsMembersMore", options: items, hasIcons: false };
  const result = guild(5497).showSimpleActionSheet(obj);
};
export const getMembersManagementActions = function getMembersManagementActions(guild) {
  let canPrune;
  let dependencyMap;
  let importDefault;
  guild = guild.guild;
  ({ canPrune, selectedRoleId: importDefault, onFilterRoleId: dependencyMap } = guild);
  let obj = {};
  const intl = guild(1212).intl;
  obj.label = intl.string(guild(1212).t.pEasFX);
  obj.action = function action() {
    let obj = outer1_1(outer1_2[2]);
    obj = { guild, selectedRoleId: closure_1, onFilterRoleId: closure_2 };
    obj.openLazy(guild(outer1_2[4])(outer1_2[3], outer1_2.paths), "MembersFilter", obj);
  };
  const items = [obj];
  if (null == canPrune) {
    canPrune = guild(5646).canPruneGuildMembers(guild, authStore.getCurrentUser());
    const obj2 = guild(5646);
  }
  if (canPrune) {
    obj = {};
    const intl2 = guild(1212).intl;
    obj.label = intl2.string(guild(1212).t["2mIlKQ"]);
    obj.action = function action() {
      let obj = outer1_1(outer1_2[2]);
      obj = { guild };
      obj.openLazy(guild(outer1_2[4])(outer1_2[6], outer1_2.paths), "MembersPrune", obj);
    };
    obj.variant = "destructive";
    items.push(obj);
  }
  return items;
};
