// Module ID: 5098
// Function ID: 44350
// Name: Background
// Dependencies: [29, 31, 27, 33, 1457]
// Exports: default

// Module 5098 (Background)
import _objectWithoutProperties from "_objectWithoutProperties";
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
let closure_2 = ["style"];

export default function Background(style) {
  let obj = require(1457) /* Link */;
  obj = {};
  obj = { flex: 1, backgroundColor: obj.useTheme().colors.background };
  const items = [obj, style.style];
  obj.style = items;
  return <View {...Object.assign({}, callback(arg0, closure_2), obj)} />;
};
