// Module ID: 10302
// Function ID: 79524
// Name: NotificationSettingsMessageUnread
// Dependencies: [31, 27, 33, 4130, 689, 10296, 4126, 1212, 4660, 10303, 10294, 4098, 10305, 1934, 10288, 10307, 2]
// Exports: NotificationSettingsChannelMessageUnread, NotificationSettingsGuildMessageUnread

// Module 10302 (NotificationSettingsMessageUnread)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
function NotificationSettingsMessageUnread(onPress) {
  const _require = onPress;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = _require(10296);
  const unreadSelectOptions = obj.getUnreadSelectOptions();
  const found = unreadSelectOptions.find((value) => value.value === onPress.setting);
  obj = { style: onPress.style };
  obj = { style: tmp.header };
  const obj1 = { variant: "text-sm/semibold", color: "text-default", style: tmp.headerTitle };
  const intl = _require(1212).intl;
  obj1.children = intl.string(_require(1212).t.Tqd1Af);
  const items = [callback(_require(4126).Text, obj1), ];
  const obj2 = { variant: "text-xs/semibold", color: "text-default" };
  const intl2 = _require(1212).intl;
  obj2.children = intl2.string(_require(1212).t.RpQgm5);
  items[1] = callback(_require(4126).Text, obj2);
  obj.children = items;
  const items1 = [callback2(View, obj), ];
  const obj3 = { onPress: onPress.onCustomize, activeOpacity: 0.6 };
  const obj4 = { style: tmp.card };
  const items2 = [callback(importDefault(10303), { unreadSetting: onPress.setting }), , ];
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
  items2[1] = callback(_require(4126).Text, obj6);
  const obj7 = { onPress: onPress.onCustomize };
  const obj8 = { variant: "text-sm/semibold", style: tmp.cta, color: "text-brand" };
  const intl3 = _require(1212).intl;
  const items3 = [intl3.string(_require(1212).t.yxiV9W), " "];
  obj8.children = items3;
  obj7.children = callback2(_require(4126).Text, obj8);
  items2[2] = callback(_require(4660).PressableOpacity, obj7);
  obj4.children = items2;
  obj3.children = callback2(View, obj4);
  items1[1] = callback(_require(4660).PressableOpacity, obj3);
  obj.children = items1;
  return callback2(View, obj);
}
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE, borderRadius: 20, borderWidth: 1, padding: 14 };
_createForOfIteratorHelperLoose.card = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.cta = { marginTop: 4, textAlign: "center" };
_createForOfIteratorHelperLoose.label = { marginTop: 8, textAlign: "center" };
_createForOfIteratorHelperLoose.header = { marginBottom: 8 };
_createForOfIteratorHelperLoose.headerTitle = { marginBottom: 4 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageUnread.tsx");

export const NotificationSettingsGuildMessageUnread = function NotificationSettingsGuildMessageUnread(style) {
  const _require = style;
  let obj = {
    style: style.style,
    setting: _require(10294).useGuildPresetSettings(style.guildId).unread,
    onCustomize() {
      let obj = outer1_1(outer1_2[11]);
      obj = { guildId: style.guildId };
      obj.openLazy(style(outer1_2[13])(outer1_2[12], outer1_2.paths), "MessageUnreadActionSheet", obj);
    }
  };
  return callback(NotificationSettingsMessageUnread, obj);
};
export const NotificationSettingsChannelMessageUnread = function NotificationSettingsChannelMessageUnread(style) {
  const _require = style;
  let obj = {
    style: style.style,
    setting: _require(10288).useChannelPresetSettings(style.channel).unread,
    onCustomize() {
      let obj = outer1_1(outer1_2[11]);
      obj = { channel: style.channel };
      obj.openLazy(style(outer1_2[13])(outer1_2[15], outer1_2.paths), "MessageUnreadActionSheet", obj);
    }
  };
  return callback(NotificationSettingsMessageUnread, obj);
};
