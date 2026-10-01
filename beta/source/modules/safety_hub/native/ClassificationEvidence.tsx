// Module ID: 11369
// Function ID: 11370
// Name: ClassificationEvidence
// Dependencies: [19, 17, 21, 4836, 1177, 576, 4832, 1115, 11370, 2]
// Exports: default

// Module 11369 (ClassificationEvidence)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import ClassificationMessageEvidenceDefault from "ClassificationMessageEvidence" /* 11370 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import native_mod from "native" /* 1177 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let native;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { cardShadow: native.generateBoxShadowStyle(native.FOUR_DP_ELEVATION_SHADOW_PARAMS), flaggedContent: obj2, sectionContainer: obj3 };
createStyles = createStyles.createStyles;
native = native_mod;
obj2 = { borderWidth: 1, borderRadius: nativeDefault.radii.sm, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, backgroundColor: nativeDefault.colors.CHANNELTEXTAREA_BACKGROUND, padding: 20 };
obj3 = { display: "flex", gap: nativeDefault.space.PX_8 };
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/safety_hub/native/ClassificationEvidence.tsx");

export default function ClassificationEvidence(flaggedContent) {
  let intl;
  let items;
  let items1;
  let obj4;
  flaggedContent = flaggedContent.flaggedContent;
  const tmp = closure_6();
  let tmp2 = null;
  if (0 !== flaggedContent.length) {
    const obj = { style: tmp.sectionContainer, children: items };
    const obj2 = { variant: "eyebrow", color: "text-default", children: intl.string(intl2.t.s64CMg) };
    const Text = Text_Text.Text;
    intl = intl2.intl;
    items = [React3(Text, obj2), ];
    const obj3 = { style: items1, children: React3(ClassificationMessageEvidenceDefault, obj4) };
    items1 = [, ];
    ({ flaggedContent: arr3[0], cardShadow: arr3[1] } = tmp);
    obj4 = { flaggedContent };
    items[1] = React3(View, obj3);
    tmp2 = hasOwnProperty(View, obj);
  }
  return tmp2;
};
