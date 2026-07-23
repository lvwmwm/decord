// Module ID: 5549
// Function ID: 47133
// Name: initialWindowMetrics
// Dependencies: [57, 31, 27, 33, 1560]

// Module 5549 (initialWindowMetrics)
import "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";

let Dimensions;
let Platform;
let StyleSheet;
let closure_3;
let closure_4;
let jsxs;
const require = arg1;
class SafeAreaProviderCompat {
  constructor(arg0) {
    ({ children, style } = global);
    tmp = jsx;
    if (result.useContext(require("module_1560").SafeAreaInsetsContext)) {
      tmp6 = View;
      obj = {};
      tmp7 = initialWindowMetrics;
      items = [, ];
      items[0] = initialWindowMetrics.container;
      items[1] = style;
      obj.style = items;
      obj.children = children;
      tmpResult = tmp(View, obj);
    } else {
      tmp2 = closure_0;
      tmp3 = closure_1;
      obj = {};
      tmp4 = initialWindowMetrics;
      obj.initialMetrics = initialWindowMetrics;
      obj.style = style;
      obj.children = children;
      tmpResult = tmp(require("module_1560").SafeAreaProvider, obj);
    }
    return tmpResult;
  }
}
({ Dimensions, Platform, StyleSheet, View: closure_3 } = get_ActivityIndicator);
({ jsx: closure_4, jsxs } = jsxProd);
const size = Dimensions.get("window");
const width = size.width;
let num = 0;
if (undefined !== width) {
  num = width;
}
const height = size.height;
let num2 = 0;
if (undefined !== height) {
  num2 = height;
}
if (null == require("module_1560").initialWindowMetrics) {
  let obj = {};
  obj = { x: 0, y: 0, width: num, height: num2 };
  obj.frame = obj;
  class SafeAreaProviderCompat {
    constructor(arg0) {
      ({ children, style } = global);
      tmp = jsx;
      if (result.useContext(require("module_1560").SafeAreaInsetsContext)) {
        tmp6 = View;
        obj = {};
        tmp7 = initialWindowMetrics;
        items = [, ];
        items[0] = initialWindowMetrics.container;
        items[1] = style;
        obj.style = items;
        obj.children = children;
        tmpResult = tmp(View, obj);
      } else {
        tmp2 = closure_0;
        tmp3 = closure_1;
        obj = {};
        tmp4 = initialWindowMetrics;
        obj.initialMetrics = initialWindowMetrics;
        obj.style = style;
        obj.children = children;
        tmpResult = tmp(require("module_1560").SafeAreaProvider, obj);
      }
      return tmpResult;
    }
  }
  let initialWindowMetrics = obj;
} else {
  initialWindowMetrics = require("module_1560").initialWindowMetrics;
}
SafeAreaProviderCompat.initialMetrics = initialWindowMetrics;
const styles = StyleSheet.create({ container: { flex: 1 } });

export default SafeAreaProviderCompat;
