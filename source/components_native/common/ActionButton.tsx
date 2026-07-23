// Module ID: 9089
// Function ID: 71230
// Name: ActionButton
// Dependencies: [31, 27, 33, 4548, 7771, 2]
// Exports: default

// Module 9089 (ActionButton)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("components_native/common/ActionButton.tsx");

export default function ActionButton(style) {
  let str = "tertiary";
  if ("positive" === style.type) {
    str = "active";
  }
  let obj = require(4548) /* useProfileThemedButtonStyles */;
  obj = { style: style.styles };
  obj = {};
  obj.icon = jsx(style.IconComponent, { color: obj.useButtonTextColorStyles(str).color, size: "sm" });
  ({ onPress: obj3.onPress, accessibilityLabel: obj3.accessibilityLabel } = style);
  obj.variant = str;
  obj.size = "sm";
  obj.children = jsx(require(7771) /* IconButton */.IconButton, {});
  return <View />;
};
