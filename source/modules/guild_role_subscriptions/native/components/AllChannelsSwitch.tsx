// Module ID: 16456
// Function ID: 128255
// Name: Row
// Dependencies: [31, 27, 14117, 653, 33, 4130, 689, 5052, 3848, 8474, 1273, 16457, 1212, 16458, 2]
// Exports: default

// Module 16456 (Row)
import "result";
import { View } from "get ActivityIndicator";
import { AllChannelAccessOptions } from "AllChannelAccessOptions";
import { Fonts } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "createTextStyle";
import importDefaultResult1 from "createTextStyle";

let closure_5;
let closure_6;
const require = arg1;
function Row(arg0) {
  let accessibilityRole;
  let accessibilityState;
  let disabled;
  let icon;
  let label;
  let onPress;
  let selected;
  ({ selected, disabled } = arg0);
  ({ icon, label, onPress } = arg0);
  if (disabled === undefined) {
    disabled = false;
  }
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(3848) /* useCheckboxA11yNative */;
  obj = { selected, disabled };
  const radioA11yNative = obj.useRadioA11yNative(obj);
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  obj = { style: tmp.row, accessibilityRole, accessibilityState };
  let tmp5 = selected;
  if (!selected) {
    tmp5 = disabled;
  }
  obj.disabled = tmp5;
  obj.onPress = onPress;
  const obj1 = { size: require(1273) /* Button */.Icon.Sizes.MEDIUM, source: icon };
  const items = [callback(require(1273) /* Button */.Icon, obj1), , ];
  const obj2 = { style: null, numberOfLines: 1, ellipsizeMode: "tail" };
  const items1 = [tmp.rowLabel, ];
  let rowLabelSelected = selected;
  if (selected) {
    rowLabelSelected = tmp.rowLabelSelected;
  }
  items1[1] = rowLabelSelected;
  obj2.style = items1;
  obj2.children = label;
  items[1] = callback(require(1273) /* Button */.LegacyText, obj2);
  items[2] = callback(require(1273) /* Button */.RadioIndicator, { style: tmp.rowIndicator, active: selected });
  obj.children = items;
  return closure_6(importDefault(8474), obj);
}
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.row = { alignSelf: "stretch", alignItems: "center", flexDirection: "row", justifyContent: "flex-start", padding: 16 };
let obj1 = {};
const merged = Object.assign(require("createTextStyle")(Fonts.PRIMARY_MEDIUM, require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE, 16));
obj1["flexShrink"] = 1;
obj1["marginHorizontal"] = 16;
_createForOfIteratorHelperLoose.rowLabel = obj1;
let obj2 = {};
const merged1 = Object.assign(require("createTextStyle")(Fonts.PRIMARY_SEMIBOLD, require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY, 16));
_createForOfIteratorHelperLoose.rowLabelSelected = obj2;
_createForOfIteratorHelperLoose.rowIndicator = { marginStart: "auto" };
const obj3 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, height: 1, marginStart: 56 };
_createForOfIteratorHelperLoose.separator = obj3;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("AllChannelAccessOptions").fileFinishedImporting("modules/guild_role_subscriptions/native/components/AllChannelsSwitch.tsx");

export default function AllChannelsSwitch(style) {
  let channelAccessFormat;
  let disabled;
  let require;
  ({ channelAccessFormat, setChannelAccessFormat: require, disabled } = style);
  if (disabled === undefined) {
    disabled = false;
  }
  const tmp = _createForOfIteratorHelperLoose();
  obj = { style: items, accessibilityRole: "radiogroup", accessibilityState: obj };
  items = [tmp.container, style.style];
  obj = { disabled };
  obj = { icon: importDefault(16457) };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.label = intl.string(require(1212) /* getSystemLocale */.t["vs2T+B"]);
  obj.selected = channelAccessFormat === AllChannelAccessOptions.SOME_CHANNELS_ACCESS;
  obj.onPress = function onPress() {
    return callback(outer1_4.SOME_CHANNELS_ACCESS);
  };
  obj.disabled = disabled;
  const items1 = [callback(Row, obj), callback(View, { style: tmp.separator }), ];
  const obj2 = { icon: importDefault(16458) };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj2.label = intl2.string(require(1212) /* getSystemLocale */.t.l4Tr7X);
  obj2.selected = channelAccessFormat === AllChannelAccessOptions.ALL_CHANNELS_ACCESS;
  obj2.onPress = function onPress() {
    return callback(outer1_4.ALL_CHANNELS_ACCESS);
  };
  obj2.disabled = disabled;
  items1[2] = callback(Row, obj2);
  obj.children = items1;
  return callback2(View, obj);
};
