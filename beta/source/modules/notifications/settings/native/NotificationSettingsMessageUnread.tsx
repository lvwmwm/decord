// Module ID: 9623
// Function ID: 9624
// Name: NotificationSettingsMessageUnread
// Dependencies: [19, 17, 21, 4836, 576, 9617, 4832, 1115, 5435, 9624, 9615, 4800, 9626, 1981, 9607, 9628, 2]
// Exports: NotificationSettingsChannelMessageUnread, NotificationSettingsGuildMessageUnread

// Module 9623 (NotificationSettingsMessageUnread)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import Pressables from "Pressables" /* 5435 */;
import notificationSettingsPresetOptionUtils from "notificationSettingsPresetOptionUtils" /* 9617 */;
import NotificationSettingsMockChannelsDefault from "NotificationSettingsMockChannels" /* 9624 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
let obj2;
function NotificationSettingsMessageUnread(onPress) {
  let Text4;
  let intl;
  let intl2;
  let items;
  let items1;
  let items2;
  let items3;
  let obj11;
  let obj7;
  let str;
  let closure_0 = onPress;
  const tmp = closure_6();
  const obj = notificationSettingsPresetOptionUtils;
  const unreadSelectOptions = obj.getUnreadSelectOptions();
  const found = unreadSelectOptions.find((value) => value.value === setting.setting);
  const obj2 = { style: onPress.style, children: items1 };
  const obj3 = { style: tmp.header, children: items };
  const obj4 = { variant: "text-sm/semibold", color: "text-default", style: tmp.headerTitle, children: intl.string(intl4.t.Tqd1Af) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items = [React3(Text, obj4), ];
  const obj5 = { variant: "text-xs/semibold", color: "text-default", children: intl2.string(intl4.t.RpQgm5) };
  const Text2 = Text_Text.Text;
  intl2 = intl4.intl;
  items[1] = React3(Text2, obj5);
  items1 = [hasOwnProperty(View, obj3), ];
  const obj6 = { onPress: onPress.onCustomize, activeOpacity: 0.6, children: hasOwnProperty(View, obj7) };
  obj7 = { style: tmp.card, children: items2 };
  const PressableOpacity = Pressables.PressableOpacity;
  items2 = [, , ];
  const obj8 = { unreadSetting: onPress.setting };
  items2[0] = React3(NotificationSettingsMockChannelsDefault, obj8);
  const obj9 = { variant: "text-sm/medium", style: tmp.label, children: str };
  str = undefined;
  const Text3 = Text_Text.Text;
  if (found != null) {
    str = found.label;
  }
  if (str == null) {
    str = "unset";
  }
  items2[1] = React3(Text3, obj9);
  const obj10 = { onPress: onPress.onCustomize, children: hasOwnProperty(Text4, obj11) };
  const PressableOpacity2 = tmp2(5435).PressableOpacity;
  obj11 = { variant: "text-sm/semibold", style: tmp.cta, color: "text-brand", children: items3 };
  Text4 = tmp2(4832).Text;
  const intl3 = tmp2(1115).intl;
  items3 = [intl3.string(intl4.t.yxiV9W), " "];
  items2[2] = React3(PressableOpacity2, obj10);
  items1[1] = React3(PressableOpacity, obj6);
  return hasOwnProperty(View, obj2);
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { card: obj2, cta: { marginTop: 4, textAlign: "center" }, label: { marginTop: 8, textAlign: "center" }, header: { marginBottom: 8 }, headerTitle: { marginBottom: 4 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: 20, borderWidth: 1, padding: 14 };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageUnread.tsx");

export const NotificationSettingsGuildMessageUnread = function NotificationSettingsGuildMessageUnread(style) {
  let obj2;
  _require = style;
  let obj = {
    style: style.style,
    setting: obj2.useGuildPresetSettings(style.guildId).unread,
    onCustomize() {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { guildId: style.guildId };
      obj.openLazy(asyncRequire(9626, dependencyMap.paths), "MessageUnreadActionSheet", obj2);
    }
  };
  obj2 = require("notificationSettingsGuildFlagUtils");
  return closure_4(NotificationSettingsMessageUnread, obj);
};
export const NotificationSettingsChannelMessageUnread = function NotificationSettingsChannelMessageUnread(style) {
  let obj2;
  _require = style;
  let obj = {
    style: style.style,
    setting: obj2.useChannelPresetSettings(style.channel).unread,
    onCustomize() {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { channel: style.channel };
      obj.openLazy(asyncRequire(9628, dependencyMap.paths), "MessageUnreadActionSheet", obj2);
    }
  };
  obj2 = require("notficationSettingsChannelFlagUtils");
  return closure_4(NotificationSettingsMessageUnread, obj);
};
