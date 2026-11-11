// Module ID: 13003
// Function ID: 13004
// Name: StageSectionHeader
// Dependencies: [19, 17, 21, 5243, 575, 1652, 5485, 5866, 1187, 7848, 2]
// Exports: default

// Module 13003 (StageSectionHeader)
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5485 */;
import Text_Text from "Text/Text" /* 5866 */;
import AssetRegistryDefault from "AssetRegistry" /* 7848 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

const _modDef1652 = _mod1652;
let obj1, str;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
({ TouchableOpacity: c3, View: closure_4 } = react_native);
({ jsxs: hasOwnProperty, jsx: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { section: { height: 48, paddingHorizontal: 4 }, children: { marginLeft: 12 }, collapseButton: { marginLeft: "auto" }, collapseIcon: obj2, audience: obj3 };
obj2 = { tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles = createStyles.createStyles;
obj3 = { height: 48, flex: 1, flexDirection: "row", alignItems: "center", borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, paddingHorizontal: 4, borderRadius: nativeDefault.radii.xs };
let closure_7 = createStyles(obj);
let closure_8 = { code: "(function StageSectionHeaderTsx1(){let[withTiming,collapsed]=this.__closure;return{transform:[{rotate:withTiming(collapsed?'180deg':'0deg',{duration:150})}]};})" };
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageSectionHeader.tsx");

export default function StageSectionHeader(children) {
  let Icon;
  let View;
  let collapsed;
  let count;
  let items2;
  let items3;
  let label;
  let obj2;
  let obj6;
  let obj7;
  let onToggleCollapse;
  let tmp11;
  let tmp12;
  let tmp5;
  let tmp6;
  let tmp7;
  children = children.children;
  ({ label, count, collapsed, onToggleCollapse } = children);
  const tmp = closure_7();
  let items = [closure_8, , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items[1] = timing_timing.withTiming;
  items[2] = collapsed;
  let c0;
  let c1;
  [tmp5, tmp6, tmp7] = items;
  class StageSectionHeaderTsx1 {
    constructor() {
      str = "0deg";
      tmp = closure_0;
      if (closure_1) {
        str = "180deg";
      }
      obj = { transform: null };
      obj1 = { rotate: tmp(str, { duration: 150 }) };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items1 = [tmp6, tmp7];
  StageSectionHeaderTsx1.__closure = items1;
  StageSectionHeaderTsx1.__workletHash = 286379781122;
  StageSectionHeaderTsx1.__initData = tmp5;
  let obj = { style: tmp.section, children: tmp11(tmp12, obj2) };
  obj2 = { style: tmp.audience, onPress: onToggleCollapse, children: items3 };
  const animatedStyle = useAnimatedStyle(StageSectionHeaderTsx1);
  const obj3 = { variant: "body-md/semibold", color: "text-overlay-light", accessibilityRole: "header", children: items2 };
  items2 = [label, " \u2014 ", count];
  items3 = [hasOwnProperty(Text_Text.Text, obj3), , ];
  let tmp9Result = null != children;
  tmp11 = hasOwnProperty;
  tmp12 = _false;
  if (tmp9Result) {
    const obj4 = { style: tmp.children, children };
    tmp9Result = tmp9(tmp10, obj4);
  }
  items3[1] = tmp9Result;
  const obj5 = { style: tmp.collapseButton, children: metroRequire(View, obj6) };
  obj6 = { style: animatedStyle, children: metroRequire(Icon, obj7) };
  View = _modDef1652.View;
  obj7 = { source: AssetRegistryDefault, style: tmp.collapseIcon };
  Icon = tmp2(1187).Icon;
  items3[2] = metroRequire(React3, obj5);
  return metroRequire(React3, obj);
};
