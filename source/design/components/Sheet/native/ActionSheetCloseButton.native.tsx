// Module ID: 5499
// Function ID: 46909
// Name: ActionSheetCloseButton
// Dependencies: [31, 33, 4660, 1212, 5119, 689, 2]
// Exports: ActionSheetCloseButton

// Module 5499 (ActionSheetCloseButton)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
let closure_4 = Object.freeze({ radius: 12 });
let closure_5 = Object.freeze({ top: 8, right: 8, bottom: 8, left: 8 });
const result = require("PressableBase").fileFinishedImporting("design/components/Sheet/native/ActionSheetCloseButton.native.tsx");

export const ActionSheetCloseButton = function ActionSheetCloseButton(arg0) {
  let onPress;
  let variant;
  ({ onPress, variant } = arg0);
  let obj = { accessibilityRole: "button" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.cpT0Cq);
  obj.hitSlop = closure_5;
  obj.androidRippleConfig = closure_4;
  obj.onPress = onPress;
  obj = {};
  if ("overlay" === variant) {
    let ICON_STRONG = importDefault(689).colors.WHITE;
  } else {
    ICON_STRONG = importDefault(689).colors.ICON_STRONG;
  }
  obj.color = ICON_STRONG;
  obj.children = jsx(require(5119) /* XSmallIcon */.XSmallIcon, {});
  return jsx(require(4660) /* PressableBase */.PressableOpacity, {});
};
