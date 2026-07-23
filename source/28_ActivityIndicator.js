// Module ID: 28
// Function ID: 1195
// Name: ActivityIndicator
// Dependencies: [29, 31, 33, 35, 112, 253]

// Module 28 (ActivityIndicator)
import _objectWithoutProperties from "_objectWithoutProperties";
import "result";
import { jsx } from "jsxProd";
import { default as ProgressBarAndroid } from "ProgressBarAndroid";

let closure_2 = ["ref", "animating", "color", "hidesWhenStopped", "onLayout", "size", "style"];
class ActivityIndicator {
  constructor(arg0) {
    animating = global.animating;
    tmp = undefined === animating;
    if (!tmp) {
      tmp = animating;
    }
    color = global.color;
    tmp2 = null;
    if (undefined !== color) {
      tmp2 = color;
    }
    hidesWhenStopped = global.hidesWhenStopped;
    tmp3 = undefined === hidesWhenStopped || hidesWhenStopped;
    size = global.size;
    str = "small";
    if (undefined !== size) {
      str = size;
    }
    tmp4 = _objectWithoutProperties(global, closure_2);
    if ("small" === str) {
      tmp6 = c6;
      sizeSmall = c6.sizeSmall;
      str3 = "small";
    } else {
      str2 = "large";
      if ("large" === str) {
        tmp5 = c6;
        sizeSmall = c6.sizeLarge;
        str3 = "large";
      } else {
        sizeSmall = {};
        sizeSmall.height = str;
        sizeSmall.width = str;
      }
    }
    obj = {};
    obj.animating = tmp;
    obj.color = tmp2;
    obj.hidesWhenStopped = tmp3;
    obj1 = { ref: global.ref };
    obj1.style = sizeSmall;
    obj1.size = str3;
    merged = Object.assign(obj, tmp4, obj1);
    obj2 = { onLayout: global.onLayout };
    tmp8 = require("View");
    obj5 = require("setStyleAttributePreprocessor");
    obj2.style = obj5.compose(c6.container, global.style);
    obj2.children = jsx(c5, Object.assign({}, merged, { styleAttr: "Normal", indeterminate: true }));
    return jsx(tmp8, obj2);
  }
}
ActivityIndicator.displayName = "ActivityIndicator";
let closure_6 = require("setStyleAttributePreprocessor").create({ container: { alignItems: "center", justifyContent: "center" }, sizeSmall: { width: 20, height: 20 }, sizeLarge: { width: 36, height: 36 } });

export default ActivityIndicator;
