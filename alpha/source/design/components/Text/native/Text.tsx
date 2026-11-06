// Module ID: 5781
// Function ID: 5782
// Name: Text/Text
// Dependencies: [109, 19, 17, 1083, 21, 1652, 575, 12, 5782, 5783, 5170, 5785, 5786, 1357, 5787, 299, 2]
// Exports: Heading

// Module 5781 (Text/Text)
import _modDef12 from "module_12" /* 12 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1083 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1357 */;
import TextVariants from "TextVariants" /* 5782 */;
import PlainTextExperimentContext from "PlainTextExperimentContext" /* 5785 */;
import PlainTextEligibility from "PlainTextEligibility" /* 5786 */;
import _modDef5787 from "module_5787" /* 5787 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import module_1652 from "module_1652" /* 1652 */;
import useManaTextMigrationHighlight from "useManaTextMigrationHighlight" /* 5783 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

class Text {
  constructor(animated) {
    let StringResult;
    let children;
    let color;
    let color2;
    let ellipsizeMode;
    let fontFamily;
    let fontSize;
    let fontStyle;
    let fontWeight;
    let includeFontPadding;
    let letterSpacing;
    let lineClamp;
    let lineHeight;
    let str;
    let style;
    let tabularNumbers;
    let textAlign;
    let textAlignVertical;
    let textDecorationLine;
    let tmp20;
    let tmp5Result3;
    let variant;
    let verticalAlign;
    ({ variant, color, style, children, lineClamp, includeFontPadding } = animated);
    if (includeFontPadding === undefined) {
      includeFontPadding = false;
    }
    ({ ellipsizeMode, tabularNumbers } = animated);
    if (tabularNumbers === undefined) {
      tabularNumbers = false;
    }
    let flag = animated.animated;
    if (flag === undefined) {
      flag = false;
    }
    let flag2 = animated.experimental_useNativeText;
    if (flag2 === undefined) {
      flag2 = false;
    }
    const merged = Object.assign(animated, Object.assign({ variant: 0, color: 0, style: 0, children: 0, lineClamp: 0, includeFontPadding: 0, ellipsizeMode: 0, tabularNumbers: 0, animated: 0, experimental_useNativeText: 0, ref: 0 }));
    const tmp3 = closure_16;
    if (color == null) {
      color = "text-default";
    }
    const tmp3Result = tmp3(color, tabularNumbers);
    const obj = PlainTextExperimentContext;
    const plainTextExperimentEnabled = obj.usePlainTextExperimentEnabled();
    const context = react.useContext(closure_7);
    items = [fromEntries2Result[variant], tmp3Result.text, , ];
    const obj2 = useManaTextMigrationHighlight;
    const tmp10 = includeFontPadding ? items : closure_11;
    const manaTextMigrationHighlight = obj2.useManaTextMigrationHighlight(fromEntries2Result[variant], style);
    const arraySpreadResult = HermesBuiltin.arraySpread(items, tmp10, 2);
    items[arraySpreadResult] = style;
    items[arraySpreadResult + 1] = manaTextMigrationHighlight;
    const element = { animated: flag, children, enabled: plainTextExperimentEnabled, experimentalUseNativeText: flag2, hasRef: null != ref, hasTextAncestor: context, isIOS: tmp5Result3.isIOS(), props: merged, style: items };
    const getPlainTextEligibility = PlainTextEligibility.getPlainTextEligibility;
    PlainTextEligibility;
    tmp5Result3 = utils_PlatformUtils;
    const plainTextEligibility = getPlainTextEligibility(element);
    const tmp5Result4 = PlainTextEligibility;
    if (tmp5Result4.isPlainTextEligible(plainTextEligibility)) {
      ({ fontWeight, textAlignVertical, verticalAlign, letterSpacing } = plainTextEligibility);
      ({ color: color2, fontSize, fontFamily, fontStyle, textAlign, textDecorationLine, lineHeight } = plainTextEligibility);
      const obj3 = { text: children, color: color2, fontSize, fontFamily, fontWeight: StringResult, fontStyle, textAlign, textAlignVertical, textDecorationLine, lineHeight, letterSpacing, hasLetterSpacing: undefined !== letterSpacing, style: tmp20, numberOfLines: lineClamp, ellipsizeMode, allowFontScaling: true };
      StringResult = undefined;
      tmp20 = _objectWithoutProperties(plainTextEligibility, closure_3);
      const tmp21 = jsx;
      const tmp23 = _modDef5787;
      if (null != fontWeight) {
        const _String = String;
        StringResult = String(fontWeight);
      }
      if (null != verticalAlign) {
        let str2 = "center";
        if ("middle" !== verticalAlign) {
          str2 = verticalAlign;
        }
        textAlignVertical = str2;
      }
      if (ellipsizeMode == null) {
        ellipsizeMode = "tail";
      }
      const merged1 = Object.assign(merged);
      return tmp21(tmp23, obj3);
    } else {
      let NativeText;
      if (flag2) {
        NativeText = tmp5(299).NativeText;
      } else {
        NativeText = flag ? closure_9 : Text2;
      }
      const obj4 = { style: items, numberOfLines: lineClamp, ellipsizeMode: str, allowFontScaling: true, ref: animated.ref, children };
      str = ellipsizeMode;
      const tmp14 = jsx;
      if (ellipsizeMode == null) {
        str = "tail";
      }
      const merged2 = Object.assign(merged);
      return tmp14(NativeText, obj4);
    }
  }
}
let closure_3 = ["color", "fontSize", "fontFamily", "fontWeight", "fontStyle", "textAlign", "textAlignVertical", "verticalAlign", "textDecorationLine", "lineHeight", "letterSpacing"];
const Text2 = react_native.Text;
let closure_7 = react_native.unstable_TextAncestorContext;
const Fonts = Constants.Fonts;
const jsx = Fragment.jsx;
let closure_9 = module_1652.createAnimatedComponent(Text2);
let items = [{ includeFontPadding: true }];
let closure_11 = [];
const keys = Object.keys(nativeDefault.colors);
let closure_12 = fromEntries(keys.map((item) => {
  items = [, ];
  const obj = _modDef12;
  items[0] = obj.kebabCase(item);
  items[1] = item;
  return items;
}));
let obj = { 400: null, 500: null, 600: null, 700: null, 800: null };
({ PRIMARY_NORMAL: obj2[400], PRIMARY_MEDIUM: obj2[500], PRIMARY_SEMIBOLD: obj2[600], PRIMARY_BOLD: obj2[700], PRIMARY_EXTRABOLD: obj2[800] } = Fonts);
let obj3 = { 700: null };
obj3[700] = Fonts.GINTO_DISCORD_NORD_BOLD;
const obj6 = { 400: null, 700: null };
({ CODE_NORMAL: obj4[400], CODE_BOLD: obj4[700] } = Fonts);
const obj7 = { 700: null, 900: null };
({ GINTO_DISCORD_NORD_BOLD_ITALIC: obj5[700], GINTO_DISCORD_NORD_BLACK_ITALIC: obj5[900] } = Fonts);
let closure_13 = { nitro: obj3, primary: obj, code: obj6 };
let closure_14 = { nitro: obj7 };
const fromEntries2 = Object.fromEntries;
const TextVariantsFlat = TextVariants.TextVariantsFlat;
const mapped = TextVariantsFlat.map((fontSize) => {
  let fontStack;
  let obj4;
  let result;
  let str;
  let weight;
  const letterSpacing = fontSize.letterSpacing;
  items = [fontSize.name, ];
  const obj = { fontSize: fontSize.size, lineHeight: fontSize.lineHeight, textTransform: str, includeFontPadding: false, letterSpacing: result };
  str = "none";
  if (fontSize.uppercase) {
    str = "uppercase";
  }
  ({ fontStack, weight } = fontSize);
  const str1 = weight.toString();
  if (fontSize.italic) {
    let obj3;
    let tmp6;
    if (closure_14[fontStack] != null) {
      tmp6 = tmp4[str1];
    }
    if (null != tmp6) {
      obj3 = { fontFamily: tmp6, fontStyle: "normal" };
      const obj2 = { fontFamily: tmp6, fontStyle: "normal" };
    } else {
      obj3 = { fontFamily: closure_13[fontStack][str1], fontStyle: "italic" };
    }
    obj4 = obj3;
  } else {
    obj4 = { fontFamily: closure_13[fontStack][str1] };
  }
  const merged = Object.assign(obj4);
  result = undefined;
  if (null != letterSpacing) {
    result = letterSpacing / 10;
  }
  items[1] = obj;
  return items;
});
const fromEntries2Result = fromEntries2(mapped.filter(Boolean));
let result = useManaTextMigrationHighlight.withManaTextMigrationHighlight(fromEntries2Result);
let closure_16 = createStyles.createStyles((arg0, arg1) => {
  let tmp;
  if ("none" !== arg0) {
    tmp = nativeDefault.colors[closure_12[arg0]];
  }
  const text = { color: tmp, fontVariant: items };
  items = undefined;
  if (arg1) {
    items = ["tabular-nums"];
  }
  return { text };
});
const result1 = size.fileFinishedImporting("design/components/Text/native/Text.tsx");

export const TextStyleSheet = result;
export { Text };
export function Heading(ref) {
  const merged = Object.assign(Object.assign(ref, Object.assign({ ref: 0 })));
  return <Text ref={arg0.ref} accessibilityRole="header" />;
}
