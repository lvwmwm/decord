// Module ID: 5265
// Function ID: 45336
// Name: GestureHandlerRootView
// Dependencies: [29, 31, 27, 33, 5252, 5266, 5267]
// Exports: default

// Module 5265 (GestureHandlerRootView)
import _objectWithoutProperties from "_objectWithoutProperties";
import "result";
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
let closure_3 = ["style"];
const styles = StyleSheet.create({ container: { flex: 1 } });

export default function GestureHandlerRootView(style) {
  let container = style.style;
  let obj = require(5252) /* initialize */;
  const result = obj.maybeInitializeFabric();
  obj = {};
  const tmp = callback(style, closure_3);
  if (null == container) {
    container = container.container;
  }
  obj.style = container;
  obj.children = jsx(importDefault(5267), Object.assign(obj, tmp));
  return jsx(importDefault(5266).Provider, {});
};
