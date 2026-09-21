// Module ID: 5162
// Function ID: 5163
// Dependencies: [19, 17, 21, 5163]
// Exports: SafeAreaView

// Module 5162
import _modDef5163 from "module_5163" /* 5163 */;
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
  return jsx(_modDef5163, {});
};
