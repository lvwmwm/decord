// Module ID: 4126
// Function ID: 34322
// Name: Text
// Dependencies: [31, 27, 482, 33, 3991, 689, 22, 4127, 4128, 4130, 290, 4135, 2]

// Module 4126 (Text)
import importAllResult from "result";
import { Text } from "get ActivityIndicator";
import { Fonts } from "sum";
import { jsx } from "jsxProd";
import { TextVariantsFlat } from "TEXT_VARIANT";
import useManaTextMigrationHighlight from "useManaTextMigrationHighlight";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "module_3991";

const require = arg1;
let closure_5 = require("module_3991").createAnimatedComponent(Text);
const keys = Object.keys(require("_createForOfIteratorHelperLoose").colors);
let closure_6 = Object.fromEntries(keys.map((arg0) => {
  const items = [importDefault(22).kebabCase(arg0), arg0];
  return items;
}));
let closure_7 = { [400]: Fonts.DISPLAY_NORMAL, [500]: Fonts.DISPLAY_MEDIUM, [600]: Fonts.DISPLAY_SEMIBOLD, [700]: Fonts.DISPLAY_BOLD, [800]: Fonts.DISPLAY_EXTRABOLD };
let closure_8 = { [400]: Fonts.PRIMARY_NORMAL, [500]: Fonts.PRIMARY_MEDIUM, [600]: Fonts.PRIMARY_SEMIBOLD, [700]: Fonts.PRIMARY_BOLD };
let closure_9 = { [800]: Fonts.GINTO_NORD_EXTRA_BOLD };
let closure_10 = { [400]: Fonts.CODE_NORMAL, [700]: Fonts.CODE_BOLD };
const mapped = TextVariantsFlat.map((name) => {
  let fontStack;
  let weight;
  let tmp = null;
  if ("code" !== name.name) {
    const items = [name.name, ];
    let obj = {};
    ({ size: obj2.fontSize, lineHeight: obj2.lineHeight } = name);
    let str = "none";
    if (name.uppercase) {
      str = "uppercase";
    }
    obj.textTransform = str;
    ({ weight, fontStack } = name);
    obj = { headline: closure_9, display: closure_7, primary: closure_8, code: closure_10 };
    obj.fontFamily = obj[fontStack][weight.toString(weight)];
    obj.includeFontPadding = false;
    let result;
    if ("letterSpacing" in name) {
      result = name.letterSpacing / 10;
    }
    obj.letterSpacing = result;
    items[1] = obj;
    tmp = items;
  }
  return tmp;
});
const fromEntriesResult = Object.fromEntries(mapped.filter(Boolean));
let result = useManaTextMigrationHighlight.withManaTextMigrationHighlight(fromEntriesResult);
let closure_12 = _createForOfIteratorHelperLoose.createStyles((arg0, arg1) => {
  let obj = {};
  obj = {};
  let tmp;
  if ("none" !== arg0) {
    tmp = importDefault(689).colors[table[arg0]];
  }
  obj.color = tmp;
  let items;
  if (arg1) {
    items = ["tabular-nums"];
  }
  obj.fontVariant = items;
  obj.text = obj;
  return obj;
});
const forwardRefResult = importAllResult.forwardRef((animated, ref) => {
  let color;
  let ellipsizeMode;
  let includeFontPadding;
  let lineClamp;
  let style;
  let tabularNumbers;
  let variant;
  ({ color, style, includeFontPadding } = animated);
  ({ variant, lineClamp } = animated);
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
  let obj = { variant: 0, color: 0, style: 0, lineClamp: 0, includeFontPadding: 0, ellipsizeMode: 0, tabularNumbers: 0, animated: 0, experimental_useNativeText: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(animated, obj);
  let str = "text-default";
  if (null != color) {
    str = color;
  }
  if (flag2) {
    let NativeText = require(290) /* NativeText */.NativeText;
  } else {
    NativeText = flag ? closure_5 : Text;
  }
  const tmp3 = closure_12;
  const tmp3Result = closure_12(str, tabularNumbers);
  const typographyVariantRemap = require(4135) /* useTypographyVariantRemap */.useTypographyVariantRemap(variant, false);
  const obj2 = require(4135) /* useTypographyVariantRemap */;
  obj = {};
  const items = [dependencyMap[typographyVariantRemap], tmp3Result.text, , ];
  const manaTextMigrationHighlight = require(4128) /* useManaTextMigrationHighlight */.useManaTextMigrationHighlight(dependencyMap[typographyVariantRemap], style);
  if (includeFontPadding) {
    obj = { includeFontPadding };
    const items1 = [obj];
    let items2 = items1;
  } else {
    items2 = [];
  }
  const arraySpreadResult = HermesBuiltin.arraySpread(items2, 2);
  items[arraySpreadResult] = style;
  items[arraySpreadResult + 1] = manaTextMigrationHighlight;
  obj.style = items;
  obj.numberOfLines = lineClamp;
  let str2 = "tail";
  if (null != ellipsizeMode) {
    str2 = ellipsizeMode;
  }
  obj.ellipsizeMode = str2;
  obj.allowFontScaling = true;
  obj.ref = ref;
  const merged1 = Object.assign(merged);
  return <NativeText />;
});
const forwardRefResult1 = importAllResult.forwardRef((variant, ref) => {
  let obj = require(4135) /* useTypographyVariantRemap */;
  obj = { ref };
  const typographyVariantRemap = obj.useTypographyVariantRemap(variant.variant, true);
  const merged = Object.assign(variant);
  obj["accessibilityRole"] = "header";
  obj["variant"] = typographyVariantRemap;
  return <closure_13 ref={arg1} />;
});
const result1 = require("sum").fileFinishedImporting("design/components/Text/native/Text.tsx");

export const TextStyleSheet = result;
export const Text = forwardRefResult;
export const Heading = forwardRefResult1;
