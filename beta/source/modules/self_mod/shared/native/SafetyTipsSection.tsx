// Module ID: 10918
// Function ID: 10919
// Name: SafetyTipsSection
// Dependencies: [19, 17, 21, 4836, 576, 5279, 10919, 4832, 1115, 8036, 2]
// Exports: default

// Module 10918 (SafetyTipsSection)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import SafetyTipsRowDefault from "SafetyTipsRow" /* 8036 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { image: { alignSelf: "center", justifySelf: "center" }, tips: obj2, text: { textAlign: "center" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/self_mod/shared/native/SafetyTipsSection.tsx");

export default function SafetyTipsContainer(safetyTips) {
  let intl;
  let items1;
  safetyTips = safetyTips.safetyTips;
  let showHeader = safetyTips.showHeader;
  const description = safetyTips.description;
  const tmp = closure_6();
  let obj = { style: tmp.image, children: closure_4(safetyTips(10919).SafetyBookletSpotIllustration, {}) };
  const Stack = safetyTips(5279).Stack;
  const items = [closure_4(View, obj), , ];
  const Stack2 = safetyTips(5279).Stack;
  const tmp6 = View;
  if (showHeader) {
    const obj2 = { style: tmp.text, variant: "heading-xl/semibold", children: intl.string(safetyTips(1115).t.eAbVfS) };
    const Text = tmp3(4832).Text;
    intl = tmp3(1115).intl;
    showHeader = tmp5(Text, obj2);
  }
  const obj4 = { spacing: 8, align: "center", justify: "center", children: items1 };
  items1 = [showHeader, ];
  const obj3 = { spacing: 16, children: items };
  const obj5 = { style: tmp.text, accessibilityRole: "header", variant: "text-md/medium", color: "text-default", children: description };
  items1[1] = closure_4(safetyTips(4832).Text, obj5);
  items[1] = closure_5(Stack2, obj4);
  const obj6 = {
    style: tmp.tips,
    children: safetyTips.map((tip, index) => {
      const obj = { index: index + 1, tip, end: index === safetyTips.length - 1 };
      return React3(SafetyTipsRowDefault, obj, index);
    })
  };
  items[2] = closure_4(tmp6, obj6);
  return closure_5(Stack, obj3);
};
