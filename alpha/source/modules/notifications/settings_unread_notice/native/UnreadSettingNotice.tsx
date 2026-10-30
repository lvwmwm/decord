// Module ID: 11316
// Function ID: 11317
// Name: UnreadSettingNotice
// Dependencies: [19, 17, 1082, 21, 5009, 575, 11317, 5619, 1114, 6974, 11318, 2]
// Exports: default

// Module 11316 (UnreadSettingNotice)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1082 */;
import UnreadSettingNoticeImpressionTrackingDefault from "UnreadSettingNoticeImpressionTracking" /* 11317 */;
import updateChannelUnreadSettingsDefault from "updateChannelUnreadSettings" /* 11318 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
let closure_4 = UserSettingsConstants.ChannelNotificationSettingsFlags;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { content: obj2, informations: { flex: 1 }, actions: { display: "flex", flexDirection: "row", alignItems: "center", marginLeft: 16 }, inlineTextWithIcon: { display: "flex", flexDirection: "row", alignItems: "center" } };
obj2 = { display: "flex", flexDirection: "row", paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/notifications/settings_unread_notice/native/UnreadSettingNotice.tsx");

export default function UnreadSettingNoticeConnected(channel) {
  let PressableOpacity;
  let Text;
  let Text2;
  let intl;
  let intl2;
  let items;
  let obj4;
  let obj6;
  let obj7;
  _require = channel;
  const tmp = closure_7();
  const obj = { style: tmp.content, children: items };
  items = [, , ];
  const obj2 = { id: channel.channel.id };
  items[0] = closure_5(UnreadSettingNoticeImpressionTrackingDefault, obj2);
  const obj3 = { style: tmp.informations, children: closure_5(Text, obj4) };
  obj4 = { variant: "text-md/semibold", children: intl.string(require("intl").t.i4xQ5o) };
  Text = require("Text/Text").Text;
  intl = require("intl").intl;
  items[1] = closure_5(View, obj3);
  const obj5 = { style: tmp.actions, children: closure_5(PressableOpacity, obj6) };
  obj6 = {
    accessibilityRole: "button",
    style: tmp.inlineTextWithIcon,
    onPress() {
      updateChannelUnreadSettingsDefault(channel.channel.guild_id, channel.channel.id, constants.UNREADS_ONLY_MENTIONS);
      channel.clearUnreadsNotice();
    },
    children: closure_5(Text2, obj7)
  };
  PressableOpacity = require("Pressables").PressableOpacity;
  obj7 = { variant: "text-xs/medium", color: "text-link", children: intl2.string(require("intl").t.KyUKhT) };
  Text2 = require("Text/Text").Text;
  intl2 = require("intl").intl;
  items[2] = closure_5(View, obj5);
  return closure_6(View, obj);
};
