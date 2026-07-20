// Module ID: 16316
// Function ID: 125947
// Name: Row
// Dependencies: []
// Exports: default

// Module 16316 (Row)
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
  const tmp = callback3();
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
  const obj2 = { hasIcons: null, fontFamily: "\u{1F480}", fontSize: 6 };
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
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const AllChannelAccessOptions = arg1(dependencyMap[2]).AllChannelAccessOptions;
const Fonts = arg1(dependencyMap[3]).Fonts;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[6]).radii.sm };
obj.container = obj;
obj.row = {};
const obj1 = {};
const tmp3 = arg1(dependencyMap[4]);
const merged = Object.assign(importDefault(dependencyMap[7])(Fonts.PRIMARY_MEDIUM, importDefault(dependencyMap[6]).colors.TEXT_SUBTLE, 16));
obj1["flexShrink"] = 1;
obj1["marginHorizontal"] = 16;
obj.rowLabel = obj1;
const importDefaultResult = importDefault(dependencyMap[7]);
const obj2 = {};
const merged1 = Object.assign(importDefault(dependencyMap[7])(Fonts.PRIMARY_SEMIBOLD, importDefault(dependencyMap[6]).colors.MOBILE_TEXT_HEADING_PRIMARY, 16));
obj.rowLabelSelected = obj2;
obj.rowIndicator = { marginStart: "auto" };
const importDefaultResult1 = importDefault(dependencyMap[7]);
obj.separator = { backgroundColor: importDefault(dependencyMap[6]).colors.BORDER_SUBTLE };
let closure_7 = obj.createStyles(obj);
const obj3 = { backgroundColor: importDefault(dependencyMap[6]).colors.BORDER_SUBTLE };
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/guild_role_subscriptions/native/components/AllChannelsSwitch.tsx");

export default function AllChannelsSwitch(style) {
  let channelAccessFormat;
  let disabled;
  ({ channelAccessFormat, setChannelAccessFormat: closure_0, disabled } = style);
  if (disabled === undefined) {
    disabled = false;
  }
  const tmp = callback3();
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
