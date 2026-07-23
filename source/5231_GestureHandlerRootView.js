// Module ID: 5231
// Function ID: 45210
// Name: GestureHandlerRootView
// Dependencies: [29, 31, 27, 33, 5218, 5232, 5233]
// Exports: default

// Module 5231 (GestureHandlerRootView)
import _objectWithoutProperties from "_objectWithoutProperties";
import "result";
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
let closure_3 = ["style"];
const styles = StyleSheet.create({ container: { flex: 1 } });

export default function GestureHandlerRootView(style) {
  let container = style.style;
  let obj = require(5218) /* initialize */;
  const result = obj.maybeInitializeFabric();
  obj = {};
  const tmp = callback(style, closure_3);
  if (null == container) {
    container = container.container;
  }
  obj.style = container;
  obj.children = jsx(importDefault(5233), Object.assign(obj, tmp));
  return jsx(importDefault(5232).Provider, {});
};
