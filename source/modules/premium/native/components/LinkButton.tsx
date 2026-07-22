// Module ID: 6641
// Function ID: 51007
// Name: LinkButton
// Dependencies: []
// Exports: LinkButton

// Module 6641 (LinkButton)
importAll(dependencyMap[0]);
({ jsx: closure_2, jsxs: closure_3 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
let closure_4 = arg1(dependencyMap[2]).createStyles({ defaultContainerStyle: { "Null": "O", "Null": "l", "Null": "\u0596", "Null": "\u0598" }, disabledContainerStyle: { opacity: 0.5 } });
const obj = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/premium/native/components/LinkButton.tsx");

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
  obj.hitSlop = {};
  obj.accessibilityRole = "button";
  obj.activeOpacity = 0.2;
  obj.disabled = disabled;
  obj.onPress = onPress;
  obj = { style: textStyle, variant, color: str, children: text };
  const items1 = [callback(arg1(dependencyMap[4]).Text, obj), textColor.iconRight];
  obj.children = items1;
  return closure_3(arg1(dependencyMap[3]).PressableOpacity, obj);
};
