// Module ID: 7341
// Function ID: 7342
// Name: LinkButton
// Dependencies: [19, 21, 4481, 5084, 4477, 2]
// Exports: LinkButton

// Module 7341 (LinkButton)
import noopAll from "noop" /* 19 */;
import Text from "Text" /* 4477 */;
import PressableBase from "PressableBase" /* 5084 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4481 */;

require = arg1;
noopAll;
({ jsx: obj1, jsxs: c3 } = jsxProd);
let closure_4 = createCacheKey.createStyles({ defaultContainerStyle: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }, disabledContainerStyle: { opacity: 0.5 } });
const result = require("set").fileFinishedImporting("modules/premium/native/components/LinkButton.tsx");

export const LinkButton = function LinkButton(textColor) {
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
  const items = [tmp.defaultContainerStyle, , ];
  let disabledContainerStyle = disabled;
  if (disabled) {
    disabledContainerStyle = tmp.disabledContainerStyle;
  }
  const obj = { style: items, hitSlop: { top: 8, right: 8, bottom: 8 }, accessibilityRole: "button", activeOpacity: 0.2, disabled, onPress, children: null };
  items[1] = disabledContainerStyle;
  items[2] = containerStyle;
  const items1 = [callback(Text.Text, { style: textStyle, variant, color: str, children: text }), textColor.iconRight];
  obj[6] = items1;
  return closure_3(PressableBase.PressableOpacity, obj);
};
