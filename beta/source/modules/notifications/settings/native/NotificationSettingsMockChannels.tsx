// Module ID: 9624
// Function ID: 9625
// Name: NotificationSettingsMockChannels
// Dependencies: [19, 17, 5018, 21, 4836, 576, 1115, 9625, 5394, 4832, 1177, 2]
// Exports: default

// Module 9624 (NotificationSettingsMockChannels)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import ReadStateConstants from "ReadStateConstants" /* 5018 */;
import TextIcon2 from "TextIcon" /* 5394 */;
import StaticChannelIndicatorDefault from "StaticChannelIndicator" /* 9625 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
const UnreadSetting = ReadStateConstants.UnreadSetting;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { card: obj2, channel: { display: "flex", flexDirection: "row", alignItems: "center", paddingVertical: 4, justifyContent: "space-between", paddingRight: 12 }, channelName: { display: "flex", flexDirection: "row", alignItems: "center" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, overflow: "hidden", borderRadius: 10, paddingVertical: 8 };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMockChannels.tsx");

export default function NotificationSettingsMockChannels(unreadSetting) {
  let closure_0;
  let intl;
  let intl2;
  let intl3;
  const tmp = closure_7();
  _require = tmp;
  let obj = { badged: true, unread: true, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES, name: intl.string(require("intl").t.EjLobP) };
  intl = require("intl").intl;
  let items = [obj, , ];
  let obj2 = { badged: false, unread: true, resolvedUnreadSetting: UnreadSetting.ONLY_MENTIONS, name: intl2.string(require("intl").t.Wgpwpp) };
  intl2 = require("intl").intl;
  items[1] = obj2;
  let obj3 = { badged: false, unread: false, resolvedUnreadSetting: UnreadSetting.ONLY_MENTIONS, name: intl3.string(require("intl").t.g9VImh) };
  intl3 = require("intl").intl;
  items[2] = obj3;
  const tmp2 = UnreadSetting;
  if (unreadSetting.unreadSetting === UnreadSetting.ALL_MESSAGES) {
    items[1].resolvedUnreadSetting = tmp2.ALL_MESSAGES;
  }
  let obj4 = {
    style: tmp.card,
    children: items.map((unread) => {
      let items;
      let items1;
      let str;
      let str2;
      const obj2 = { style: closure_0.channelName, children: items };
      items = [, , ];
      const obj = { style: closure_0.channel, children: items1 };
      const obj3 = { unread: unread.unread, resolvedUnreadSetting: unread.resolvedUnreadSetting };
      items[0] = hasOwnProperty(StaticChannelIndicatorDefault, obj3);
      const obj4 = { style: { marginLeft: 12 }, size: "xs", color: str };
      str = undefined;
      const TextIcon = TextIcon2.TextIcon;
      const tmp6 = UnreadSetting;
      if (unread.resolvedUnreadSetting === UnreadSetting.ONLY_MENTIONS) {
        str = "text-muted";
      }
      items[1] = hasOwnProperty(TextIcon, obj4);
      const obj5 = { style: { marginLeft: 4 }, variant: "text-sm/semibold", color: str2, children: unread.name };
      str2 = undefined;
      const Text = tmp5(4832).Text;
      if (unread.resolvedUnreadSetting === tmp6.ONLY_MENTIONS) {
        str2 = "text-muted";
      }
      items[2] = hasOwnProperty(Text, obj5);
      items1 = [metroRequire(View, obj2), ];
      let num = 0;
      const Badge = tmp5(1177).Badge;
      if (unread.badged) {
        num = 1;
      }
      items1[1] = hasOwnProperty(Badge, { value: num });
      return metroRequire(View, obj, unread.name);
    })
  };
  return closure_5(View, obj4);
};
