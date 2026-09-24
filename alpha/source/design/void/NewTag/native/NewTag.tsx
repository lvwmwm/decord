// Module ID: 14458
// Function ID: 14459
// Name: NewTag
// Dependencies: [19, 17, 1074, 21, 4829, 576, 5285, 4825, 1115, 2]
// Exports: default

// Module 14458 (NewTag)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4825 */;
import LinearGradientDefault from "LinearGradient" /* 5285 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Platform } = get_ActivityIndicator);
const HorizontalGradient = fn(1074).HorizontalGradient;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let obj2 = { tagContainer: { height: "auto", backgroundColor: nativeDefault.unsafe_rawColors.RED_400, justifyContent: "center", alignItems: "center", paddingHorizontal: 4, marginBottom: 2, borderRadius: nativeDefault.radii.round }, tagText: { textTransform: "uppercase" } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/NewTag/native/NewTag.tsx");

export default function NewTag(color) {
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
    const obj2 = { style: null, start: null, end: null, colors: null, children: null };
    const obj4 = { borderRadius: sm, marginLeft: nativeDefault.space.PX_4 };
    obj2.style = obj4;
    ({ START: obj3.start, END: obj3.end } = HorizontalGradient);
    obj2.colors = colors;
    const obj5 = { style: null, children: null };
    const items1 = [tmp6.tagContainer, containerStyle];
    obj5.style = items1;
    const obj6 = { variant, color: str };
    const merged1 = Object.assign(merged);
    const items2 = [tmp6.tagText, textStyle];
    obj6.style = items2;
    const intl2 = util.intl;
    obj6.children = intl2.string(util.t.y2b7CA);
    obj5.children = tmp7(Text_Text.Text, obj6);
    obj2.children = tmp7(React3, obj5);
    let tmp7Result = tmp7(LinearGradientDefault, obj2);
  } else {
    const obj = { style: null, children: null };
    const items3 = [tmp6.tagContainer, containerStyle];
    obj.style = items3;
    const obj11 = { variant, color: str };
    const merged2 = Object.assign(merged);
    const items4 = [tmp6.tagText, textStyle];
    obj11.style = items4;
    const intl = util.intl;
    obj11.children = intl.string(util.t.y2b7CA);
    obj.children = tmp7(Text_Text.Text, obj11);
    tmp7Result = tmp7(React3, obj);
  }
  return tmp7Result;
};
