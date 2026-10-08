// Module ID: 6248
// Function ID: 6249
// Name: HeaderTitle
// Dependencies: [17, 21, 1503]
// Exports: HeaderTitle

// Module 6248 (HeaderTitle)
import Fragment from "Fragment" /* 21 */;
import Link from "Link" /* 1503 */;
import react_native from "react-native" /* 17 */;

let Platform;
let StyleSheet;
let c2;
({ Animated: c2, Platform, StyleSheet } = react_native);
const jsx = Fragment.jsx;
const title = StyleSheet.create({ title: { fontSize: 20 } });

export const HeaderTitle = function HeaderTitle(tintColor) {
  let colors;
  let fonts;
  let items;
  let text = tintColor.tintColor;
  const style = tintColor.style;
  const merged = Object.assign(tintColor, Object.assign({ tintColor: 0, style: 0 }));
  const obj = Link;
  const theme = obj.useTheme();
  const obj2 = { role: "heading", "aria-level": "1", numberOfLines: 1, style: items };
  ({ colors, fonts } = theme);
  const Text = RN.Text;
  const merged1 = Object.assign(merged);
  const tmp3 = jsx;
  if (undefined === text) {
    text = colors.text;
  }
  items = [{ color: text }, fonts.medium, title.title, style];
  return tmp3(Text, obj2);
};
