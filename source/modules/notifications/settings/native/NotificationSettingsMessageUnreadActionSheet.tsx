// Module ID: 10293
// Function ID: 79466
// Name: NotificationSettingsMessageUnreadActionSheet
// Dependencies: []
// Exports: default

// Module 10293 (NotificationSettingsMessageUnreadActionSheet)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const UnreadSetting = arg1(dependencyMap[2]).UnreadSetting;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWEST };
obj.sheet = obj;
obj.header = {};
const tmp3 = arg1(dependencyMap[3]);
obj.content = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWER, padding: 16 };
obj.form = {};
let closure_7 = obj.createStyles(obj);
const obj1 = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWER, padding: 16 };
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageUnreadActionSheet.tsx");

export default function NotificationSettingsMessageUnreadActionSheet(defaultValue) {
  const tmp = callback3();
  let obj = { startExpanded: true, backgroundStyles: tmp.sheet };
  obj = { style: tmp.header };
  obj = { unreadSetting: defaultValue.value };
  obj.children = callback(importDefault(dependencyMap[7]), obj);
  const items = [callback(View, obj), ];
  const obj1 = { style: tmp.content };
  const obj2 = { variant: "text-sm/semibold" };
  const intl = arg1(dependencyMap[9]).intl;
  obj2.children = intl.string(arg1(dependencyMap[9]).t.Tqd1Af);
  const items1 = [callback(arg1(dependencyMap[8]).Text, obj2), , ];
  const obj3 = { cachedAt: "center", edpbxy: "center" };
  const intl2 = arg1(dependencyMap[9]).intl;
  obj3.children = intl2.string(arg1(dependencyMap[9]).t.RpQgm5);
  items1[1] = callback(arg1(dependencyMap[8]).Text, obj3);
  const obj4 = { style: tmp.form };
  const obj5 = { defaultValue: defaultValue.value, onChange: defaultValue.onChange, hasIcons: false };
  const obj6 = {};
  const intl3 = arg1(dependencyMap[9]).intl;
  obj6.label = intl3.string(arg1(dependencyMap[9]).t.HVah/3);
  obj6.value = UnreadSetting.ALL_MESSAGES;
  const items2 = [callback(arg1(dependencyMap[11]).TableRadioRow, obj6), ];
  const obj7 = { subLabel: defaultValue.disabledMentionOnlyWithReason, disabled: null != defaultValue.disabledMentionOnlyWithReason };
  const intl4 = arg1(dependencyMap[9]).intl;
  obj7.label = intl4.string(arg1(dependencyMap[9]).t.tu+ZWJ);
  obj7.value = UnreadSetting.ONLY_MENTIONS;
  items2[1] = callback(arg1(dependencyMap[11]).TableRadioRow, obj7);
  obj5.children = items2;
  obj4.children = callback2(arg1(dependencyMap[10]).TableRadioGroup, obj5);
  items1[2] = callback(View, obj4);
  obj1.children = items1;
  items[1] = callback2(View, obj1);
  obj.children = items;
  return callback2(arg1(dependencyMap[6]).BottomSheet, obj);
};
