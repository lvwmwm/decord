// Module ID: 5171
// Function ID: 5172
// Name: MissingIcon
// Dependencies: [19, 17, 21]
// Exports: default

// Module 5171 (MissingIcon)
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let StyleSheet;
let c0;
({ StyleSheet, Text: c0 } = get_ActivityIndicator);
const styles = StyleSheet.create({ icon: { backgroundColor: "transparent" } });

export default function MissingIcon(color) {
  const style = [icon.icon, { color: color.color, fontSize: color.size }, color.style];
  return <closure_0 style={style}>{"\u23F7"}</closure_0>;
};
