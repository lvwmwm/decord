// Module ID: 5555
// Function ID: 5556
// Name: MissingIcon
// Dependencies: [17, 21, 5529]
// Exports: MissingIcon

// Module 5555 (MissingIcon)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import Text from "Text" /* 5529 */;

const StyleSheet = get_ActivityIndicator.StyleSheet;
const jsx = jsxProd.jsx;
const styles = StyleSheet.create({ icon: { backgroundColor: "transparent" } });

export const MissingIcon = function MissingIcon(arg0) {
  ({ color, size, style } = arg0);
  style = [icon.icon, { color, fontSize: size }, ];
  style[2] = style;
  return jsx(Text.Text, { style, children: "\u23F7" });
};
