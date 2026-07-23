// Module ID: 10781
// Function ID: 83748
// Name: StageSectionHeader
// Dependencies: [31, 27, 33, 4130, 689, 3991, 4131, 4126, 1273, 5452, 2]
// Exports: default

// Module 10781 (StageSectionHeader)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ TouchableOpacity: closure_3, View: closure_4 } = get_ActivityIndicator);
({ jsxs: closure_5, jsx: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = { section: { height: 48, paddingHorizontal: 4 }, children: { marginLeft: 12 }, collapseButton: { marginLeft: "auto" } };
_createForOfIteratorHelperLoose = { tintColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY };
_createForOfIteratorHelperLoose.collapseIcon = _createForOfIteratorHelperLoose;
let obj1 = { height: 48, flex: 1, flexDirection: "row", alignItems: "center", borderBottomWidth: 1, borderBottomColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, paddingHorizontal: 4, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs };
_createForOfIteratorHelperLoose.audience = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_8 = { code: "function StageSectionHeaderTsx1(){const{withTiming,collapsed}=this.__closure;return{transform:[{rotate:withTiming(collapsed?'180deg':'0deg',{duration:150})}]};}" };
const result = require("jsxProd").fileFinishedImporting("modules/stage_channels/native/components/StageSectionHeader.tsx");

export default function StageSectionHeader(collapsed) {
  let count;
  let label;
  let onToggleCollapse;
  collapsed = collapsed.collapsed;
  const children = collapsed.children;
  ({ label, count, onToggleCollapse } = collapsed);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = collapsed(3991);
  const fn = function y() {
    let obj = {};
    obj = {};
    let str = "0deg";
    if (collapsed) {
      str = "180deg";
    }
    obj.rotate = collapsed(outer1_2[6]).withTiming(str, { duration: 150 });
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  obj = { withTiming: collapsed(4131).withTiming, collapsed };
  fn.__closure = obj;
  fn.__workletHash = 13855092771739;
  fn.__initData = closure_8;
  obj = { style: tmp.section };
  const obj1 = { style: tmp.audience, onPress: onToggleCollapse };
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj2 = { variant: "text-md/semibold", color: "text-overlay-light", accessibilityRole: "header" };
  let items = [label, " \u2014 ", count];
  obj2.children = items;
  const items1 = [callback(collapsed(4126).Text, obj2), , ];
  let tmp7 = null != children;
  if (tmp7) {
    const obj3 = { style: tmp.children, children };
    tmp7 = callback2(closure_4, obj3);
  }
  items1[1] = tmp7;
  const obj4 = { style: tmp.collapseButton };
  const obj5 = { style: animatedStyle };
  const obj6 = { source: importDefault(5452), style: tmp.collapseIcon };
  obj5.children = callback2(collapsed(1273).Icon, obj6);
  obj4.children = callback2(importDefault(3991).View, obj5);
  items1[2] = callback2(closure_4, obj4);
  obj1.children = items1;
  obj.children = callback(closure_3, obj1);
  return callback2(closure_4, obj);
};
