// Module ID: 5426
// Function ID: 5427
// Name: Label
// Dependencies: [17, 21, 5402]
// Exports: Label

// Module 5426 (Label)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import Text from "Text" /* 5402 */;

const StyleSheet = get_ActivityIndicator.StyleSheet;
const jsx = jsxProd.jsx;
const styles = StyleSheet.create({ label: { textAlign: "center", backgroundColor: "transparent" } });

export const Label = function Label(tintColor) {
  tintColor = tintColor.tintColor;
  const merged = Object.assign(tintColor, Object.create(null));
  let obj = { numberOfLines: 1 };
  const merged1 = Object.assign(merged);
  const items = [label.label, , ];
  let tmp4 = null != tintColor;
  if (tmp4) {
    obj = { color: null };
    obj[0] = tintColor;
    tmp4 = obj;
  }
  items[1] = tmp4;
  items[2] = tintColor.style;
  obj.style = items;
  return jsx(Text.Text, { numberOfLines: 1 });
};
