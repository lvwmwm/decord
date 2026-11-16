// Module ID: 7149
// Function ID: 7150
// Name: MissingIcon
// Dependencies: [17, 21, 7123]
// Exports: MissingIcon

// Module 7149 (MissingIcon)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Text from "Text" /* 7123 */;

const StyleSheet = react_native.StyleSheet;
const jsx = Fragment.jsx;
const icon = StyleSheet.create({ icon: { backgroundColor: "transparent" } });

export function MissingIcon(arg0) {
  let color;
  let style;
  ({ color, size, style } = arg0);
  const items = [icon.icon, { color, fontSize: size }, style];
  return jsx(Text.Text, { style: items, children: "\u23F7" });
}
