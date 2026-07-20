// Module ID: 13978
// Function ID: 106287
// Name: LabeledDataBlock
// Dependencies: []
// Exports: default

// Module 13978 (LabeledDataBlock)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_MOD_NORMAL, borderRadius: importDefault(dependencyMap[5]).radii.sm };
obj.container = obj;
obj.title = { marginRight: 4 };
const obj1 = {};
const tmp3 = arg1(dependencyMap[3]);
const merged = Object.assign(importDefault(dependencyMap[6])(arg1(dependencyMap[2]).Fonts.PRIMARY_MEDIUM, importDefault(dependencyMap[5]).colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj.data = obj1;
obj.titleSection = { "Bool(true)": 80, "Bool(true)": 80, "Bool(true)": 40 };
let closure_5 = obj.createStyles(obj);
const importDefaultResult = importDefault(dependencyMap[6]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/guild_role_subscriptions/native/components/LabeledDataBlock.tsx");

export default function LabeledDataBlock(arg0) {
  let children;
  let icon;
  let onPressIcon;
  let style;
  let title;
  ({ children, icon } = arg0);
  ({ title, style, onPressIcon } = arg0);
  const tmp = callback2();
  let obj = { style: items };
  const items = [tmp.container, style];
  obj = { style: tmp.titleSection };
  obj = { 0: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001751994655997644, 9223372036854775807: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000406163257, 0: 0.0008928781611565739, -9223372036854775808: 43429592159651265000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, style: tmp.title, children: title };
  const items1 = [callback(arg1(dependencyMap[7]).Text, obj), ];
  let tmp4 = null != icon;
  if (tmp4) {
    const obj1 = { accessibilityRole: "button", onPress: onPressIcon };
    const obj2 = { size: arg1(dependencyMap[9]).Icon.Sizes.SMALL, source: icon };
    obj1.children = callback(arg1(dependencyMap[9]).Icon, obj2);
    tmp4 = callback(arg1(dependencyMap[8]).PressableOpacity, obj1);
  }
  items1[1] = tmp4;
  obj.children = items1;
  const items2 = [closure_4(View, obj), ];
  let tmp8 = children;
  if ("string" === typeof children) {
    const obj3 = { style: tmp.data, children };
    tmp8 = callback(arg1(dependencyMap[9]).LegacyText, obj3);
  }
  items2[1] = tmp8;
  obj.children = items2;
  return closure_4(View, obj);
};
