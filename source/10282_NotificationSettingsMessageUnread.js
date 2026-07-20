// Module ID: 10282
// Function ID: 79408
// Name: NotificationSettingsMessageUnread
// Dependencies: []
// Exports: NotificationSettingsChannelMessageUnread, NotificationSettingsGuildMessageUnread

// Module 10282 (NotificationSettingsMessageUnread)
function NotificationSettingsMessageUnread(onPress) {
  const arg1 = onPress;
  const tmp = callback3();
  let obj = arg1(dependencyMap[5]);
  const unreadSelectOptions = obj.getUnreadSelectOptions();
  const found = unreadSelectOptions.find((value) => value.value === value.setting);
  obj = { style: onPress.style };
  obj = { style: tmp.header };
  const obj1 = { INTEGRATION_CREATE: null, ConstraintReasonCode: null, style: tmp.headerTitle };
  const intl = arg1(dependencyMap[7]).intl;
  obj1.children = intl.string(arg1(dependencyMap[7]).t.Tqd1Af);
  const items = [callback(arg1(dependencyMap[6]).Text, obj1), ];
  const obj2 = { INTEGRATION_CREATE: 16, ConstraintReasonCode: true };
  const intl2 = arg1(dependencyMap[7]).intl;
  obj2.children = intl2.string(arg1(dependencyMap[7]).t.RpQgm5);
  items[1] = callback(arg1(dependencyMap[6]).Text, obj2);
  obj.children = items;
  const items1 = [callback2(View, obj), ];
  const obj3 = { onPress: onPress.onCustomize, activeOpacity: 0.6 };
  const obj4 = { style: tmp.card };
  const items2 = [callback(importDefault(dependencyMap[9]), { unreadSetting: onPress.setting }), , ];
  const obj6 = { variant: "text-sm/medium", style: tmp.label };
  let label;
  if (null != found) {
    label = found.label;
  }
  let str = "unset";
  if (null != label) {
    str = label;
  }
  obj6.children = str;
  items2[1] = callback(arg1(dependencyMap[6]).Text, obj6);
  const obj7 = { onPress: onPress.onCustomize };
  const obj8 = { style: tmp.cta };
  const intl3 = arg1(dependencyMap[7]).intl;
  const items3 = [intl3.string(arg1(dependencyMap[7]).t.yxiV9W), " "];
  obj8.children = items3;
  obj7.children = callback2(arg1(dependencyMap[6]).Text, obj8);
  items2[2] = callback(arg1(dependencyMap[8]).PressableOpacity, obj7);
  obj4.children = items2;
  obj3.children = callback2(View, obj4);
  items1[1] = callback(arg1(dependencyMap[8]).PressableOpacity, obj3);
  obj.children = items1;
  return callback2(View, obj);
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { ip: "Float16Array", op: "applicationCommandItem", w: true, h: true, nm: null, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWEST, borderColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_SUBTLE };
obj.card = obj;
obj.cta = { accessible: "audio", id: "architecture" };
obj.label = { accessible: null, id: null };
obj.header = { marginBottom: 8 };
obj.headerTitle = { marginBottom: 4 };
let closure_6 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageUnread.tsx");

export const NotificationSettingsGuildMessageUnread = function NotificationSettingsGuildMessageUnread(style) {
  const arg1 = style;
  const obj = {
    style: style.style,
    setting: arg1(dependencyMap[10]).useGuildPresetSettings(style.guildId).unread,
    onCustomize() {
      let obj = callback(paths[11]);
      obj = { guildId: arg0.guildId };
      obj.openLazy(arg0(paths[13])(paths[12], paths.paths), "MessageUnreadActionSheet", obj);
    }
  };
  return callback(NotificationSettingsMessageUnread, obj);
};
export const NotificationSettingsChannelMessageUnread = function NotificationSettingsChannelMessageUnread(style) {
  const arg1 = style;
  const obj = {
    style: style.style,
    setting: arg1(dependencyMap[14]).useChannelPresetSettings(style.channel).unread,
    onCustomize() {
      let obj = callback(paths[11]);
      obj = { channel: arg0.channel };
      obj.openLazy(arg0(paths[13])(paths[15], paths.paths), "MessageUnreadActionSheet", obj);
    }
  };
  return callback(NotificationSettingsMessageUnread, obj);
};
