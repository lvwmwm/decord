// Module ID: 13636
// Function ID: 13637
// Name: NewTag
// Dependencies: [19, 17, 1074, 21, 4836, 576, 5293, 4832, 1115, 2]
// Exports: default

// Module 13636 (NewTag)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl3 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let Platform;
let c3;
let obj2;
({ View: c3, Platform } = react_native);
const HorizontalGradient = Constants.HorizontalGradient;
const jsx = Fragment.jsx;
let obj = { tagContainer: obj2, tagText: { textTransform: "uppercase" } };
obj2 = { height: "auto", backgroundColor: nativeDefault.unsafe_rawColors.RED_400, justifyContent: "center", alignItems: "center", paddingHorizontal: 4, marginBottom: 2, borderRadius: nativeDefault.radii.round };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("design/void/NewTag/native/NewTag.tsx");

export default function NewTag(color) {
  let containerStyle;
  let intl;
  let intl2;
  let items2;
  let items3;
  let items4;
  let obj4;
  let textStyle;
  let tmp7Result;
  let variant;
  ({ containerStyle, textStyle, variant } = color);
  if (variant === undefined) {
    variant = "heading-sm/semibold";
  }
  let str = color.color;
  if (str === undefined) {
    str = "text-overlay-light";
  }
  let flag = color.gradient;
  if (flag === undefined) {
    flag = false;
  }
  let sm = color.borderRadius;
  if (sm === undefined) {
    sm = nativeDefault.radii.sm;
  }
  let colors = color.colors;
  if (colors === undefined) {
    const items = [nativeDefault.unsafe_rawColors.PREMIUM_TIER_2_PURPLE, nativeDefault.unsafe_rawColors.PREMIUM_TIER_2_PINK];
    colors = items;
  }
  const merged = Object.assign(color, Object.assign({ containerStyle: 0, textStyle: 0, variant: 0, color: 0, gradient: 0, borderRadius: 0, colors: 0 }));
  const tmp6 = closure_6();
  if (flag) {
    const obj2 = { style: obj4, start: null, end: null, colors, children: null };
    obj4 = { borderRadius: sm, marginLeft: nativeDefault.space.PX_4 };
    ({ START: obj3.start, END: obj3.end } = HorizontalGradient);
    const items1 = [tmp6.tagContainer, containerStyle];
    const tmp17 = LinearGradientDefault;
    ({ variant, color: str, style: items2, children: intl2.string(intl3.t.y2b7CA) });
    const Text2 = Text_Text.Text;
    const merged1 = Object.assign(merged);
    items2 = [tmp6.tagText, textStyle];
    intl2 = intl3.intl;
    tmp7Result = tmp7(tmp17, obj2);
  } else {
    const obj = { style: items3, children: null };
    items3 = [tmp6.tagContainer, containerStyle];
    ({ variant, color: str, style: items4, children: intl.string(intl3.t.y2b7CA) });
    const Text = Text_Text.Text;
    const merged2 = Object.assign(merged);
    items4 = [tmp6.tagText, textStyle];
    intl = intl3.intl;
    tmp7Result = tmp7(_false, obj);
  }
  return tmp7Result;
};
