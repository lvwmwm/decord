// Module ID: 5899
// Function ID: 5900
// Name: Text
// Dependencies: [17, 21, 1489]
// Exports: Text

// Module 5899 (Text)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import Link from "Link" /* 1489 */;

const Text = _mod17.Text;
const jsx = jsxProd.jsx;

export const Text = function Text(style) {
  const merged = Object.assign(style, Object.assign({ style: 0 }));
  const theme = Link.useTheme();
  const obj2 = {};
  ({ colors, fonts } = theme);
  const merged1 = Object.assign(merged);
  const items = [{ color: colors.text }, fonts.regular, style.style];
  obj2.style = items;
  return <Text />;
};
