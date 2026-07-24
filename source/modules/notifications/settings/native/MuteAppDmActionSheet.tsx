// Module ID: 11660
// Function ID: 90555
// Name: MuteAppDMActionSheet
// Dependencies: [31, 27, 33, 4130, 689, 5187, 11374, 10234, 1212, 4126, 4543, 5079, 5073, 4098, 3831, 1273, 7727, 2]
// Exports: default

// Module 11660 (MuteAppDMActionSheet)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
_createForOfIteratorHelperLoose.sheet = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.iconContainer = { alignItems: "center", marginBottom: 8 };
_createForOfIteratorHelperLoose.iconBackground = { width: 48, height: 48 };
_createForOfIteratorHelperLoose.content = { padding: 16 };
_createForOfIteratorHelperLoose.headerText = { textAlign: "center", marginBottom: 8, paddingHorizontal: 16 };
_createForOfIteratorHelperLoose.infoText = { textAlign: "center", marginBottom: 16, paddingHorizontal: 16 };
_createForOfIteratorHelperLoose.dismissButtonContainer = { marginTop: 8 };
let obj1 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_FEEDBACK_NOTIFICATION, height: 24, width: 24, padding: 4, alignContent: "center" };
_createForOfIteratorHelperLoose.mutedNotificationContainer = obj1;
_createForOfIteratorHelperLoose.mutedNotification = { width: 16, height: 16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("jsxProd").fileFinishedImporting("modules/notifications/settings/native/MuteAppDmActionSheet.tsx");

export default function MuteAppDMActionSheet(channel) {
  const tmp = _createForOfIteratorHelperLoose();
  const require = tmp;
  channel = channel.channel;
  let obj = { startExpanded: true, backgroundStyles: tmp.sheet };
  obj = { style: tmp.content };
  obj = { style: tmp.iconContainer };
  const obj1 = { style: tmp.iconBackground, IconComponent: require(10234) /* BellIcon */.BellIcon, active: true };
  let intl = require(1212) /* getSystemLocale */.intl;
  obj1.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.uAmAiL);
  obj.children = callback(channel(11374), obj1);
  const items = [callback(View, obj), , , , ];
  const obj2 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.headerText };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj2.children = intl2.string(require(1212) /* getSystemLocale */.t.uAmAiL);
  items[1] = callback(require(4126) /* Text */.Text, obj2);
  let obj3 = { variant: "text-md/normal", color: "text-default", style: tmp.infoText };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj3.children = intl3.string(require(1212) /* getSystemLocale */.t.mscFJU);
  items[2] = callback(require(4126) /* Text */.Text, obj3);
  const obj4 = { variant: "destructive" };
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj4.text = intl4.string(require(1212) /* getSystemLocale */.t.uAmAiL);
  obj4.onPress = function onPress() {
    let obj = channel(outer1_2[11]);
    obj = { muted: true };
    const result = obj.updateChannelOverrideSettings(null, channel.id, obj, tmp(outer1_2[12]).NotificationLabels.Muted);
    channel(outer1_2[13]).hideActionSheet();
    const obj3 = channel(outer1_2[13]);
    obj = { key: "NOTIFICATIONS_MUTED" };
    const intl = tmp(outer1_2[8]).intl;
    obj.content = intl.string(tmp(outer1_2[8]).t.EgGpkx);
    obj.icon = function icon() {
      let obj = { style: outer1_0.mutedNotificationContainer };
      obj = { source: channel(outer2_2[16]), color: channel(outer2_2[4]).unsafe_rawColors.WHITE, style: outer1_0.mutedNotification };
      obj.children = outer2_4(callback(outer2_2[15]).Icon, obj);
      return outer2_4(outer2_3, obj);
    };
    channel(outer1_2[14]).open(obj);
  };
  items[3] = callback(require(4543) /* Button */.Button, obj4);
  const obj5 = { style: tmp.dismissButtonContainer };
  const obj6 = { variant: "secondary" };
  const intl5 = require(1212) /* getSystemLocale */.intl;
  obj6.text = intl5.string(require(1212) /* getSystemLocale */.t.WAI6xu);
  obj6.onPress = function onPress() {
    channel(outer1_2[13]).hideActionSheet();
  };
  obj5.children = callback(require(4543) /* Button */.Button, obj6);
  items[4] = callback(View, obj5);
  obj.children = items;
  obj.children = callback2(View, obj);
  return callback(require(5187) /* Background */.BottomSheet, obj);
};
