// Module ID: 6828
// Function ID: 6829
// Name: LinkButton
// Dependencies: [19, 21, 4836, 5435, 4832, 2]
// Exports: LinkButton

// Module 6828 (LinkButton)
import Pressables from "Pressables" /* 5435 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let tmp3;
const Text_Text = tmp3(4832);
({ jsx: c2, jsxs: c3 } = Fragment);
let closure_4 = createStyles.createStyles({ defaultContainerStyle: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }, disabledContainerStyle: { opacity: 0.5 } });
const result = size.fileFinishedImporting("modules/premium/native/components/LinkButton.tsx");

export const LinkButton = function LinkButton(textColor) {
  let containerStyle;
  let disabled;
  let items1;
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
  const iconRight = textColor.iconRight;
  const tmp = closure_4();
  const items = [tmp.defaultContainerStyle, , ];
  let disabledContainerStyle = disabled;
  const PressableOpacity = Pressables.PressableOpacity;
  const tmp2 = _false;
  if (disabled) {
    disabledContainerStyle = tmp.disabledContainerStyle;
  }
  const obj = { style: items, hitSlop: { top: 8, right: 8, bottom: 8 }, accessibilityRole: "button", activeOpacity: 0.2, disabled, onPress, children: items1 };
  items[1] = disabledContainerStyle;
  items[2] = containerStyle;
  items1 = [React2(Text_Text.Text, { style: textStyle, variant, color: str, children: text }), iconRight];
  return tmp2(PressableOpacity, obj);
};
