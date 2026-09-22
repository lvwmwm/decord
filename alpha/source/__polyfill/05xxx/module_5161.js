// Module ID: 5161
// Function ID: 5162
// Dependencies: [19, 17, 21, 5162]
// Exports: SafeAreaView

// Module 5161
import _modDef5162 from "module_5162" /* 5162 */;
import noop from "module_19" /* 19 */;

const StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;
const styles = StyleSheet.create({ flex: { flex: 1 } });

export const SafeAreaView = function SafeAreaView(style) {
  const obj = {};
  const merged = Object.assign(style);
  const items = [styles.flex, style.style];
  obj.style = items;
  const rect = { top: false, bottom: false, left: false, right: false };
  const merged1 = Object.assign(style.edges);
  obj.edges = rect;
  return jsx(_modDef5162, {});
};
