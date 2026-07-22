// Module ID: 14950
// Function ID: 112550
// Name: GuildRoleSubscriptionsUpsellActionSheet
// Dependencies: []
// Exports: default

// Module 14950 (GuildRoleSubscriptionsUpsellActionSheet)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const GuildSettingsSections = arg1(dependencyMap[2]).GuildSettingsSections;
const ContentDismissActionType = arg1(dependencyMap[3]).ContentDismissActionType;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
let closure_8 = arg1(dependencyMap[5]).createStyles({ title: { MINIMAL: true, currentScreenId: null }, description: { "Null": 16, "Null": 24, "Null": "center" }, dismissButton: { marginTop: 4 } });
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/guild_role_subscriptions/native/guild_sidebar/GuildRoleSubscriptionsUpsellActionSheet.tsx");

export default function GuildRoleSubscriptionsUpsellActionSheet(arg0) {
  ({ guildId: closure_0, markAsDismissed: closure_1 } = arg0);
  const tmp = callback3();
  let obj = {
    startExpanded: true,
    onDismiss() {
      return callback(constants2.UNKNOWN);
    }
  };
  obj = { source: importDefault(dependencyMap[8]) };
  const items = [callback(importDefault(dependencyMap[7]), obj), , , , ];
  obj = { alignSelf: 24, justifyContent: 24, alignItems: null, backgroundColor: "f15a8eea867ca31909b0a1cf49c6c7d8", style: tmp.title };
  const intl = arg1(dependencyMap[10]).intl;
  obj.children = intl.string(arg1(dependencyMap[10]).t.C0m4rQ);
  items[1] = callback(arg1(dependencyMap[9]).Text, obj);
  const obj1 = { style: tmp.description };
  const intl2 = arg1(dependencyMap[10]).intl;
  obj1.children = intl2.string(arg1(dependencyMap[10]).t.zOHfEX);
  items[2] = callback(arg1(dependencyMap[9]).Text, obj1);
  const obj2 = {
    onPress() {
      callback(constants2.UNKNOWN);
      callback(closure_2[12]).open(closure_0, constants.ROLE_SUBSCRIPTIONS);
    }
  };
  const intl3 = arg1(dependencyMap[10]).intl;
  obj2.text = intl3.string(arg1(dependencyMap[10]).t.OgQQbG);
  items[3] = callback(arg1(dependencyMap[11]).Button, obj2);
  const obj3 = { style: tmp.dismissButton };
  const obj4 = {
    onPress() {
      return callback(constants2.UNKNOWN);
    }
  };
  const intl4 = arg1(dependencyMap[10]).intl;
  obj4.text = intl4.string(arg1(dependencyMap[10]).t.WAI6xu);
  obj4.variant = "secondary";
  obj3.children = callback(arg1(dependencyMap[11]).Button, obj4);
  items[4] = callback(View, obj3);
  obj.children = items;
  return callback2(arg1(dependencyMap[6]).BottomSheet, obj);
};
