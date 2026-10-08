// Module ID: 5349
// Function ID: 5350
// Dependencies: [19, 17, 21, 5350]
// Exports: SafeAreaView

// Module 5349
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react_nativeDefault from "react-native" /* 5350 */;
import react from "react" /* 19 */;

const StyleSheet = react_native.StyleSheet;
const jsx = Fragment.jsx;
const styles = StyleSheet.create({ flex: { flex: 1 } });

export const SafeAreaView = function SafeAreaView(style) {
  react_nativeDefault;
  const merged = Object.assign(style);
  const items = [styles.flex, style.style];
  const rect = { top: false, bottom: false, left: false, right: false };
  const merged1 = Object.assign(style.edges);
  return <tmp style={items} edges={rect} />;
};
