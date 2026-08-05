// Module ID: 5367
// Function ID: 5368
// Name: GestureHandlerRootView
// Dependencies: [19, 17, 21, 5354, 5368, 5369]
// Exports: default

// Module 5367 (GestureHandlerRootView)
import "noop";
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const styles = StyleSheet.create({ container: { flex: 1 } });

export default function GestureHandlerRootView(style) {
  let container = style.style;
  const merged = Object.assign(style, Object.create(null));
  let obj = require(5354) /* initialize */;
  const result = obj.maybeInitializeFabric();
  if (container == null) {
    container = container.container;
  }
  obj = { value: true, children: null };
  obj = { style: container };
  const merged1 = Object.assign(merged);
  obj[1] = jsx(importDefault(5369), { style: container });
  return jsx(importDefault(5368).Provider, { style: container });
};
