// Module ID: 7772
// Function ID: 61734
// Name: BaseIconButton
// Dependencies: [31, 33, 4130, 4547, 3991, 4545, 4548, 4550, 4552, 2]

// Module 7772 (BaseIconButton)
import importAllResult from "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import getIconSize from "getIconSize";
import importDefaultResult from "module_3991";

const require = arg1;
let closure_4 = _createForOfIteratorHelperLoose.createStyles((arg0, arg1) => {
  let obj = {};
  if ("sm" === arg1) {
    obj = { paddingHorizontal: require(4547) /* getButtonPadding */.SMALL_BUTTON_PADDING, paddingVertical: require(4547) /* getButtonPadding */.SMALL_BUTTON_PADDING };
  } else if ("md" === arg1) {
    obj = { paddingHorizontal: require(4547) /* getButtonPadding */.MEDIUM_BUTTON_PADDING, paddingVertical: require(4547) /* getButtonPadding */.MEDIUM_BUTTON_PADDING };
  } else if ("lg" === arg1) {
    const obj1 = { paddingHorizontal: require(4547) /* getButtonPadding */.LARGE_BUTTON_PADDING, paddingVertical: require(4547) /* getButtonPadding */.LARGE_BUTTON_PADDING };
    obj = obj1;
  }
  const obj2 = { button: { flexShrink: 0, flexGrow: 0, alignSelf: "center" } };
  const merged = Object.assign(obj);
  obj2.pill = {};
  return obj2;
});
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
    DEFAULT_BUTTON_SIZE = require(4547) /* getButtonPadding */.DEFAULT_BUTTON_SIZE;
  }
  ({ icon, scaleAmountInPx } = variant);
  let num2 = 4;
  ({ maxFontSizeMultiplier, loading } = variant);
  if (undefined !== scaleAmountInPx) {
    num2 = scaleAmountInPx;
  }
  const tmp3 = callback(str, DEFAULT_BUTTON_SIZE);
  let obj = require(3991);
  const sharedValue = obj.useSharedValue(0);
  let obj1 = require(4548) /* useProfileThemedButtonStyles */;
  const iconTintStyles = obj1.useIconTintStyles(str);
  const iconSizeStyles = require(4548) /* useProfileThemedButtonStyles */.useIconSizeStyles(DEFAULT_BUTTON_SIZE, true, maxFontSizeMultiplier);
  let MEDIUM_BUTTON_HEIGHT = require(4547) /* getButtonPadding */.LARGE_BUTTON_HEIGHT;
  if ("sm" === DEFAULT_BUTTON_SIZE) {
    MEDIUM_BUTTON_HEIGHT = require(4547) /* getButtonPadding */.SMALL_BUTTON_HEIGHT;
  } else if ("md" === DEFAULT_BUTTON_SIZE) {
    MEDIUM_BUTTON_HEIGHT = require(4547) /* getButtonPadding */.MEDIUM_BUTTON_HEIGHT;
  }
  const bound = Math.max((require(4547) /* getButtonPadding */.MINIMUM_HIT_AREA - MEDIUM_BUTTON_HEIGHT) / 2, 0);
  obj = {};
  const merged = Object.assign(variant);
  obj["ref"] = arg1;
  const items = [tmp3.button, style];
  obj["style"] = items;
  obj["pressed"] = sharedValue;
  obj["scaleAmountInPx"] = num2;
  obj["hitSlop"] = bound;
  obj = { style: items1 };
  items1 = [tmp3.pill, pillStyle];
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
    tmp16 = <getIconSize source={icon} />;
  }
  obj.children = tmp16;
  obj["children"] = jsx(require(4552) /* PillWrapper */.ButtonPill, { style: items1 });
  return jsx(require(4550) /* BaseButton */.BaseButton, { style: items1 });
});
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Button/native/BaseIconButton.native.tsx");

export const BaseIconButton = forwardRefResult;
