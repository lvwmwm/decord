// Module ID: 6255
// Function ID: 6256
// Name: Label
// Dependencies: [17, 21, 6231]
// Exports: Label

// Module 6255 (Label)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Text2 from "Text" /* 6231 */;

const StyleSheet = react_native.StyleSheet;
const jsx = Fragment.jsx;
const label = StyleSheet.create({ label: { textAlign: "center", backgroundColor: "transparent" } });

export const Label = function Label(tintColor) {
  let items;
  tintColor = tintColor.tintColor;
  const style = tintColor.style;
  const merged = Object.assign(tintColor, Object.assign({ tintColor: 0, style: 0 }));
  const obj = { numberOfLines: 1, style: items };
  const Text = Text2.Text;
  const merged1 = Object.assign(merged);
  items = [label.label, , ];
  let tmp4 = null != tintColor;
  const tmp2 = jsx;
  if (tmp4) {
    tmp4 = { color: tintColor };
    const obj2 = { color: tintColor };
  }
  items[1] = tmp4;
  items[2] = style;
  return tmp2(Text, obj);
};
