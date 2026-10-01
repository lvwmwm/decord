// Module ID: 9616
// Function ID: 9617
// Name: NotificationSettingsMessageNotification
// Dependencies: [19, 17, 21, 4836, 576, 9617, 4832, 1115, 5435, 9618, 9615, 4800, 9620, 1981, 9607, 9622, 2]
// Exports: NotificationSettingsChannelMessageNotification, NotificationSettingsGuildMessageNotification

// Module 9616 (NotificationSettingsMessageNotification)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl5 from "intl" /* 1115 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import notificationSettingsPresetOptionUtils from "notificationSettingsPresetOptionUtils" /* 9617 */;
import NotificationSettingsMockMessageDefault from "NotificationSettingsMockMessage" /* 9618 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
let obj2;
class NotificationSettingsMessageNotification {
  constructor(onPress) {
    let Text4;
    let intl;
    let intl4;
    let items;
    let items1;
    let items2;
    let obj10;
    let obj6;
    let str;
    let stringResult;
    let closure_0 = onPress;
    const tmp = closure_6();
    const obj = notificationSettingsPresetOptionUtils;
    const pushNotificationSelectOptions = obj.getPushNotificationSelectOptions();
    const found = pushNotificationSelectOptions.find((value) => value.value === setting.setting);
    const obj2 = { style: onPress.style, children: items1 };
    const obj3 = { style: tmp.header, children: items };
    const obj4 = { variant: "text-sm/semibold", color: "text-default", style: tmp.headerTitle, children: intl.string(intl5.t["1m22ZB"]) };
    const Text = Text_Text.Text;
    intl = intl5.intl;
    items = [React3(Text, obj4), ];
    const Text2 = Text_Text.Text;
    if ("guild" === onPress.context) {
      const intl3 = tmp2(1115).intl;
      stringResult = intl3.string(tmp2(1115).t["4bP2ZZ"]);
    } else {
      const intl2 = tmp2(1115).intl;
      stringResult = intl2.string(tmp2(1115).t["R1j5+4"]);
    }
    items[1] = React3(Text2, { variant: "text-xs/semibold", color: "text-default", children: stringResult });
    items1 = [hasOwnProperty(View, obj3), ];
    const obj5 = { onPress: onPress.onCustomize, activeOpacity: 0.6, children: hasOwnProperty(View, obj6) };
    obj6 = { style: tmp.card, children: items2 };
    const PressableOpacity = tmp2(5435).PressableOpacity;
    items2 = [, , ];
    const obj7 = { notificationSetting: onPress.setting };
    items2[0] = React3(NotificationSettingsMockMessageDefault, obj7);
    const obj8 = { variant: "text-sm/medium", style: tmp.label, children: str };
    str = undefined;
    const Text3 = tmp2(4832).Text;
    if (found != null) {
      str = found.label;
    }
    if (str == null) {
      str = "unset";
    }
    items2[1] = React3(Text3, obj8);
    const obj9 = { onPress: onPress.onCustomize, children: React3(Text4, obj10) };
    const PressableOpacity2 = tmp2(5435).PressableOpacity;
    obj10 = { variant: "text-sm/semibold", style: tmp.cta, color: "text-brand", children: intl4.string(intl5.t.yxiV9W) };
    Text4 = tmp2(4832).Text;
    intl4 = tmp2(1115).intl;
    items2[2] = React3(PressableOpacity2, obj9);
    items1[1] = React3(PressableOpacity, obj5);
    return hasOwnProperty(View, obj2);
  }
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { card: obj2, cta: { textAlign: "center", marginTop: 4 }, label: { textAlign: "center", marginTop: 8 }, header: { marginBottom: 8 }, headerTitle: { marginBottom: 4 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: 20, borderWidth: 1, padding: 14 };
const metroRequire = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageNotification.tsx");

export default NotificationSettingsMessageNotification;
export const NotificationSettingsGuildMessageNotification = function NotificationSettingsGuildMessageNotification(style) {
  let obj2;
  _require = style;
  let obj = {
    context: "guild",
    style: style.style,
    setting: obj2.useGuildPresetSettings(style.guildId).notification,
    onCustomize() {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { guildId: style.guildId };
      obj.openLazy(asyncRequire(9620, dependencyMap.paths), "MessageNotificationGuildActionSheet", obj2);
    }
  };
  obj2 = require("notificationSettingsGuildFlagUtils");
  return closure_4(NotificationSettingsMessageNotification, obj);
};
export const NotificationSettingsChannelMessageNotification = function NotificationSettingsChannelMessageNotification(style) {
  let obj2;
  _require = style;
  let obj = {
    context: "channel",
    style: style.style,
    setting: obj2.useChannelPresetSettings(style.channel).notification,
    onCustomize() {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { channel: style.channel };
      obj.openLazy(asyncRequire(9622, dependencyMap.paths), "MessageNotificationChannelActionSheet", obj2);
    }
  };
  obj2 = require("notficationSettingsChannelFlagUtils");
  return closure_4(NotificationSettingsMessageNotification, obj);
};
