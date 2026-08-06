// Module ID: 5297
// Function ID: 5298
// Name: HeaderBackground
// Dependencies: [19, 17, 21, 1481]
// Exports: HeaderBackground

// Module 5297 (HeaderBackground)
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let Platform;
let StyleSheet;
let obj1;
const require = arg1;
({ Animated: obj1, Platform, StyleSheet } = get_ActivityIndicator);
const styles = StyleSheet.create({ container: { flex: 1, elevation: 4 } });

export const HeaderBackground = function HeaderBackground(style) {
  let colors;
  let dark;
  const merged = Object.assign(style, Object.create(null));
  let obj = require(1481) /* createStandardNavigationFactories */;
  const theme = obj.useTheme();
  ({ colors, dark } = theme);
  obj = { style: items };
  items = [container.container, { backgroundColor: colors.card, borderBottomColor: colors.border }, style.style];
  const merged1 = Object.assign(merged);
  return <RN.View style={items} />;
};
