// Module ID: 5543
// Function ID: 5544
// Name: GestureHandlerRootView
// Dependencies: [19, 17, 21, 5446, 5544]
// Exports: default

// Module 5543 (GestureHandlerRootView)
import "noop";
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const styles = StyleSheet.create({ container: { flex: 1 } });

export default function GestureHandlerRootView(style) {
  let container = style.style;
  const merged = Object.assign(style, Object.create(null));
  const tmp3 = importDefault(5446);
  if (container == null) {
    container = container.container;
  }
  let obj = { value: true, children: null };
  obj = { style: container };
  const merged1 = Object.assign(merged);
  obj.moduleId = globalThis._RNGH_MODULE_ID;
  obj[1] = jsx(importDefault(5544), { style: container });
  return <tmp3 style={container} />;
};
