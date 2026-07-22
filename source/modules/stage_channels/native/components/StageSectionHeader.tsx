// Module ID: 10771
// Function ID: 83699
// Name: StageSectionHeader
// Dependencies: []
// Exports: default

// Module 10771 (StageSectionHeader)
importAll(dependencyMap[0]);
({ TouchableOpacity: closure_3, View: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ jsxs: closure_5, jsx: closure_6 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { section: { "Bool(true)": "0e02f6accc59d44ac3827104886762f1", "Bool(true)": "boost" }, children: { marginLeft: 12 }, collapseButton: { marginLeft: "auto" } };
obj = { tintColor: importDefault(dependencyMap[4]).colors.MOBILE_TEXT_HEADING_PRIMARY };
obj.collapseIcon = obj;
const tmp4 = arg1(dependencyMap[2]);
obj.audience = { borderBottomColor: importDefault(dependencyMap[4]).colors.BORDER_SUBTLE, borderRadius: importDefault(dependencyMap[4]).radii.xs };
let closure_7 = obj.createStyles(obj);
let closure_8 = { code: "function StageSectionHeaderTsx1(){const{withTiming,collapsed}=this.__closure;return{transform:[{rotate:withTiming(collapsed?'180deg':'0deg',{duration:150})}]};}" };
const obj1 = { borderBottomColor: importDefault(dependencyMap[4]).colors.BORDER_SUBTLE, borderRadius: importDefault(dependencyMap[4]).radii.xs };
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/stage_channels/native/components/StageSectionHeader.tsx");

export default function StageSectionHeader(collapsed) {
  let count;
  let label;
  let onToggleCollapse;
  collapsed = collapsed.collapsed;
  const arg1 = collapsed;
  const children = collapsed.children;
  ({ label, count, onToggleCollapse } = collapsed);
  const tmp = callback3();
  let obj = arg1(dependencyMap[5]);
  const fn = function y() {
    let obj = {};
    obj = {};
    let str = "0deg";
    if (collapsed) {
      str = "180deg";
    }
    obj.rotate = collapsed(closure_2[6]).withTiming(str, { duration: 150 });
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  obj = { withTiming: arg1(dependencyMap[6]).withTiming, collapsed };
  fn.__closure = obj;
  fn.__workletHash = 13855092771739;
  fn.__initData = closure_8;
  obj = { style: tmp.section };
  const obj1 = { style: tmp.audience, onPress: onToggleCollapse };
  const animatedStyle = obj.useAnimatedStyle(fn);
  const items = [label, " \u2014 ", count];
  const items1 = [callback(arg1(dependencyMap[7]).Text, { children: items }), , ];
  let tmp7 = null != children;
  if (tmp7) {
    const obj2 = { style: tmp.children, children };
    tmp7 = callback2(closure_4, obj2);
  }
  items1[1] = tmp7;
  const obj3 = { style: tmp.collapseButton };
  const obj4 = { style: animatedStyle };
  const obj5 = { source: importDefault(dependencyMap[9]), style: tmp.collapseIcon };
  obj4.children = callback2(arg1(dependencyMap[8]).Icon, obj5);
  obj3.children = callback2(importDefault(dependencyMap[5]).View, obj4);
  items1[2] = callback2(closure_4, obj3);
  obj1.children = items1;
  obj.children = callback(closure_3, obj1);
  return callback2(closure_4, obj);
};
