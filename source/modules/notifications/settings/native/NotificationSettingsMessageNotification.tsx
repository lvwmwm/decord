// Module ID: 10275
// Function ID: 79384
// Name: NotificationSettingsMessageNotification
// Dependencies: []
// Exports: NotificationSettingsChannelMessageNotification, NotificationSettingsGuildMessageNotification

// Module 10275 (NotificationSettingsMessageNotification)
class NotificationSettingsMessageNotification {
  constructor(arg0) {
    arg1 = global;
    tmp = closure_6();
    obj = arg1(dependencyMap[5]);
    pushNotificationSelectOptions = obj.getPushNotificationSelectOptions();
    found = pushNotificationSelectOptions.find((value) => value.value === value.setting);
    obj = { style: global.style };
    obj1 = { style: tmp.header };
    tmp3 = jsxs;
    tmp4 = View;
    tmp5 = jsxs;
    tmp6 = View;
    obj2 = { INTEGRATION_CREATE: null, ConstraintReasonCode: null };
    obj2.style = tmp.headerTitle;
    intl = arg1(dependencyMap[7]).intl;
    obj2.children = intl.string(arg1(dependencyMap[7]).t.1m22ZB);
    items = [, ];
    items[0] = jsx(arg1(dependencyMap[6]).Text, obj2);
    tmp7 = jsx;
    obj3 = { INTEGRATION_CREATE: 16, ConstraintReasonCode: true };
    if ("guild" === global.context) {
      tmp11 = arg1;
      tmp12 = dependencyMap;
      intl3 = arg1(dependencyMap[7]).intl;
      stringResult = intl3.string(arg1(dependencyMap[7]).t.4bP2ZZ);
    } else {
      tmp8 = arg1;
      tmp9 = dependencyMap;
      intl2 = arg1(dependencyMap[7]).intl;
      stringResult = intl2.string(arg1(dependencyMap[7]).t.R1j5+4);
    }
    obj3.children = stringResult;
    items[1] = tmp7(arg1(dependencyMap[6]).Text, obj3);
    obj1.children = items;
    items1 = [, ];
    items1[0] = tmp5(tmp6, obj1);
    tmp13 = jsx;
    obj4 = { onPress: global.onCustomize, activeOpacity: 0.6 };
    obj5 = { style: tmp.card };
    tmp14 = jsxs;
    tmp15 = View;
    obj6 = { notificationSetting: global.setting };
    items2 = [, , ];
    items2[0] = jsx(importDefault(dependencyMap[9]), obj6);
    tmp16 = jsx;
    obj7 = { variant: "text-sm/medium", style: tmp.label };
    label = undefined;
    if (null != found) {
      label = found.label;
    }
    str = "unset";
    if (null != label) {
      str = label;
    }
    obj7.children = str;
    items2[1] = tmp16(arg1(dependencyMap[6]).Text, obj7);
    obj8 = { onPress: global.onCustomize };
    obj9 = { style: tmp.cta };
    intl4 = arg1(dependencyMap[7]).intl;
    obj9.children = intl4.string(arg1(dependencyMap[7]).t.yxiV9W);
    obj8.children = jsx(arg1(dependencyMap[6]).Text, obj9);
    items2[2] = jsx(arg1(dependencyMap[8]).PressableOpacity, obj8);
    obj5.children = items2;
    obj4.children = tmp14(tmp15, obj5);
    items1[1] = tmp13(arg1(dependencyMap[8]).PressableOpacity, obj4);
    obj.children = items1;
    return tmp3(tmp4, obj);
  }
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { ip: "Float16Array", op: "applicationCommandItem", w: true, h: true, nm: null, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWEST, borderColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_SUBTLE };
obj.card = obj;
obj.cta = { concat: "/assets/design/components/Illustration/native/redesign/generated/images", now: 160 };
obj.label = { concat: -0.0014069081515246523, now: -0.0001058445630777106 };
obj.header = { marginBottom: 8 };
obj.headerTitle = { marginBottom: 4 };
let closure_6 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageNotification.tsx");

export default NotificationSettingsMessageNotification;
export const NotificationSettingsGuildMessageNotification = function NotificationSettingsGuildMessageNotification(style) {
  const arg1 = style;
  const obj = {
    context: "guild",
    style: style.style,
    setting: arg1(dependencyMap[10]).useGuildPresetSettings(style.guildId).notification,
    onCustomize() {
      let obj = callback(paths[11]);
      obj = { guildId: arg0.guildId };
      obj.openLazy(arg0(paths[13])(paths[12], paths.paths), "MessageNotificationGuildActionSheet", obj);
    }
  };
  return callback(NotificationSettingsMessageNotification, obj);
};
export const NotificationSettingsChannelMessageNotification = function NotificationSettingsChannelMessageNotification(style) {
  const arg1 = style;
  const obj = {
    context: "channel",
    style: style.style,
    setting: arg1(dependencyMap[14]).useChannelPresetSettings(style.channel).notification,
    onCustomize() {
      let obj = callback(paths[11]);
      obj = { channel: arg0.channel };
      obj.openLazy(arg0(paths[13])(paths[15], paths.paths), "MessageNotificationChannelActionSheet", obj);
    }
  };
  return callback(NotificationSettingsMessageNotification, obj);
};
