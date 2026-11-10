// Module ID: 7024
// Function ID: 7025
// Name: Text
// Dependencies: [17, 21, 1498]
// Exports: Text

// Module 7024 (Text)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Link from "Link" /* 1498 */;

const Text = react_native.Text;
const jsx = Fragment.jsx;

export function Text(style) {
  let colors;
  let fonts;
  style = style.style;
  const merged = Object.assign(style, Object.assign({ style: 0 }));
  const obj = Link;
  const theme = obj.useTheme();
  ({ colors, fonts } = theme);
  const merged1 = Object.assign(merged);
  const items = [, , ];
  const obj3 = { color: colors.text };
  items[0] = obj3;
  items[1] = fonts.regular;
  items[2] = style;
  return <Text style={items} />;
}
