// Module ID: 6646
// Function ID: 51047
// Name: LinkButton
// Dependencies: [31, 33, 4130, 4660, 4126, 2]
// Exports: LinkButton

// Module 6646 (LinkButton)
import "result";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_2;
let closure_3;
const require = arg1;
({ jsx: closure_2, jsxs: closure_3 } = jsxProd);
let closure_4 = _createForOfIteratorHelperLoose.createStyles({ defaultContainerStyle: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }, disabledContainerStyle: { opacity: 0.5 } });
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/premium/native/components/LinkButton.tsx");

export const LinkButton = function LinkButton(textColor) {
  let containerStyle;
  let disabled;
  let onPress;
  let text;
  let textStyle;
  let variant;
  ({ disabled, variant } = textColor);
  ({ onPress, text, containerStyle, textStyle } = textColor);
  if (variant === undefined) {
    variant = "text-xs/medium";
  }
  let str = textColor.textColor;
  if (str === undefined) {
    str = "text-link";
  }
  const tmp = callback2();
  let obj = {};
  const items = [tmp.defaultContainerStyle, , ];
  let disabledContainerStyle = disabled;
  if (disabled) {
    disabledContainerStyle = tmp.disabledContainerStyle;
  }
  items[1] = disabledContainerStyle;
  items[2] = containerStyle;
  obj.style = items;
  obj.hitSlop = { top: 8, right: 8, bottom: 8 };
  obj.accessibilityRole = "button";
  obj.activeOpacity = 0.2;
  obj.disabled = disabled;
  obj.onPress = onPress;
  obj = { style: textStyle, variant, color: str, children: text };
  const items1 = [callback(require(4126) /* Text */.Text, obj), textColor.iconRight];
  obj.children = items1;
  return closure_3(require(4660) /* PressableBase */.PressableOpacity, obj);
};
