// Module ID: 16323
// Function ID: 125978
// Name: Row
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 16323 (Row)
import "__exportStarResult1";
import { View } from "__exportStarResult1";
import { AllChannelAccessOptions } from "__exportStarResult1";
import { Fonts } from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import importDefaultResult from "__exportStarResult1";
import importDefaultResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

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
  const tmp = __exportStarResult1();
  let obj = arg1(dependencyMap[8]);
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
  const obj1 = { size: arg1(dependencyMap[10]).Icon.Sizes.MEDIUM, source: icon };
  const items = [callback(arg1(dependencyMap[10]).Icon, obj1), , ];
  const obj2 = { "Bool(false)": null, "Bool(false)": "\u{1F480}", "Bool(false)": 6 };
  const items1 = [tmp.rowLabel, ];
  let rowLabelSelected = selected;
  if (selected) {
    rowLabelSelected = tmp.rowLabelSelected;
  }
  items1[1] = rowLabelSelected;
  obj2.style = items1;
  obj2.children = label;
  items[1] = callback(arg1(dependencyMap[10]).LegacyText, obj2);
  items[2] = callback(arg1(dependencyMap[10]).RadioIndicator, { style: tmp.rowIndicator, active: selected });
  obj.children = items;
  return closure_6(importDefault(dependencyMap[9]), obj);
}
({ jsx: closure_5, jsxs: closure_6 } = __exportStarResult1);
__exportStarResult1 = {};
__exportStarResult1 = { backgroundColor: require("__exportStarResult1").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("__exportStarResult1").radii.sm };
__exportStarResult1.container = __exportStarResult1;
__exportStarResult1.row = {};
const obj1 = {};
const merged = Object.assign(require("__exportStarResult1")(Fonts.PRIMARY_MEDIUM, require("__exportStarResult1").colors.TEXT_SUBTLE, 16));
obj1["flexShrink"] = 1;
obj1["marginHorizontal"] = 16;
__exportStarResult1.rowLabel = obj1;
const obj2 = {};
const merged1 = Object.assign(require("__exportStarResult1")(Fonts.PRIMARY_SEMIBOLD, require("__exportStarResult1").colors.MOBILE_TEXT_HEADING_PRIMARY, 16));
__exportStarResult1.rowLabelSelected = obj2;
__exportStarResult1.rowIndicator = { marginStart: "auto" };
__exportStarResult1.separator = { backgroundColor: require("__exportStarResult1").colors.BORDER_SUBTLE };
__exportStarResult1 = __exportStarResult1.createStyles(__exportStarResult1);
const result = __exportStarResult1.fileFinishedImporting("modules/guild_role_subscriptions/native/components/AllChannelsSwitch.tsx");

export default function AllChannelsSwitch(style) {
  let channelAccessFormat;
  let disabled;
  ({ channelAccessFormat, setChannelAccessFormat: closure_0, disabled } = style);
  if (disabled === undefined) {
    disabled = false;
  }
  const tmp = __exportStarResult1();
  let obj = { style: items, accessibilityRole: "radiogroup", accessibilityState: obj };
  const items = [tmp.container, style.style];
  obj = { disabled };
  obj = { icon: importDefault(dependencyMap[11]) };
  const intl = arg1(dependencyMap[12]).intl;
  obj.label = intl.string(arg1(dependencyMap[12]).t.vs2T+B);
  obj.selected = channelAccessFormat === AllChannelAccessOptions.SOME_CHANNELS_ACCESS;
  obj.onPress = function onPress() {
    return callback(constants.SOME_CHANNELS_ACCESS);
  };
  obj.disabled = disabled;
  const items1 = [callback(Row, obj), callback(View, { style: tmp.separator }), ];
  const obj2 = { icon: importDefault(dependencyMap[13]) };
  const intl2 = arg1(dependencyMap[12]).intl;
  obj2.label = intl2.string(arg1(dependencyMap[12]).t.l4Tr7X);
  obj2.selected = channelAccessFormat === AllChannelAccessOptions.ALL_CHANNELS_ACCESS;
  obj2.onPress = function onPress() {
    return callback(constants.ALL_CHANNELS_ACCESS);
  };
  obj2.disabled = disabled;
  items1[2] = callback(Row, obj2);
  obj.children = items1;
  return callback2(View, obj);
};
