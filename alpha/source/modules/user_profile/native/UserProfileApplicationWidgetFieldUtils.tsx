// Module ID: 12255
// Function ID: 12256
// Name: UserProfileApplicationWidgetFieldUtils
// Dependencies: [19, 17, 21, 5306, 575, 5944, 1380, 5929, 1113, 12256, 12257, 6020, 2]
// Exports: FieldText, formatDurationNarrow, useEmojiOverflowStyle

// Module 12255 (UserProfileApplicationWidgetFieldUtils)
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1113 */;
import PlatformUtils from "PlatformUtils" /* 1380 */;
import useFontScale from "useFontScale" /* 5944 */;
import FastImageDefault from "FastImage" /* 6020 */;
import ApplicationWidgetMarkupUtils from "ApplicationWidgetMarkupUtils" /* 12257 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let tmp;
const Text_Text = tmp(5929);
({ PixelRatio: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { fieldTextRow: obj2, fieldIcon: { width: 16, height: 16 } };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_7 = createStyles.createStyles(obj);
createStyles = createStyles_mod;
let closure_8 = createStyles.createStyles((paddingTop) => ({ text: { paddingTop, marginTop: -paddingTop } }));
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileApplicationWidgetFieldUtils.tsx");

export function useEmojiOverflowStyle(arg0) {
  const obj = useFontScale;
  const fontScale = obj.useFontScale();
  let num = 0;
  const obj2 = PlatformUtils;
  if (obj2.isIOS()) {
    num = _false.roundToNearestPixel(Text_Text.TextStyleSheet[arg0].fontSize * fontScale * 0.25);
  }
  let text;
  if (num > 0) {
    text = closure_8(num).text;
  }
  return text;
}
export function formatDurationNarrow(result1) {
  let num = 0;
  if (Number.isFinite(result1)) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.max(0, Math.floor(result1));
  }
  const rounded = Math.floor(num / 3600000);
  const result = Math.floor(num / 60000) % 60;
  result1 = Math.floor(num / 1000) % 60;
  const items = [];
  if (rounded > 0) {
    const push = items.push;
    const intl = intl4.intl;
    const obj = { hours: rounded };
    push(intl.formatToPlainString(intl4.t.rhY1Rs, obj));
  }
  if (0 < result) {
    const push2 = items.push;
    const intl2 = intl4.intl;
    const obj2 = { minutes: result };
    push2(intl2.formatToPlainString(intl4.t["XIGt+W"], obj2));
  }
  let tmp10 = result1 > 0;
  if (0 >= result1) {
    tmp10 = 0 === items.length;
  }
  if (tmp10) {
    const push3 = items.push;
    const intl3 = intl4.intl;
    const obj3 = { seconds: result1 };
    push3(intl3.formatToPlainString(intl4.t.pyvjRp, obj3));
  }
  return items.join(" ");
}
export function FieldText(arg0) {
  let color;
  let field;
  let items;
  let obj6;
  let obj8;
  let skeletonWidthChars;
  let text;
  let tmp2Result;
  let variant;
  ({ field, variant } = arg0);
  ({ color, skeletonWidthChars } = arg0);
  const tmp = closure_7();
  const obj = useFontScale;
  const fontScale = obj.useFontScale();
  let num = 0;
  const obj2 = PlatformUtils;
  if (obj2.isIOS()) {
    num = _false.roundToNearestPixel(tmp2(5929).TextStyleSheet[variant].fontSize * fontScale * 0.25);
  }
  if (num > 0) {
    text = closure_8(num).text;
  }
  let tmp6 = null;
  if ("hidden" !== field.status) {
    let tmp11Result;
    if ("skeleton" === field.status) {
      const obj3 = { variant, widthChars: skeletonWidthChars };
      tmp11Result = hasOwnProperty(tmp2(12256).TextSkeleton, obj3);
    } else {
      const obj4 = { style: tmp.fieldTextRow, children: items };
      const obj5 = { variant, color, lineClamp: 2, style: text, children: tmp2Result.parseApplicationWidgetText(field.text, obj6) };
      const Text = tmp2(5929).Text;
      obj6 = { linkVariant: variant };
      tmp2Result = ApplicationWidgetMarkupUtils;
      items = [hasOwnProperty(Text, obj5), ];
      let tmp13Result = null != field.icon;
      const tmp11 = metroRequire;
      const tmp12 = React3;
      const tmp13 = hasOwnProperty;
      if (tmp13Result) {
        const obj7 = { source: obj8, style: tmp.fieldIcon, resizeMode: "contain" };
        obj8 = { uri: field.icon.url };
        tmp13Result = tmp13(FastImageDefault, obj7);
      }
      items[1] = tmp13Result;
      tmp11Result = tmp11(tmp12, obj4);
    }
    tmp6 = tmp11Result;
  }
  return tmp6;
}
