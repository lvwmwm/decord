// Module ID: 7766
// Function ID: 61697
// Name: BaseIconButton
// Dependencies: []

// Module 7766 (BaseIconButton)
const importAllResult = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let closure_4 = arg1(dependencyMap[2]).createStyles((arg0, arg1) => {
  let obj = {};
  if ("sm" === arg1) {
    obj = { paddingHorizontal: arg1(dependencyMap[3]).SMALL_BUTTON_PADDING, paddingVertical: arg1(dependencyMap[3]).SMALL_BUTTON_PADDING };
  } else if ("md" === arg1) {
    obj = { paddingHorizontal: arg1(dependencyMap[3]).MEDIUM_BUTTON_PADDING, paddingVertical: arg1(dependencyMap[3]).MEDIUM_BUTTON_PADDING };
  } else if ("lg" === arg1) {
    const obj1 = { paddingHorizontal: arg1(dependencyMap[3]).LARGE_BUTTON_PADDING, paddingVertical: arg1(dependencyMap[3]).LARGE_BUTTON_PADDING };
    obj = obj1;
  }
  const obj2 = { button: {} };
  const merged = Object.assign(obj);
  obj2.pill = {};
  return obj2;
});
const obj2 = arg1(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[4]).createAnimatedComponent(importDefault(dependencyMap[5]));
const importDefaultResult = importDefault(dependencyMap[4]);
const forwardRefResult = importAllResult.forwardRef((variant) => {
  let icon;
  let loading;
  let maxFontSizeMultiplier;
  let pillStyle;
  let scaleAmountInPx;
  let style;
  variant = variant.variant;
  let str = "primary";
  ({ style, pillStyle } = variant);
  if (undefined !== variant) {
    str = variant;
  }
  let DEFAULT_BUTTON_SIZE = variant.size;
  if (undefined === DEFAULT_BUTTON_SIZE) {
    DEFAULT_BUTTON_SIZE = arg1(dependencyMap[3]).DEFAULT_BUTTON_SIZE;
  }
  ({ icon, scaleAmountInPx } = variant);
  let num2 = 4;
  ({ maxFontSizeMultiplier, loading } = variant);
  if (undefined !== scaleAmountInPx) {
    num2 = scaleAmountInPx;
  }
  const tmp3 = callback(str, DEFAULT_BUTTON_SIZE);
  let obj = arg1(dependencyMap[4]);
  const sharedValue = obj.useSharedValue(0);
  let obj1 = arg1(dependencyMap[6]);
  const iconTintStyles = obj1.useIconTintStyles(str);
  const iconSizeStyles = arg1(dependencyMap[6]).useIconSizeStyles(DEFAULT_BUTTON_SIZE, true, maxFontSizeMultiplier);
  let MEDIUM_BUTTON_HEIGHT = arg1(dependencyMap[3]).LARGE_BUTTON_HEIGHT;
  if ("sm" === DEFAULT_BUTTON_SIZE) {
    MEDIUM_BUTTON_HEIGHT = arg1(dependencyMap[3]).SMALL_BUTTON_HEIGHT;
  } else if ("md" === DEFAULT_BUTTON_SIZE) {
    MEDIUM_BUTTON_HEIGHT = arg1(dependencyMap[3]).MEDIUM_BUTTON_HEIGHT;
  }
  const bound = Math.max((arg1(dependencyMap[3]).MINIMUM_HIT_AREA - MEDIUM_BUTTON_HEIGHT) / 2, 0);
  obj = {};
  const merged = Object.assign(variant);
  obj["ref"] = arg1;
  const items = [tmp3.button, style];
  obj["style"] = items;
  obj["pressed"] = sharedValue;
  obj["scaleAmountInPx"] = num2;
  obj["hitSlop"] = bound;
  obj = { style: items1 };
  const items1 = [tmp3.pill, pillStyle];
  obj.variant = str;
  obj.size = DEFAULT_BUTTON_SIZE;
  obj.loading = loading;
  let str3 = "xs";
  if ("lg" === DEFAULT_BUTTON_SIZE) {
    str3 = "sm";
  }
  obj.loaderSize = str3;
  obj.pressed = sharedValue;
  let tmp16 = icon;
  if (!importAllResult.isValidElement(icon)) {
    obj1 = { source: icon };
    const items2 = [iconTintStyles, iconSizeStyles];
    obj1.style = items2;
    tmp16 = <closure_5 {...obj1} />;
  }
  obj.children = tmp16;
  obj["children"] = jsx(arg1(dependencyMap[8]).ButtonPill, obj);
  return jsx(arg1(dependencyMap[7]).BaseButton, obj);
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("design/components/Button/native/BaseIconButton.native.tsx");

export const BaseIconButton = forwardRefResult;
