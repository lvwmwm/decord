// Module ID: 7948
// Function ID: 63416
// Name: BetaTag
// Dependencies: []
// Exports: default

// Module 7948 (BetaTag)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const Gradients = arg1(dependencyMap[2]).Gradients;
const jsx = arg1(dependencyMap[3]).jsx;
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BRAND, borderRadius: importDefault(dependencyMap[5]).radii.lg };
obj.container = obj;
obj.text = { textTransform: "uppercase" };
let closure_6 = obj.createStyles(obj);
const obj1 = { SMALL: "small", MEDIUM: "medium" };
const result = arg1(dependencyMap[10]).fileFinishedImporting("design/void/BetaTag/native/BetaTag.tsx");

export default function BetaTag(gradient) {
  let size;
  let style;
  let textStyle;
  ({ style, textStyle, size } = gradient);
  if (size === undefined) {
    size = obj1.MEDIUM;
  }
  let flag = gradient.gradient;
  if (flag === undefined) {
    flag = false;
  }
  const tmp2 = callback();
  let str = "text-xs/bold";
  if (obj1.SMALL !== size) {
    if (obj1.MEDIUM === size) {
      str = "text-sm/bold";
    }
  }
  if (flag) {
    let obj = {};
    const items = [tmp2.container, style];
    obj.style = items;
    obj.start = arg1(dependencyMap[7]).HorizontalGradient.START;
    obj.end = arg1(dependencyMap[7]).HorizontalGradient.END;
    obj.colors = Gradients.PREMIUM_TIER_2_TRI_COLOR;
    obj = { variant: str, color: "text-overlay-light" };
    const items1 = [tmp2.text, textStyle];
    obj.style = items1;
    const intl2 = arg1(dependencyMap[9]).intl;
    obj.children = intl2.string(arg1(dependencyMap[9]).t.oW0eUd);
    obj.children = tmp4(arg1(dependencyMap[8]).Text, obj);
    let tmp4Result = tmp4(importDefault(dependencyMap[6]), obj);
    const tmp11 = importDefault(dependencyMap[6]);
  } else {
    obj = {};
    const items2 = [tmp2.container, style];
    obj.style = items2;
    const obj1 = { variant: str, color: "text-overlay-light" };
    const items3 = [tmp2.text, textStyle];
    obj1.style = items3;
    const intl = arg1(dependencyMap[9]).intl;
    obj1.children = intl.string(arg1(dependencyMap[9]).t.oW0eUd);
    obj.children = tmp4(arg1(dependencyMap[8]).Text, obj1);
    tmp4Result = tmp4(View, obj);
  }
  return tmp4Result;
};
export const BetaSizes = obj1;
