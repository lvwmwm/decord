// Module ID: 15183
// Function ID: 114500
// Name: showMembersManagementActionSheet
// Dependencies: []
// Exports: default, getMembersManagementActions

// Module 15183 (showMembersManagementActionSheet)
let closure_3 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/guild_settings/native/showMembersManagementActionSheet.tsx");

export default function showMembersManagementActionSheet(guild) {
  let canPrune;
  guild = guild.guild;
  const arg1 = guild;
  ({ canPrune, selectedRoleId: closure_1, onFilterRoleId: closure_2 } = guild);
  let obj = {};
  const intl = arg1(dependencyMap[1]).intl;
  obj.label = intl.string(arg1(dependencyMap[1]).t.pEasFX);
  obj.onPress = function onPress() {
    let obj = callback(closure_2[2]);
    obj = { guild, selectedRoleId: callback, onFilterRoleId: closure_2 };
    obj.openLazy(guild(closure_2[4])(closure_2[3], closure_2.paths), "MembersFilter", obj);
  };
  const items = [obj];
  if (null == canPrune) {
    canPrune = arg1(dependencyMap[5]).canPruneGuildMembers(guild, authStore.getCurrentUser());
    const obj2 = arg1(dependencyMap[5]);
  }
  if (canPrune) {
    obj = {};
    const intl2 = arg1(dependencyMap[1]).intl;
    obj.label = intl2.string(arg1(dependencyMap[1]).t.2mIlKQ);
    obj.onPress = function onPress() {
      let obj = callback(closure_2[2]);
      obj = { guild };
      obj.openLazy(guild(closure_2[4])(closure_2[6], closure_2.paths), "MembersPrune", obj);
    };
    obj.isDestructive = true;
    items.push(obj);
  }
  const result = arg1(dependencyMap[7]).showSimpleActionSheet({ options: items });
};
export const getMembersManagementActions = function getMembersManagementActions(guild) {
  let canPrune;
  guild = guild.guild;
  const arg1 = guild;
  ({ canPrune, selectedRoleId: closure_1, onFilterRoleId: closure_2 } = guild);
  let obj = {};
  const intl = arg1(dependencyMap[1]).intl;
  obj.label = intl.string(arg1(dependencyMap[1]).t.pEasFX);
  obj.action = function action() {
    let obj = callback(closure_2[2]);
    obj = { guild, selectedRoleId: callback, onFilterRoleId: closure_2 };
    obj.openLazy(guild(closure_2[4])(closure_2[3], closure_2.paths), "MembersFilter", obj);
  };
  const items = [obj];
  if (null == canPrune) {
    canPrune = arg1(dependencyMap[5]).canPruneGuildMembers(guild, authStore.getCurrentUser());
    const obj2 = arg1(dependencyMap[5]);
  }
  if (canPrune) {
    obj = {};
    const intl2 = arg1(dependencyMap[1]).intl;
    obj.label = intl2.string(arg1(dependencyMap[1]).t.2mIlKQ);
    obj.action = function action() {
      let obj = callback(closure_2[2]);
      obj = { guild };
      obj.openLazy(guild(closure_2[4])(closure_2[6], closure_2.paths), "MembersPrune", obj);
    };
    obj.variant = "destructive";
    items.push(obj);
  }
  return items;
};
