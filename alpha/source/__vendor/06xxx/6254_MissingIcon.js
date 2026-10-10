// Module ID: 6254
// Function ID: 6255
// Name: MissingIcon
// Dependencies: [17, 21, 6228]
// Exports: MissingIcon

// Module 6254 (MissingIcon)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Text from "Text" /* 6228 */;

const StyleSheet = react_native.StyleSheet;
const jsx = Fragment.jsx;
const icon = StyleSheet.create({ icon: { backgroundColor: "transparent" } });

export const MissingIcon = function MissingIcon(arg0) {
  let color;
  let style;
  ({ color, size, style } = arg0);
  const items = [icon.icon, { color, fontSize: size }, style];
  return jsx(Text.Text, { style: items, children: "\u23F7" });
};
