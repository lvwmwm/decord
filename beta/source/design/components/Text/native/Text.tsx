// Module ID: 4832
// Function ID: 4833
// Name: Text/Text
// Dependencies: [109, 19, 17, 1085, 21, 4566, 576, 12, 4833, 4834, 4836, 4841, 4842, 4845, 1365, 4846, 299, 2]

// Module 4832 (Text/Text)
import _modDef12 from "module_12" /* 12 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1085 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1365 */;
import TextVariants from "TextVariants" /* 4833 */;
import PlainTextExperimentContext from "PlainTextExperimentContext" /* 4841 */;
import useTypographyVariantRemap from "useTypographyVariantRemap" /* 4842 */;
import PlainTextEligibility from "PlainTextEligibility" /* 4845 */;
import _modDef4846 from "module_4846" /* 4846 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import useManaTextMigrationHighlight from "useManaTextMigrationHighlight" /* 4834 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let variant;

let closure_3 = ["color", "fontSize", "fontFamily", "fontWeight", "fontStyle", "textAlign", "textAlignVertical", "verticalAlign", "textDecorationLine", "lineHeight", "letterSpacing"];
const Text = react_native.Text;
let closure_7 = react_native.unstable_TextAncestorContext;
const Fonts = Constants.Fonts;
const jsx = Fragment.jsx;
let closure_9 = ReanimatedRexport.createAnimatedComponent(Text);
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
({ PRIMARY_NORMAL: obj3[400], PRIMARY_MEDIUM: obj3[500], PRIMARY_SEMIBOLD: obj3[600], PRIMARY_BOLD: obj3[700], PRIMARY_EXTRABOLD: obj3[800] } = Fonts);
let obj2 = { 800: null };
obj2[800] = Fonts.GINTO_NORD_EXTRA_BOLD;
let obj4 = { 700: null };
obj4[700] = Fonts.GINTO_DISCORD_NORD_BOLD;
let obj5 = { 400: null, 700: null };
({ CODE_NORMAL: obj6[400], CODE_BOLD: obj6[700] } = Fonts);
let obj7 = { 800: null };
obj7[800] = Fonts.GINTO_NORD_EXTRA_BOLD_ITALIC;
const obj9 = { 700: null, 900: null };
({ GINTO_DISCORD_NORD_BOLD_ITALIC: obj8[700], GINTO_DISCORD_NORD_BLACK_ITALIC: obj8[900] } = Fonts);
let closure_13 = { headline: obj2, nitro: obj4, primary: obj, code: obj5 };
let closure_14 = { headline: obj7, nitro: obj9 };
const fromEntries2 = Object.fromEntries;
const TextVariantsFlat = TextVariants.TextVariantsFlat;
const mapped = TextVariantsFlat.map((name) => {
  let fontStack;
  let result;
  let str;
  let weight;
  let tmp = null;
  if ("code" !== name.name) {
    let obj;
    items = [name.name, ];
    const obj2 = { fontSize: null, lineHeight: null, textTransform: str, includeFontPadding: false, letterSpacing: result };
    ({ size: obj4.fontSize, lineHeight: obj4.lineHeight } = name);
    str = "none";
    if (name.uppercase) {
      str = "uppercase";
    }
    ({ fontStack, weight } = name);
    const str1 = weight.toString();
    if (name.italic) {
      let obj7;
      let tmp6;
      if (closure_14[fontStack] != null) {
        tmp6 = tmp5[str1];
      }
      if (null != tmp6) {
        obj7 = { fontFamily: tmp6, fontStyle: "normal" };
        const obj3 = { fontFamily: tmp6, fontStyle: "normal" };
      } else {
        obj7 = { fontFamily: closure_13[fontStack][str1], fontStyle: "italic" };
      }
      obj = obj7;
    } else {
      obj = { fontFamily: closure_13[fontStack][str1] };
    }
    const merged = Object.assign(obj);
    result = undefined;
    if ("letterSpacing" in name) {
      result = name.letterSpacing / 10;
    }
    items[1] = obj2;
    tmp = items;
  }
  return tmp;
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
const forwardRefResult = react.forwardRef((variant, ref) => {
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
  let tmp21;
  let tmp5Result3;
  let verticalAlign;
  ({ color, style, children, lineClamp, includeFontPadding } = variant);
  variant = variant.variant;
  if (includeFontPadding === undefined) {
    includeFontPadding = false;
  }
  ({ ellipsizeMode, tabularNumbers } = variant);
  if (tabularNumbers === undefined) {
    tabularNumbers = false;
  }
  let flag = variant.animated;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = variant.experimental_useNativeText;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const merged = Object.assign(variant, Object.assign({ variant: 0, color: 0, style: 0, children: 0, lineClamp: 0, includeFontPadding: 0, ellipsizeMode: 0, tabularNumbers: 0, animated: 0, experimental_useNativeText: 0 }));
  const tmp3 = closure_16;
  if (color == null) {
    color = "text-default";
  }
  const tmp3Result = tmp3(color, tabularNumbers);
  const obj = PlainTextExperimentContext;
  const plainTextExperimentEnabled = obj.usePlainTextExperimentEnabled();
  const context = react.useContext(closure_7);
  const obj2 = useTypographyVariantRemap;
  const typographyVariantRemap = obj2.useTypographyVariantRemap(variant, false);
  items = [fromEntries2Result[typographyVariantRemap], tmp3Result.text, , ];
  const obj3 = useManaTextMigrationHighlight;
  const tmp11 = includeFontPadding ? items : closure_11;
  const manaTextMigrationHighlight = obj3.useManaTextMigrationHighlight(fromEntries2Result[typographyVariantRemap], style);
  const arraySpreadResult = HermesBuiltin.arraySpread(items, tmp11, 2);
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
    const obj4 = { text: children, color: color2, fontSize, fontFamily, fontWeight: StringResult, fontStyle, textAlign, textAlignVertical, textDecorationLine, lineHeight, letterSpacing, hasLetterSpacing: undefined !== letterSpacing, style: tmp21, numberOfLines: lineClamp, ellipsizeMode, allowFontScaling: true };
    StringResult = undefined;
    tmp21 = _objectWithoutProperties(plainTextEligibility, closure_3);
    const tmp22 = jsx;
    const tmp24 = _modDef4846;
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
    return tmp22(tmp24, obj4);
  } else {
    let NativeText;
    if (flag2) {
      NativeText = tmp5(299).NativeText;
    } else {
      NativeText = flag ? closure_9 : Text;
    }
    const obj5 = { style: items, numberOfLines: lineClamp, ellipsizeMode: str, allowFontScaling: true, ref, children };
    str = ellipsizeMode;
    const tmp15 = jsx;
    if (ellipsizeMode == null) {
      str = "tail";
    }
    const merged2 = Object.assign(merged);
    return tmp15(NativeText, obj5);
  }
});
const forwardRefResult1 = react.forwardRef((variant, ref) => {
  const obj = useTypographyVariantRemap;
  const typographyVariantRemap = obj.useTypographyVariantRemap(variant.variant, true);
  const merged = Object.assign(variant);
  return <forwardRefResult ref={arg1} accessibilityRole="header" variant={typographyVariantRemap} />;
});
const result1 = size.fileFinishedImporting("design/components/Text/native/Text.tsx");
const Text_export = forwardRefResult;

export const TextStyleSheet = result;
export { Text_export as Text };
export const Heading = forwardRefResult1;
