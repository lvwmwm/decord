// Module ID: 10280
// Function ID: 79403
// Name: NotificationSettingsMessageNotificationActionSheet
// Dependencies: []
// Exports: default

// Module 10280 (NotificationSettingsMessageNotificationActionSheet)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const UserNotificationSettings = arg1(dependencyMap[2]).UserNotificationSettings;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWEST };
obj.sheet = obj;
obj.header = { "Null": null, "Null": null };
const tmp3 = arg1(dependencyMap[3]);
obj.content = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWER, padding: 16 };
obj.form = {};
let closure_7 = obj.createStyles(obj);
const obj1 = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWER, padding: 16 };
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageNotificationActionSheet.tsx");

export default function NotificationSettingsMessageNotificationActionSheet(defaultValue) {
  const tmp = callback3();
  let obj = { startExpanded: true, backgroundStyles: tmp.sheet };
  obj = { style: tmp.header };
  obj = { notificationSetting: defaultValue.value };
  obj.children = callback(importDefault(dependencyMap[7]), obj);
  const items = [callback(View, obj), ];
  const obj1 = { style: tmp.content };
  const obj2 = { variant: "text-sm/semibold" };
  const intl = arg1(dependencyMap[9]).intl;
  obj2.children = intl.string(arg1(dependencyMap[9]).t.1m22ZB);
  const items1 = [callback(arg1(dependencyMap[8]).Text, obj2), callback(arg1(dependencyMap[8]).Text, { INTEGRATION_CREATE: true, ConstraintReasonCode: true }), ];
  const obj3 = { style: tmp.form };
  const obj4 = { defaultValue: defaultValue.value, onChange: defaultValue.onChange, hasIcons: false };
  const obj5 = {};
  const intl2 = arg1(dependencyMap[9]).intl;
  obj5.label = intl2.string(arg1(dependencyMap[9]).t.HVah/3);
  obj5.value = UserNotificationSettings.ALL_MESSAGES;
  obj5.subLabel = defaultValue.allMessagesSubLabel;
  const items2 = [callback(arg1(dependencyMap[11]).TableRadioRow, obj5), , ];
  const obj6 = {};
  const intl3 = arg1(dependencyMap[9]).intl;
  obj6.label = intl3.string(arg1(dependencyMap[9]).t.tu+ZWJ);
  obj6.value = UserNotificationSettings.ONLY_MENTIONS;
  items2[1] = callback(arg1(dependencyMap[11]).TableRadioRow, obj6);
  const obj7 = {};
  const intl4 = arg1(dependencyMap[9]).intl;
  obj7.label = intl4.string(arg1(dependencyMap[9]).t.X4wWUi);
  obj7.value = UserNotificationSettings.NO_MESSAGES;
  items2[2] = callback(arg1(dependencyMap[11]).TableRadioRow, obj7);
  obj4.children = items2;
  obj3.children = callback2(arg1(dependencyMap[10]).TableRadioGroup, obj4);
  items1[2] = callback(View, obj3);
  obj1.children = items1;
  items[1] = callback2(View, obj1);
  obj.children = items;
  return callback2(arg1(dependencyMap[6]).BottomSheet, obj);
};
