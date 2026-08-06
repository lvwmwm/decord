// Module ID: 5305
// Function ID: 5306
// Name: MissingIcon
// Dependencies: [17, 21, 5279]
// Exports: MissingIcon

// Module 5305 (MissingIcon)
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
  return jsx(require(5279) /* Text */.Text, { style, children: "\u23F7" });
};
