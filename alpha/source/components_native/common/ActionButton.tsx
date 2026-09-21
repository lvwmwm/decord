// Module ID: 11157
// Function ID: 11158
// Name: ActionButton
// Dependencies: [19, 17, 21, 5192, 8179, 2]
// Exports: default

// Module 11157 (ActionButton)
import ButtonHooks from "ButtonHooks" /* 5192 */;
import IconButton from "IconButton" /* 8179 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/ActionButton.tsx");

export default function ActionButton(style) {
  let str = "tertiary";
  if ("positive" === style.type) {
    str = "active";
  }
  const obj2 = { style: style.styles, children: null };
  ({ onPress: obj3.onPress, accessibilityLabel: obj3.accessibilityLabel } = style);
  obj2.children = jsx(IconButton.IconButton, { icon: jsx(style.IconComponent, { color: ButtonHooks.useButtonTextColorStyles(str).color, size: "sm" }), onPress: null, accessibilityLabel: null, variant: str, size: "sm" });
  return <View style={arg0.styles}>{null}</View>;
};
