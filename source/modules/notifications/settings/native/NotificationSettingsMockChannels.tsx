// Module ID: 10303
// Function ID: 79531
// Name: NotificationSettingsMockChannels
// Dependencies: [31, 27, 4326, 33, 4130, 689, 1212, 10304, 4638, 4126, 1273, 2]
// Exports: default

// Module 10303 (NotificationSettingsMockChannels)
import "result";
import { View } from "get ActivityIndicator";
import { UnreadSetting } from "ReadStateTypes";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, overflow: "hidden", borderRadius: 10, paddingVertical: 8 };
_createForOfIteratorHelperLoose.card = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.channel = { display: "flex", flexDirection: "row", alignItems: "center", paddingVertical: 4, justifyContent: "space-between", paddingRight: 12 };
_createForOfIteratorHelperLoose.channelName = { display: "flex", flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("ReadStateTypes").fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMockChannels.tsx");

export default function NotificationSettingsMockChannels(unreadSetting) {
  const tmp = _createForOfIteratorHelperLoose();
  const require = tmp;
  let obj = { badged: true, unread: true, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.name = intl.string(require(1212) /* getSystemLocale */.t.EjLobP);
  let items = [obj, , ];
  obj = { badged: false, unread: true, resolvedUnreadSetting: UnreadSetting.ONLY_MENTIONS };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.name = intl2.string(require(1212) /* getSystemLocale */.t.Wgpwpp);
  items[1] = obj;
  obj = { badged: false, unread: false, resolvedUnreadSetting: UnreadSetting.ONLY_MENTIONS };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.name = intl3.string(require(1212) /* getSystemLocale */.t.g9VImh);
  items[2] = obj;
  if (unreadSetting.unreadSetting === UnreadSetting.ALL_MESSAGES) {
    items[1].resolvedUnreadSetting = UnreadSetting.ALL_MESSAGES;
  }
  return callback(View, {
    style: tmp.card,
    children: items.map((unread) => {
      let obj = { style: tmp.channel };
      obj = { style: tmp.channelName };
      obj = { unread: unread.unread, resolvedUnreadSetting: unread.resolvedUnreadSetting };
      const items = [outer1_5(outer1_1(outer1_2[7]), obj), , ];
      const obj1 = { style: { marginLeft: 12 }, size: "xs" };
      let str;
      if (unread.resolvedUnreadSetting === outer1_4.ONLY_MENTIONS) {
        str = "text-muted";
      }
      obj1.color = str;
      items[1] = outer1_5(outer1_6(outer1_2[8]).TextIcon, obj1);
      const obj2 = { style: { marginLeft: 4 }, variant: "text-sm/semibold" };
      let str2;
      if (unread.resolvedUnreadSetting === outer1_4.ONLY_MENTIONS) {
        str2 = "text-muted";
      }
      obj2.color = str2;
      obj2.children = unread.name;
      items[2] = outer1_5(outer1_6(outer1_2[9]).Text, obj2);
      obj.children = items;
      const items1 = [outer1_6(outer1_3, obj), ];
      const obj3 = {};
      let num = 0;
      if (unread.badged) {
        num = 1;
      }
      obj3.value = num;
      items1[1] = outer1_5(outer1_6(outer1_2[10]).Badge, obj3);
      obj.children = items1;
      return outer1_6(outer1_3, obj, unread.name);
    })
  });
};
