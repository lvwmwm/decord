// Module ID: 12974
// Function ID: 98804
// Name: BadgeColors
// Dependencies: []
// Exports: TextBadge

// Module 12974 (BadgeColors)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { borderRadius: importDefault(dependencyMap[4]).radii.sm };
obj.base = obj;
obj.danger = { backgroundColor: importDefault(dependencyMap[4]).colors.BADGE_NOTIFICATION_BACKGROUND };
const obj1 = { backgroundColor: importDefault(dependencyMap[4]).colors.BADGE_NOTIFICATION_BACKGROUND };
obj.info = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BRAND };
const obj2 = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BRAND };
obj.brand = { backgroundColor: importDefault(dependencyMap[4]).unsafe_rawColors.BRAND_260 };
let closure_4 = obj.createStyles(obj);
let obj6 = arg1(dependencyMap[3]);
const obj4 = { text: {} };
const obj3 = { backgroundColor: importDefault(dependencyMap[4]).unsafe_rawColors.BRAND_260 };
obj4.dangerText = { color: importDefault(dependencyMap[4]).colors.WHITE };
obj6 = { color: importDefault(dependencyMap[4]).colors.WHITE };
obj4.infoText = obj6;
const obj5 = { color: importDefault(dependencyMap[4]).colors.WHITE };
obj4.brandText = { color: importDefault(dependencyMap[4]).unsafe_rawColors.BRAND_560 };
let closure_5 = obj6.createStyles(obj4);
const obj8 = { DANGER: "danger", INFO: "info", BRAND: "brand", NORMAL: "normal" };
const obj7 = { color: importDefault(dependencyMap[4]).unsafe_rawColors.BRAND_560 };
const result = arg1(dependencyMap[6]).fileFinishedImporting("design/void/Badges/native/Badges.tsx");

export const BadgeColors = obj8;
export const TextBadge = function TextBadge(color) {
  let style;
  let text;
  let textStyle;
  let DANGER = color.color;
  if (DANGER === undefined) {
    DANGER = obj8.DANGER;
  }
  ({ style, text, textStyle } = color);
  const tmp2 = callback();
  const tmp3 = callback2();
  const obj = { style: items };
  const items = [tmp2.base, tmp2[DANGER], style];
  const items1 = [tmp3.text, tmp3["" + DANGER + "Text"], textStyle];
  obj.children = jsx(arg1(dependencyMap[5]).Text, { variant: "text-xs/bold", style: items1, children: text });
  return <View {...obj} />;
};
