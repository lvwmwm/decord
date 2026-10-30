// Module ID: 5619
// Function ID: 5620
// Name: Text/Text
// Dependencies: [109, 19, 17, 1083, 21, 5090, 575, 12, 5620, 5621, 5009, 5623, 5624, 5627, 1377, 5628, 299, 2]
// Exports: Heading

// Module 5619 (Text/Text)
import _modDef12 from "module_12" /* 12 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1083 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1377 */;
import TextVariants from "TextVariants" /* 5620 */;
import PlainTextExperimentContext from "PlainTextExperimentContext" /* 5623 */;
import useTypographyVariantRemap from "useTypographyVariantRemap" /* 5624 */;
import PlainTextEligibility from "PlainTextEligibility" /* 5627 */;
import _modDef5628 from "module_5628" /* 5628 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import useManaTextMigrationHighlight from "useManaTextMigrationHighlight" /* 5621 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

class Text {
  constructor(variant) {
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
      const tmp24 = _modDef5628;
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
        NativeText = flag ? closure_9 : Text2;
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
  }
}
let closure_3 = ["color", "fontSize", "fontFamily", "fontWeight", "fontStyle", "textAlign", "textAlignVertical", "verticalAlign", "textDecorationLine", "lineHeight", "letterSpacing"];
const Text2 = react_native.Text;
let closure_7 = react_native.unstable_TextAncestorContext;
const Fonts = Constants.Fonts;
const jsx = Fragment.jsx;
let closure_9 = ReanimatedRexport.createAnimatedComponent(Text2);
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
let closure_13 = { headline: obj3, nitro: obj4, primary: obj, code: obj6 };
let closure_14 = { headline: obj8, nitro: obj9 };
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
const result1 = size.fileFinishedImporting("design/components/Text/native/Text.tsx");

export const TextStyleSheet = result;
export { Text };
export function Heading(ref) {
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const obj = useTypographyVariantRemap;
  const typographyVariantRemap = obj.useTypographyVariantRemap(merged.variant, true);
  const merged1 = Object.assign(merged);
  return <Text ref={ref} accessibilityRole="header" variant={typographyVariantRemap} />;
}
