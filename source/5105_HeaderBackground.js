// Module ID: 5105
// Function ID: 44359
// Name: HeaderBackground
// Dependencies: [29, 31, 27, 33, 1457]
// Exports: default

// Module 5105 (HeaderBackground)
import _objectWithoutProperties from "_objectWithoutProperties";
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let Platform;
let StyleSheet;
let closure_4;
const require = arg1;
let closure_2 = ["style"];
({ Animated: closure_4, Platform, StyleSheet } = get_ActivityIndicator);
const styles = StyleSheet.create({ container: Object.assign({ flex: 1 }, { elevation: 4 }) });

export default function HeaderBackground(style) {
  const tmp = callback(style, closure_2);
  const colors = require(1457) /* Link */.useTheme().colors;
  style = [container.container, { backgroundColor: colors.card, borderBottomColor: colors.border, shadowColor: colors.border }, style.style];
  return <RN.View {...Object.assign({ style }, tmp)} />;
};
