// Module ID: 10329
// Function ID: 79710
// Name: NotificationSettingsMessageNotificationActionSheet
// Dependencies: [31, 27, 653, 33, 4130, 689, 5187, 10326, 4126, 1212, 7654, 7653, 2]
// Exports: default

// Module 10329 (NotificationSettingsMessageNotificationActionSheet)
import "result";
import { View } from "get ActivityIndicator";
import { UserNotificationSettings } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
_createForOfIteratorHelperLoose.sheet = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.header = { padding: 24, paddingTop: 0 };
_createForOfIteratorHelperLoose.content = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, padding: 16 };
_createForOfIteratorHelperLoose.form = { marginTop: 8, marginBottom: 16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, padding: 16 };
const result = require("ME").fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageNotificationActionSheet.tsx");

export default function NotificationSettingsMessageNotificationActionSheet(defaultValue) {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { startExpanded: true, backgroundStyles: tmp.sheet };
  obj = { style: tmp.header };
  obj = { notificationSetting: defaultValue.value };
  obj.children = callback(importDefault(10326), obj);
  const items = [callback(View, obj), ];
  const obj1 = { style: tmp.content };
  const obj2 = { variant: "text-sm/semibold" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj2.children = intl.string(require(1212) /* getSystemLocale */.t["1m22ZB"]);
  const items1 = [callback(require(4126) /* Text */.Text, obj2), callback(require(4126) /* Text */.Text, { variant: "text-xs/medium", color: "text-muted" }), ];
  const obj3 = { style: tmp.form };
  const obj4 = { defaultValue: defaultValue.value, onChange: defaultValue.onChange, hasIcons: false };
  const obj5 = {};
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj5.label = intl2.string(require(1212) /* getSystemLocale */.t["HVah/3"]);
  obj5.value = UserNotificationSettings.ALL_MESSAGES;
  obj5.subLabel = defaultValue.allMessagesSubLabel;
  const items2 = [callback(require(7653) /* TableRadioRow */.TableRadioRow, obj5), , ];
  const obj6 = {};
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj6.label = intl3.string(require(1212) /* getSystemLocale */.t["tu+ZWJ"]);
  obj6.value = UserNotificationSettings.ONLY_MENTIONS;
  items2[1] = callback(require(7653) /* TableRadioRow */.TableRadioRow, obj6);
  const obj7 = {};
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj7.label = intl4.string(require(1212) /* getSystemLocale */.t.X4wWUi);
  obj7.value = UserNotificationSettings.NO_MESSAGES;
  items2[2] = callback(require(7653) /* TableRadioRow */.TableRadioRow, obj7);
  obj4.children = items2;
  obj3.children = callback2(require(7654) /* context */.TableRadioGroup, obj4);
  items1[2] = callback(View, obj3);
  obj1.children = items1;
  items[1] = callback2(View, obj1);
  obj.children = items;
  return callback2(require(5187) /* Background */.BottomSheet, obj);
};
