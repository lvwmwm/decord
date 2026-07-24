// Module ID: 5115
// Function ID: 44392
// Name: MissingIcon
// Dependencies: [31, 27, 33]
// Exports: default

// Module 5115 (MissingIcon)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let StyleSheet;
let closure_0;
({ StyleSheet, Text: closure_0 } = get_ActivityIndicator);
const styles = StyleSheet.create({ icon: { backgroundColor: "transparent" } });

export default function MissingIcon(color) {
  const style = [icon.icon, { color: color.color, fontSize: color.size }, color.style];
  return <closure_0 style={style}>{"\u23F7"}</closure_0>;
};
