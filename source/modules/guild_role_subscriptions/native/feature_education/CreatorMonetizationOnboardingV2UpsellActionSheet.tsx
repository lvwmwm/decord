// Module ID: 14937
// Function ID: 112462
// Name: CreatorMonetizationOnboardingV2UpsellActionSheet
// Dependencies: []
// Exports: default

// Module 14937 (CreatorMonetizationOnboardingV2UpsellActionSheet)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const GuildSettingsSections = arg1(dependencyMap[2]).GuildSettingsSections;
const ContentDismissActionType = arg1(dependencyMap[3]).ContentDismissActionType;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
let closure_8 = arg1(dependencyMap[5]).createStyles({ container: { borderTopWidth: "skoro rok", borderTopColor: "skoro p\u0159ed rokem", marginTop: "skoro za rok" }, title: { marginBottom: 6 }, description: { marginBottom: 24 }, image: {}, dismissButton: { marginTop: 4 } });
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/guild_role_subscriptions/native/feature_education/CreatorMonetizationOnboardingV2UpsellActionSheet.tsx");

export default function CreatorMonetizationOnboardingV2UpsellActionSheet(arg0) {
  ({ guildId: closure_0, markAsDismissed: closure_1 } = arg0);
  const tmp = callback3();
  let obj = {
    startExpanded: true,
    onDismiss() {
      return callback(constants2.UNKNOWN);
    }
  };
  obj = { style: tmp.container };
  obj = { 0: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000032834862514393, 9223372036854775807: 11753968623045495000000000000000000000000, 0: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008935732565137, -9223372036854775808: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000043458473819206, style: tmp.title };
  const intl = arg1(dependencyMap[8]).intl;
  obj.children = intl.string(arg1(dependencyMap[8]).t.v+Jm6X);
  const items = [callback(arg1(dependencyMap[7]).Text, obj), , , , ];
  const obj1 = { style: tmp.description };
  const intl2 = arg1(dependencyMap[8]).intl;
  obj1.children = intl2.string(arg1(dependencyMap[8]).t.kUUFbG);
  items[1] = callback(arg1(dependencyMap[7]).Text, obj1);
  const obj2 = { style: tmp.image, resizeMode: "contain", source: importDefault(dependencyMap[10]) };
  items[2] = callback(importDefault(dependencyMap[9]), obj2);
  const obj3 = {
    onPress() {
      callback(constants2.UNKNOWN);
      callback(closure_2[12]).open(closure_0, constants.ROLE_SUBSCRIPTIONS);
    }
  };
  const intl3 = arg1(dependencyMap[8]).intl;
  obj3.text = intl3.string(arg1(dependencyMap[8]).t.OgQQbG);
  items[3] = callback(arg1(dependencyMap[11]).Button, obj3);
  const obj4 = { style: tmp.dismissButton };
  const obj5 = {
    onPress() {
      return callback(constants2.UNKNOWN);
    }
  };
  const intl4 = arg1(dependencyMap[8]).intl;
  obj5.text = intl4.string(arg1(dependencyMap[8]).t.WAI6xu);
  obj5.variant = "secondary";
  obj4.children = callback(arg1(dependencyMap[11]).Button, obj5);
  items[4] = callback(View, obj4);
  obj.children = items;
  obj.children = callback2(View, obj);
  return callback(arg1(dependencyMap[6]).BottomSheet, obj);
};
