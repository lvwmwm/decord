// Module ID: 5287
// Function ID: 5288
// Name: GestureHandlerRootView
// Dependencies: [19, 17, 21, 5274, 5288, 5289]
// Exports: default

// Module 5287 (GestureHandlerRootView)
import "noop";
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const styles = StyleSheet.create({ container: { flex: 1 } });

export default function GestureHandlerRootView(style) {
  let container = style.style;
  const merged = Object.assign(style, Object.create(null));
  let obj = require(5274) /* initialize */;
  const result = obj.maybeInitializeFabric();
  if (container == null) {
    container = container.container;
  }
  obj = { value: true, children: null };
  obj = { style: container };
  const merged1 = Object.assign(merged);
  obj[1] = jsx(importDefault(5289), { style: container });
  return jsx(importDefault(5288).Provider, { style: container });
};
