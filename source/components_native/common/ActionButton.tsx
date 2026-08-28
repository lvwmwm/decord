// Module ID: 10580
// Function ID: 10581
// Name: ActionButton
// Dependencies: [19, 17, 21, 4899, 7952, 2]
// Exports: default

// Module 10580 (ActionButton)
import noopAll from "noop" /* 19 */;
import styleProperties from "styleProperties" /* 4899 */;
import IconButton from "IconButton" /* 7952 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("components_native/common/ActionButton.tsx");

export default function ActionButton(style) {
  let str = "tertiary";
  if ("positive" === style.type) {
    str = "active";
  }
  let obj = styleProperties;
  obj = { style: style.styles, children: null };
  obj = { icon: jsx(style.IconComponent, { color: obj.useButtonTextColorStyles(str).color, size: "sm" }), onPress: jsx(IconButton.IconButton, { style: style.styles, children: null }), accessibilityLabel: null, variant: str, size: "sm" };
  ({ onPress: obj3[1], accessibilityLabel: obj3[2] } = style);
  return <View icon={jsx(arg0.IconComponent, { color: obj.useButtonTextColorStyles(str).color, size: "sm" })} onPress={jsx(IconButton.IconButton, { style: arg0.styles, children: null })} accessibilityLabel={null} variant={str} size="sm" />;
};
