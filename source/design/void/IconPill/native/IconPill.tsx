// Module ID: 12884
// Function ID: 98393
// Name: IconPill
// Dependencies: [131072, 4201840640, 1593835524, 33554482, 1912602624, 1274, 2, 3741680, 2031616]
// Exports: default

// Module 12884 (IconPill)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { backgroundColor: require("STATUS_PADDING").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("STATUS_PADDING").radii.md };
obj.pillContainer = obj;
const tmp3 = arg1(dependencyMap[3]);
obj.pillIcon = { tintColor: require("STATUS_PADDING").colors.TEXT_SUBTLE, marginRight: 4 };
const obj1 = { tintColor: require("STATUS_PADDING").colors.TEXT_SUBTLE, marginRight: 4 };
obj.pillText = { fontFamily: arg1(dependencyMap[2]).Fonts.PRIMARY_NORMAL, color: require("STATUS_PADDING").colors.TEXT_SUBTLE, fontSize: 14, lineHeight: 18 };
let closure_5 = obj.createStyles(obj);
const obj2 = { fontFamily: arg1(dependencyMap[2]).Fonts.PRIMARY_NORMAL, color: require("STATUS_PADDING").colors.TEXT_SUBTLE, fontSize: 14, lineHeight: 18 };
const result = arg1(dependencyMap[8]).fileFinishedImporting("design/void/IconPill/native/IconPill.tsx");

export default function IconPill(IconComponent) {
  let accessibilityLabel;
  let source;
  let style;
  let text;
  let textStyle;
  IconComponent = IconComponent.IconComponent;
  ({ text, source, style, textStyle, accessibilityLabel } = IconComponent);
  const tmp = callback2();
  let obj = { style: items };
  const items = [tmp.pillContainer, style];
  if (null != IconComponent) {
    obj = { size: "xxs", style: tmp.pillIcon };
    let tmp8 = callback(IconComponent, obj);
  } else {
    obj = { source, size: importDefault(dependencyMap[6]).Sizes.EXTRA_SMALL, style: tmp.pillIcon };
    tmp8 = callback(importDefault(dependencyMap[6]), obj);
    const tmp7 = importDefault(dependencyMap[6]);
  }
  const items1 = [tmp8, ];
  const items2 = [tmp.pillText, textStyle];
  items1[1] = callback(importDefault(dependencyMap[7]), { style: items2, numberOfLines: 1, accessibilityLabel, children: text });
  obj.children = items1;
  return closure_4(View, obj);
};
