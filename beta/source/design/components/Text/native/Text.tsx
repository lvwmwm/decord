// Module ID: 5088
// Function ID: 5089
// Name: Text/Text
// Dependencies: [109, 19, 17, 1096, 21, 4850, 587, 12, 5089, 5090, 5092, 558, 5097, 5098, 5101, 1383, 5102, 299, 576, 2]

// Module 5088 (Text/Text)
import _modDef12 from "module_12" /* 12 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1096 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1383 */;
import TextVariants from "TextVariants" /* 5089 */;
import PlainTextExperimentContext from "PlainTextExperimentContext" /* 5097 */;
import useTypographyVariantRemap from "useTypographyVariantRemap" /* 5098 */;
import PlainTextEligibility from "PlainTextEligibility" /* 5101 */;
import _modDef5102 from "module_5102" /* 5102 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4850 */;
import useManaTextMigrationHighlight from "useManaTextMigrationHighlight" /* 5090 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_3 = ["variant", "color", "style", "children", "lineClamp", "includeFontPadding", "ellipsizeMode", "tabularNumbers", "animated", "experimental_useNativeText", "ref"];
let closure_4 = ["color", "fontSize", "fontFamily", "fontWeight", "fontStyle", "textAlign", "textAlignVertical", "verticalAlign", "textDecorationLine", "lineHeight", "letterSpacing"];
let closure_5 = ["color", "fontSize", "fontFamily", "fontWeight", "fontStyle", "textAlign", "textAlignVertical", "verticalAlign", "textDecorationLine", "lineHeight", "letterSpacing"];
let closure_6 = ["ref"];
const Text = react_native.Text;
let closure_10 = react_native.unstable_TextAncestorContext;
const Fonts = Constants.Fonts;
const jsx = Fragment.jsx;
let closure_12 = ReanimatedRexport.createAnimatedComponent(Text);
let items = [{ includeFontPadding: true }];
let closure_14 = [];
const keys = Object.keys(nativeDefault.colors);
let closure_15 = fromEntries(keys.map((item) => {
  items = [, ];
  const obj = _modDef12;
  items[0] = obj.kebabCase(item);
  items[1] = item;
  return items;
}));
let obj = { 400: null, 500: null, 600: null, 700: null, 800: null };
({ PRIMARY_NORMAL: obj2[400], PRIMARY_MEDIUM: obj2[500], PRIMARY_SEMIBOLD: obj2[600], PRIMARY_BOLD: obj2[700], PRIMARY_EXTRABOLD: obj2[800] } = Fonts);
let obj3 = { 800: null };
obj3[800] = Fonts.GINTO_NORD_EXTRA_BOLD;
let obj4 = { 700: null };
obj4[700] = Fonts.GINTO_DISCORD_NORD_BOLD;
const obj6 = { 400: null, 700: null };
({ CODE_NORMAL: obj5[400], CODE_BOLD: obj5[700] } = Fonts);
const obj8 = { 800: null };
obj8[800] = Fonts.GINTO_NORD_EXTRA_BOLD_ITALIC;
const obj9 = { 700: null, 900: null };
({ GINTO_DISCORD_NORD_BOLD_ITALIC: obj7[700], GINTO_DISCORD_NORD_BLACK_ITALIC: obj7[900] } = Fonts);
let closure_16 = { headline: obj3, nitro: obj4, primary: obj, code: obj6 };
let closure_17 = { headline: obj8, nitro: obj9 };
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
      if (closure_17[fontStack] != null) {
        tmp6 = tmp5[str1];
      }
      if (null != tmp6) {
        obj7 = { fontFamily: tmp6, fontStyle: "normal" };
        const obj3 = { fontFamily: tmp6, fontStyle: "normal" };
      } else {
        obj7 = { fontFamily: closure_16[fontStack][str1], fontStyle: "italic" };
      }
      obj = obj7;
    } else {
      obj = { fontFamily: closure_16[fontStack][str1] };
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
let closure_19 = createStyles.createStyles((arg0, arg1) => {
  let tmp;
  if ("none" !== arg0) {
    tmp = nativeDefault.colors[closure_15[arg0]];
  }
  const text = { color: tmp, fontVariant: items };
  items = undefined;
  if (arg1) {
    items = ["tabular-nums"];
  }
  return { text };
});
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function Text(variant) {
  let StringResult;
  let animated;
  let children;
  let color;
  let color2;
  let ellipsizeMode;
  let experimental_useNativeText;
  let fontFamily;
  let fontSize;
  let fontStyle;
  let fontWeight;
  let includeFontPadding;
  let letterSpacing;
  let lineClamp;
  let lineHeight;
  let ref;
  let str;
  let style;
  let tabularNumbers;
  let textAlign;
  let textAlignVertical;
  let textDecorationLine;
  let tmp10Result3;
  let tmp2Result;
  let verticalAlign;
  ({ color, style, children, lineClamp, includeFontPadding, ellipsizeMode, tabularNumbers, animated, experimental_useNativeText, ref } = variant);
  variant = variant.variant;
  const tmp3 = _objectWithoutProperties(variant, closure_3);
  const tmp2 = _objectWithoutProperties;
  const tmp4 = undefined !== includeFontPadding && includeFontPadding;
  const tmp7 = closure_19;
  if (color == null) {
    color = "text-default";
  }
  const tmp8 = undefined !== tabularNumbers && tabularNumbers;
  const tmp7Result = tmp7(color, tmp8);
  const obj = PlainTextExperimentContext;
  const plainTextExperimentEnabled = obj.usePlainTextExperimentEnabled();
  const context = react.useContext(closure_10);
  const obj2 = useTypographyVariantRemap;
  const typographyVariantRemap = obj2.useTypographyVariantRemap(variant, false);
  items = [fromEntries2Result[typographyVariantRemap], tmp7Result.text, , ];
  const obj3 = useManaTextMigrationHighlight;
  const tmp16 = tmp4 ? items : closure_14;
  const manaTextMigrationHighlight = obj3.useManaTextMigrationHighlight(fromEntries2Result[typographyVariantRemap], style);
  const arraySpreadResult = HermesBuiltin.arraySpread(items, tmp16, 2);
  items[arraySpreadResult] = style;
  items[arraySpreadResult + 1] = manaTextMigrationHighlight;
  const element = { animated: tmp5, children, enabled: plainTextExperimentEnabled, experimentalUseNativeText: tmp6, hasRef: null != ref, hasTextAncestor: context, isIOS: tmp10Result3.isIOS(), props: tmp3, style: items };
  const getPlainTextEligibility = PlainTextEligibility.getPlainTextEligibility;
  PlainTextEligibility;
  tmp10Result3 = utils_PlatformUtils;
  const plainTextEligibility = getPlainTextEligibility(element);
  const tmp10Result4 = PlainTextEligibility;
  if (tmp10Result4.isPlainTextEligible(plainTextEligibility)) {
    ({ fontWeight, textAlignVertical, verticalAlign, letterSpacing } = plainTextEligibility);
    ({ color: color2, fontSize, fontFamily, fontStyle, textAlign, textDecorationLine, lineHeight } = plainTextEligibility);
    const obj4 = { text: children, color: color2, fontSize, fontFamily, fontWeight: StringResult, fontStyle, textAlign, textAlignVertical, textDecorationLine, lineHeight, letterSpacing, hasLetterSpacing: undefined !== letterSpacing, style: tmp2Result, numberOfLines: lineClamp, ellipsizeMode, allowFontScaling: true };
    StringResult = undefined;
    tmp2Result = tmp2(plainTextEligibility, closure_4);
    const tmp26 = jsx;
    const tmp28 = _modDef5102;
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
    const merged = Object.assign(tmp3);
    return tmp26(tmp28, obj4);
  } else {
    let NativeText;
    if (undefined !== experimental_useNativeText && experimental_useNativeText) {
      NativeText = tmp10(299).NativeText;
    } else {
      NativeText = tmp5 ? closure_12 : Text;
    }
    const obj5 = { style: items, numberOfLines: lineClamp, ellipsizeMode: str, allowFontScaling: true, ref, children };
    str = ellipsizeMode;
    const tmp20 = jsx;
    if (ellipsizeMode == null) {
      str = "tail";
    }
    const merged1 = Object.assign(tmp3);
    return tmp20(NativeText, obj5);
  }
}) : (function Text(variant) {
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
  const merged = Object.assign(variant, Object.assign({ variant: 0, color: 0, style: 0, children: 0, lineClamp: 0, includeFontPadding: 0, ellipsizeMode: 0, tabularNumbers: 0, animated: 0, experimental_useNativeText: 0, ref: 0 }));
  const tmp3 = closure_19;
  if (color == null) {
    color = "text-default";
  }
  const tmp3Result = tmp3(color, tabularNumbers);
  const obj = PlainTextExperimentContext;
  const plainTextExperimentEnabled = obj.usePlainTextExperimentEnabled();
  const context = react.useContext(closure_10);
  const obj2 = useTypographyVariantRemap;
  const typographyVariantRemap = obj2.useTypographyVariantRemap(variant, false);
  items = [fromEntries2Result[typographyVariantRemap], tmp3Result.text, , ];
  const obj3 = useManaTextMigrationHighlight;
  const tmp11 = includeFontPadding ? items : closure_14;
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
    tmp21 = _objectWithoutProperties(plainTextEligibility, closure_5);
    const tmp22 = jsx;
    const tmp24 = _modDef5102;
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
      NativeText = flag ? closure_12 : Text;
    }
    const obj5 = { style: items, numberOfLines: lineClamp, ellipsizeMode: str, allowFontScaling: true, ref: variant.ref, children };
    str = ellipsizeMode;
    const tmp15 = jsx;
    if (ellipsizeMode == null) {
      str = "tail";
    }
    const merged2 = Object.assign(merged);
    return tmp15(NativeText, obj5);
  }
});
let closure_20 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function Heading(ref) {
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(7);
  if (cResult[0] !== ref) {
    const tmp8 = _objectWithoutProperties(ref, closure_6);
    cResult[0] = ref;
    cResult[1] = tmp8;
    cResult[2] = ref.ref;
    tmp5 = ref;
    tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const tmpResult = useTypographyVariantRemap;
  const typographyVariantRemap = tmpResult.useTypographyVariantRemap(tmp4.variant, true);
  if (cResult[3] === tmp4) {
    if (cResult[4] === tmp5) {
      let tmp10;
      if (cResult[5] === typographyVariantRemap) {
        tmp10 = cResult[6];
      }
      return tmp10;
    }
  }
  const merged = Object.assign(tmp4);
  const tmp12 = <closure_20 ref={tmp5} accessibilityRole="header" variant={typographyVariantRemap} />;
  cResult[3] = tmp4;
  cResult[4] = tmp5;
  cResult[5] = typographyVariantRemap;
  cResult[6] = tmp12;
  tmp10 = tmp12;
}) : (function Heading(ref) {
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const obj = useTypographyVariantRemap;
  const typographyVariantRemap = obj.useTypographyVariantRemap(merged.variant, true);
  const merged1 = Object.assign(merged);
  return <closure_20 ref={ref} accessibilityRole="header" variant={typographyVariantRemap} />;
});
const result1 = size.fileFinishedImporting("design/components/Text/native/Text.tsx");
const Text_export = tmp5;

export const TextStyleSheet = result;
export { Text_export as Text };
export const Heading = tmp6;
