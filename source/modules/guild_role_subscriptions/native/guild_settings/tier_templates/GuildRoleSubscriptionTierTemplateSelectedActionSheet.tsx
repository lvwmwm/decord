// Module ID: 16339
// Function ID: 126071
// Name: GuildRoleSubscriptionTierTemplateSelectedActionSheet
// Dependencies: []
// Exports: default

// Module 16339 (GuildRoleSubscriptionTierTemplateSelectedActionSheet)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const ContentDismissActionType = arg1(dependencyMap[2]).ContentDismissActionType;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH, padding: 24 };
obj.container = obj;
const tmp3 = arg1(dependencyMap[3]);
obj.button = { borderRadius: importDefault(dependencyMap[5]).radii.xs };
let closure_7 = obj.createStyles(obj);
const obj1 = { borderRadius: importDefault(dependencyMap[5]).radii.xs };
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateSelectedActionSheet.tsx");

export default function GuildRoleSubscriptionTierTemplateSelectedActionSheet(markAsDismissed) {
  const arg1 = markAsDismissed.markAsDismissed;
  const tmp = callback3();
  let obj = {
    backdropOpacity: 0.8,
    onDismiss() {
      return markAsDismissed(constants.UNKNOWN);
    }
  };
  obj = { style: tmp.container };
  obj = { contentContainerStyle: { paddingBottom: importDefault(dependencyMap[6])().bottom } };
  const obj1 = {};
  const intl = arg1(dependencyMap[10]).intl;
  obj1.children = intl.string(arg1(dependencyMap[10]).t.Y0PTc0);
  const items = [callback(arg1(dependencyMap[9]).Text, obj1), callback(arg1(dependencyMap[11]).Spacer, { size: 12 }), , , ];
  const obj2 = {};
  const intl2 = arg1(dependencyMap[10]).intl;
  obj2.children = intl2.string(arg1(dependencyMap[10]).t.YSI/1/);
  items[2] = callback(arg1(dependencyMap[9]).Text, obj2);
  items[3] = callback(arg1(dependencyMap[11]).Spacer, { size: 48 });
  const obj3 = {};
  const intl3 = arg1(dependencyMap[10]).intl;
  obj3.text = intl3.string(arg1(dependencyMap[10]).t.MhldXX);
  obj3.pillStyle = tmp.button;
  obj3.onPress = function onPress() {
    return markAsDismissed(constants.UNKNOWN);
  };
  obj3.grow = true;
  items[4] = callback(arg1(dependencyMap[12]).BaseTextButton, obj3);
  obj.children = items;
  obj.children = callback2(arg1(dependencyMap[8]).BottomSheetScrollView, obj);
  obj.children = callback(View, obj);
  return callback(arg1(dependencyMap[7]).BottomSheet, obj);
};
