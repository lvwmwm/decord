// Module ID: 4124
// Function ID: 34313
// Name: Text
// Dependencies: []

// Module 4124 (Text)
const importAllResult = importAll(dependencyMap[0]);
const Text = arg1(dependencyMap[1]).Text;
const Fonts = arg1(dependencyMap[2]).Fonts;
const jsx = arg1(dependencyMap[3]).jsx;
let closure_5 = importDefault(dependencyMap[4]).createAnimatedComponent(Text);
const keys = Object.keys(importDefault(dependencyMap[5]).colors);
let closure_6 = Object.fromEntries(keys.map((arg0) => {
  const items = [importDefault(dependencyMap[6]).kebabCase(arg0), arg0];
  return items;
}));
let closure_7 = { [400]: Fonts.DISPLAY_NORMAL, [500]: Fonts.DISPLAY_MEDIUM, [600]: Fonts.DISPLAY_SEMIBOLD, [700]: Fonts.DISPLAY_BOLD, [800]: Fonts.DISPLAY_EXTRABOLD };
let closure_8 = { [400]: Fonts.PRIMARY_NORMAL, [500]: Fonts.PRIMARY_MEDIUM, [600]: Fonts.PRIMARY_SEMIBOLD, [700]: Fonts.PRIMARY_BOLD };
let closure_9 = { [800]: Fonts.GINTO_NORD_EXTRA_BOLD };
let closure_10 = { [400]: Fonts.CODE_NORMAL, [700]: Fonts.CODE_BOLD };
const TextVariantsFlat = arg1(dependencyMap[7]).TextVariantsFlat;
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
const importDefaultResult = importDefault(dependencyMap[4]);
let closure_12 = arg1(dependencyMap[8]).createStyles((arg0, arg1) => {
  let obj = {};
  obj = {};
  let tmp;
  if ("none" !== arg0) {
    tmp = importDefault(dependencyMap[5]).colors[closure_6[arg0]];
  }
  obj.color = tmp;
  let items;
  if (arg1) {
    items = [];
  }
  obj.fontVariant = items;
  obj.text = obj;
  return obj;
});
const forwardRefResult = importAllResult.forwardRef((animated, ref) => {
  let color;
  let ellipsizeMode;
  let lineClamp;
  let style;
  let tabularNumbers;
  let variant;
  ({ color, ellipsizeMode, tabularNumbers } = animated);
  ({ variant, style, lineClamp } = animated);
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
  let obj = { bitrate: 0.6, framerate: "BounceOut", type: null, settings: 0.6, type: "BounceOutRight", kind: null, type: 0.6, enabled: "BounceOutLeft" };
  Object.setPrototypeOf(null);
  const merged = Object.assign(animated, obj);
  let str = "text-default";
  if (null != color) {
    str = color;
  }
  if (flag2) {
    let NativeText = ref(dependencyMap[9]).NativeText;
  } else {
    NativeText = flag ? closure_5 : Text;
  }
  const obj2 = ref(dependencyMap[10]);
  obj = {};
  const items = [fromEntriesResult[obj2.useTypographyVariantRemap(obj2, variant, false)], closure_12(str, tabularNumbers).text, style];
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
  return <NativeText {...obj} />;
});
const obj3 = arg1(dependencyMap[8]);
const forwardRefResult1 = importAllResult.forwardRef((variant, ref) => {
  let obj = ref(dependencyMap[10]);
  obj = { ref };
  const typographyVariantRemap = obj.useTypographyVariantRemap(variant.variant, true);
  const merged = Object.assign(variant);
  obj["accessibilityRole"] = "header";
  obj["variant"] = typographyVariantRemap;
  return <forwardRefResult {...obj} />;
});
const result = arg1(dependencyMap[11]).fileFinishedImporting("design/components/Text/native/Text.tsx");

export const TextStyleSheet = fromEntriesResult;
export const Text = forwardRefResult;
export const Heading = forwardRefResult1;
