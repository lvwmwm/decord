// Module ID: 12792
// Function ID: 98006
// Name: NsfwGateGuildSettingsActionSheet
// Dependencies: []
// Exports: default

// Module 12792 (NsfwGateGuildSettingsActionSheet)
importAll(dependencyMap[0]);
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/age_gate/native/components/NsfwGateGuildSettingsActionSheet.tsx");

export default function NsfwGateGuildSettingsActionSheet(guild) {
  guild = guild.guild;
  const arg1 = guild;
  let obj = arg1(dependencyMap[2]);
  const messageRequestPrivacyOption = obj.useMessageRequestPrivacyOption({ guild });
  obj = {};
  obj = { title: guild.name };
  obj.header = callback(arg1(dependencyMap[4]).BottomSheetTitleHeader, obj);
  const obj1 = { hasIcons: false };
  const obj2 = {};
  const intl = arg1(dependencyMap[6]).intl;
  obj2.label = intl.string(arg1(dependencyMap[6]).t.h850Ss);
  obj2.onPress = function onPress() {
    callback(closure_2[7]).hideActionSheet();
    const obj = callback(closure_2[7]);
    callback(closure_2[8]).open(guild.id);
  };
  const items = [callback(arg1(dependencyMap[5]).ActionSheetRow, obj2), callback(arg1(dependencyMap[9]).RestrictedGuildPrivacyOption, { guild }), messageRequestPrivacyOption, ];
  const obj3 = { variant: "danger" };
  const intl2 = arg1(dependencyMap[6]).intl;
  obj3.label = intl2.string(arg1(dependencyMap[6]).t.J2TBi3);
  obj3.onPress = function onPress() {
    return guild(closure_2[9]).handleLeaveServer(guild);
  };
  items[3] = callback(arg1(dependencyMap[5]).ActionSheetRow, obj3);
  obj1.children = items;
  obj.children = callback2(arg1(dependencyMap[5]).ActionSheetRow.Group, obj1);
  return callback(arg1(dependencyMap[3]).ActionSheet, obj);
};
