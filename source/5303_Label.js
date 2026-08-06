// Module ID: 5303
// Function ID: 5304
// Name: Label
// Dependencies: [17, 21, 5279]
// Exports: Label

// Module 5303 (Label)
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";

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
  return jsx(require(5279) /* Text */.Text, { numberOfLines: 1 });
};
