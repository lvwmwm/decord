// Module ID: 14555
// Function ID: 14556
// Name: BetaTag
// Dependencies: [19, 17, 7610, 21, 5009, 575, 5582, 1093, 5619, 1114, 2]
// Exports: default

// Module 14555 (BetaTag)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import ConstantsIOS from "ConstantsIOS" /* 1093 */;
import intl3 from "intl" /* 1114 */;
import LinearGradientDefault from "LinearGradient" /* 5582 */;
import Text_Text from "Text/Text" /* 5619 */;
import ColorConstants from "ColorConstants" /* 7610 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const Gradients = ColorConstants.Gradients;
const jsx = Fragment.jsx;
let obj = { container: obj2, text: { textTransform: "uppercase" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.lg, marginLeft: 8, paddingHorizontal: 8, justifyContent: "center" };
let closure_6 = createStyles.createStyles(obj);
let obj3 = { SMALL: "small", MEDIUM: "medium" };
let size = size_mod;
const result = size.fileFinishedImporting("design/void/BetaTag/native/BetaTag.tsx");

export default function BetaTag(gradient) {
  let intl;
  let intl2;
  let items;
  let items1;
  let items2;
  let items3;
  let style;
  let textStyle;
  let tmp3Result;
  ({ style, textStyle, size } = gradient);
  if (size === undefined) {
    size = obj3.MEDIUM;
  }
  let flag = gradient.gradient;
  if (flag === undefined) {
    flag = false;
  }
  const tmp2 = closure_6();
  let str = "text-xs/bold";
  if (obj3.SMALL !== size) {
    if (obj3.MEDIUM === size) {
      str = "text-sm/bold";
    }
  }
  if (flag) {
    const obj2 = { style: items, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, colors: Gradients.PREMIUM_TIER_2_TRI_COLOR, children: null };
    items = [tmp2.container, style];
    const tmp10 = LinearGradientDefault;
    obj3 = { variant: str, color: "text-overlay-light", style: items1, children: intl2.string(intl3.t.oW0eUd) };
    items1 = [tmp2.text, textStyle];
    const Text2 = Text_Text.Text;
    intl2 = intl3.intl;
    tmp3Result = tmp3(tmp10, obj2);
  } else {
    const obj = { style: items2, children: null };
    items2 = [tmp2.container, style];
    ({ variant: str, color: "text-overlay-light", style: items3, children: intl.string(intl3.t.oW0eUd) });
    items3 = [tmp2.text, textStyle];
    const Text = Text_Text.Text;
    intl = intl3.intl;
    tmp3Result = tmp3(View, obj);
  }
  return tmp3Result;
};
export const BetaSizes = obj3;
