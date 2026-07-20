// Module ID: 12904
// Function ID: 98442
// Name: LiveTag
// Dependencies: []
// Exports: default

// Module 12904 (LiveTag)
let num = 0;
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { borderRadius: importDefault(dependencyMap[4]).radii.round, backgroundColor: importDefault(dependencyMap[4]).unsafe_rawColors.RED_400 };
obj.tag = obj;
const obj1 = { textAlign: "center", color: importDefault(dependencyMap[4]).unsafe_rawColors.WHITE };
if (obj5.isAndroid()) {
  num = -2;
}
obj1.marginTop = num;
obj.tagText = obj1;
let closure_4 = obj.createStyles(obj);
const obj5 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("design/void/LiveTag/native/LiveTag.tsx");

export default function LiveTag(arg0) {
  let allowFontScaling;
  let style;
  let textStyle;
  ({ style, textStyle, allowFontScaling } = arg0);
  const tmp = callback();
  let obj = { style: items };
  const items = [tmp.tag, style];
  obj = { 1968435297: "/assets/design/components/LottieIcon/native/generated/lotties", 915925470: null, 1375298031: "3b38f8bf8ac6605b344df2f05c37673a" };
  const items1 = [tmp.tagText, textStyle];
  obj.style = items1;
  obj.allowFontScaling = allowFontScaling;
  const intl = arg1(dependencyMap[7]).intl;
  obj.children = intl.string(arg1(dependencyMap[7]).t.dI3q4h).toUpperCase();
  obj.children = jsx(arg1(dependencyMap[6]).Text, obj);
  return <View {...obj} />;
};
