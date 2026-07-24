// Module ID: 5104
// Function ID: 44362
// Name: HeaderTitle
// Dependencies: [29, 31, 27, 33, 1457]
// Exports: default

// Module 5104 (HeaderTitle)
import _objectWithoutProperties from "_objectWithoutProperties";
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let Platform;
let StyleSheet;
let closure_4;
const require = arg1;
let closure_2 = ["tintColor", "style"];
({ Animated: closure_4, Platform, StyleSheet } = get_ActivityIndicator);
const styles = StyleSheet.create({ title: { fontSize: 20, fontFamily: "sans-serif-medium", fontWeight: "normal" } });

export default function HeaderTitle(tintColor) {
  let text = tintColor.tintColor;
  let obj = require(1457) /* Link */;
  obj = {};
  const items = [title.title, , ];
  obj = {};
  if (undefined === text) {
    text = obj.useTheme().colors.text;
  }
  obj.color = text;
  items[1] = obj;
  items[2] = tintColor.style;
  obj.style = items;
  return <RN.Text {...Object.assign({ accessibilityRole: "header", "aria-level": "1", numberOfLines: 1 }, callback(arg0, closure_2), obj)} />;
};
