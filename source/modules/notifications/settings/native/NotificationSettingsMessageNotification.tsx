// Module ID: 10324
// Function ID: 79691
// Name: NotificationSettingsMessageNotification
// Dependencies: [31, 27, 33, 4130, 689, 10325, 4126, 1212, 4660, 10326, 10323, 4098, 10328, 1934, 10317, 10330, 2]
// Exports: NotificationSettingsChannelMessageNotification, NotificationSettingsGuildMessageNotification

// Module 10324 (NotificationSettingsMessageNotification)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
class NotificationSettingsMessageNotification {
  constructor(arg0) {
    closure_0 = global;
    tmp = c6();
    obj = require("getPushNotificationSelectOptions");
    pushNotificationSelectOptions = obj.getPushNotificationSelectOptions();
    found = pushNotificationSelectOptions.find((value) => value.value === onPress.setting);
    obj = { style: global.style };
    obj1 = { style: tmp.header };
    tmp3 = jsxs;
    tmp4 = View;
    tmp5 = jsxs;
    tmp6 = View;
    obj2 = { variant: "text-sm/semibold", color: "text-default" };
    obj2.style = tmp.headerTitle;
    intl = require("getSystemLocale").intl;
    obj2.children = intl.string(require("getSystemLocale").t["1m22ZB"]);
    items = [, ];
    items[0] = jsx(require("Text").Text, obj2);
    tmp7 = jsx;
    obj3 = { variant: "text-xs/semibold", color: "text-default" };
    if ("guild" === global.context) {
      tmp11 = closure_0;
      tmp12 = closure_2;
      intl3 = require("getSystemLocale").intl;
      stringResult = intl3.string(require("getSystemLocale").t["4bP2ZZ"]);
    } else {
      tmp8 = closure_0;
      tmp9 = closure_2;
      intl2 = require("getSystemLocale").intl;
      stringResult = intl2.string(require("getSystemLocale").t["R1j5+4"]);
    }
    obj3.children = stringResult;
    items[1] = tmp7(require("Text").Text, obj3);
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
    items2[0] = jsx(require("NotificationSettingsMockMessage"), obj6);
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
    items2[1] = tmp16(require("Text").Text, obj7);
    obj8 = { onPress: global.onCustomize };
    obj9 = { variant: "text-sm/semibold", style: null, color: "text-brand" };
    obj9.style = tmp.cta;
    intl4 = require("getSystemLocale").intl;
    obj9.children = intl4.string(require("getSystemLocale").t.yxiV9W);
    obj8.children = jsx(require("Text").Text, obj9);
    items2[2] = jsx(require("PressableBase").PressableOpacity, obj8);
    obj5.children = items2;
    obj4.children = tmp14(tmp15, obj5);
    items1[1] = tmp13(require("PressableBase").PressableOpacity, obj4);
    obj.children = items1;
    return tmp3(tmp4, obj);
  }
}
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE, borderRadius: 20, borderWidth: 1, padding: 14 };
_createForOfIteratorHelperLoose.card = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.cta = { textAlign: "center", marginTop: 4 };
_createForOfIteratorHelperLoose.label = { textAlign: "center", marginTop: 8 };
_createForOfIteratorHelperLoose.header = { marginBottom: 8 };
_createForOfIteratorHelperLoose.headerTitle = { marginBottom: 4 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageNotification.tsx");

export default NotificationSettingsMessageNotification;
export const NotificationSettingsGuildMessageNotification = function NotificationSettingsGuildMessageNotification(style) {
  const _require = style;
  let obj = {
    context: "guild",
    style: style.style,
    setting: _require(10323).useGuildPresetSettings(style.guildId).notification,
    onCustomize() {
      let obj = outer1_1(outer1_2[11]);
      obj = { guildId: style.guildId };
      obj.openLazy(style(outer1_2[13])(outer1_2[12], outer1_2.paths), "MessageNotificationGuildActionSheet", obj);
    }
  };
  return callback(NotificationSettingsMessageNotification, obj);
};
export const NotificationSettingsChannelMessageNotification = function NotificationSettingsChannelMessageNotification(style) {
  const _require = style;
  let obj = {
    context: "channel",
    style: style.style,
    setting: _require(10317).useChannelPresetSettings(style.channel).notification,
    onCustomize() {
      let obj = outer1_1(outer1_2[11]);
      obj = { channel: style.channel };
      obj.openLazy(style(outer1_2[13])(outer1_2[15], outer1_2.paths), "MessageNotificationChannelActionSheet", obj);
    }
  };
  return callback(NotificationSettingsMessageNotification, obj);
};
