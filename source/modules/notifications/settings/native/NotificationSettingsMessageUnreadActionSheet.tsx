// Module ID: 10306
// Function ID: 79539
// Name: NotificationSettingsMessageUnreadActionSheet
// Dependencies: [31, 27, 4326, 33, 4130, 689, 5187, 10303, 4126, 1212, 7519, 7518, 2]
// Exports: default

// Module 10306 (NotificationSettingsMessageUnreadActionSheet)
import "result";
import { View } from "get ActivityIndicator";
import { UnreadSetting } from "ReadStateTypes";
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
const result = require("ReadStateTypes").fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageUnreadActionSheet.tsx");

export default function NotificationSettingsMessageUnreadActionSheet(defaultValue) {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { startExpanded: true, backgroundStyles: tmp.sheet };
  obj = { style: tmp.header };
  obj = { unreadSetting: defaultValue.value };
  obj.children = callback(importDefault(10303), obj);
  const items = [callback(View, obj), ];
  const obj1 = { style: tmp.content };
  const obj2 = { variant: "text-sm/semibold" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj2.children = intl.string(require(1212) /* getSystemLocale */.t.Tqd1Af);
  const items1 = [callback(require(4126) /* Text */.Text, obj2), , ];
  const obj3 = { variant: "text-xs/medium", color: "text-muted" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj3.children = intl2.string(require(1212) /* getSystemLocale */.t.RpQgm5);
  items1[1] = callback(require(4126) /* Text */.Text, obj3);
  const obj4 = { style: tmp.form };
  const obj5 = { defaultValue: defaultValue.value, onChange: defaultValue.onChange, hasIcons: false };
  const obj6 = {};
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj6.label = intl3.string(require(1212) /* getSystemLocale */.t["HVah/3"]);
  obj6.value = UnreadSetting.ALL_MESSAGES;
  const items2 = [callback(require(7518) /* TableRadioRow */.TableRadioRow, obj6), ];
  const obj7 = { subLabel: defaultValue.disabledMentionOnlyWithReason, disabled: null != defaultValue.disabledMentionOnlyWithReason };
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj7.label = intl4.string(require(1212) /* getSystemLocale */.t["tu+ZWJ"]);
  obj7.value = UnreadSetting.ONLY_MENTIONS;
  items2[1] = callback(require(7518) /* TableRadioRow */.TableRadioRow, obj7);
  obj5.children = items2;
  obj4.children = callback2(require(7519) /* context */.TableRadioGroup, obj5);
  items1[2] = callback(View, obj4);
  obj1.children = items1;
  items[1] = callback2(View, obj1);
  obj.children = items;
  return callback2(require(5187) /* Background */.BottomSheet, obj);
};
