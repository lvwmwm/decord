// Module ID: 5322
// Function ID: 5323
// Name: MissingIcon
// Dependencies: [17, 21, 5296]
// Exports: MissingIcon

// Module 5322 (MissingIcon)
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const styles = StyleSheet.create({ icon: { backgroundColor: "transparent" } });

export const MissingIcon = function MissingIcon(arg0) {
  let color;
  let size;
  let style;
  ({ color, size, style } = arg0);
  style = [icon.icon, { color, fontSize: size }, ];
  style[2] = style;
  return jsx(require(5296) /* Text */.Text, { style, children: "\u23F7" });
};
