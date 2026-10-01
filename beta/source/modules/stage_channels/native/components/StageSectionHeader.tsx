// Module ID: 9513
// Function ID: 9514
// Name: StageSectionHeader
// Dependencies: [19, 17, 21, 4836, 576, 4566, 4837, 4832, 1177, 6579, 2]
// Exports: default

// Module 9513 (StageSectionHeader)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import AssetRegistryDefault from "AssetRegistry" /* 6579 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

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
const __initData = { code: "function StageSectionHeaderTsx1(){const{withTiming,collapsed}=this.__closure;return{transform:[{rotate:withTiming(collapsed?'180deg':'0deg',{duration:150})}]};}" };
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageSectionHeader.tsx");

export default function StageSectionHeader(collapsed) {
  let Icon;
  let View;
  let count;
  let items;
  let items1;
  let label;
  let obj4;
  let obj8;
  let obj9;
  let onToggleCollapse;
  let tmp7;
  let tmp8;
  collapsed = collapsed.collapsed;
  const children = collapsed.children;
  ({ label, count, onToggleCollapse } = collapsed);
  const tmp = closure_7();
  let obj = collapsed(4566);
  const fn = function y() {
    let items;
    let str = "0deg";
    const withTiming = timing.withTiming;
    timing;
    if (collapsed) {
      str = "180deg";
    }
    const obj = { transform: items };
    items = [{ rotate: withTiming(str, { duration: 150 }) }];
    ({ rotate: withTiming(str, { duration: 150 }) });
    return obj;
  };
  const obj2 = { withTiming: collapsed(4837).withTiming, collapsed };
  fn.__closure = obj2;
  fn.__workletHash = 13855092771739;
  fn.__initData = __initData;
  const obj3 = { style: tmp.section, children: tmp7(tmp8, obj4) };
  obj4 = { style: tmp.audience, onPress: onToggleCollapse, children: items1 };
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj5 = { variant: "text-md/semibold", color: "text-overlay-light", accessibilityRole: "header", children: items };
  items = [label, " \u2014 ", count];
  items1 = [closure_5(collapsed(4832).Text, obj5), , ];
  let tmp5Result = null != children;
  const tmp2 = collapsed;
  tmp7 = closure_5;
  tmp8 = closure_3;
  if (tmp5Result) {
    const obj6 = { style: tmp.children, children };
    tmp5Result = tmp5(tmp6, obj6);
  }
  items1[1] = tmp5Result;
  const obj7 = { style: tmp.collapseButton, children: closure_6(View, obj8) };
  obj8 = { style: animatedStyle, children: closure_6(Icon, obj9) };
  View = ReanimatedRexportDefault.View;
  obj9 = { source: AssetRegistryDefault, style: tmp.collapseIcon };
  Icon = tmp2(1177).Icon;
  items1[2] = closure_6(closure_4, obj7);
  return closure_6(closure_4, obj3);
};
