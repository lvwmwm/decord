// Module ID: 7640
// Function ID: 60793
// Name: BackgroundBlurView
// Dependencies: [31, 27, 33, 4130, 7641, 2]

// Module 7640 (BackgroundBlurView)
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_3;
let closure_4;
const require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
let closure_5 = _createForOfIteratorHelperLoose.createStyles({ container: { position: "relative", overflow: "hidden" } });
const forwardRefResult = require("result").forwardRef(function BackgroundBlurViewComponent(arg0, arg1) {
  let android_blurTargetViewNativeId;
  let blurTheme;
  let children;
  let pressed;
  let style;
  ({ blurTheme, pressed, android_blurTargetViewNativeId } = arg0);
  let obj = { children: 0, style: 0, blurTheme: 0, pressed: 0, android_blurTargetViewNativeId: 0 };
  ({ children, style } = arg0);
  Object.setPrototypeOf(null);
  const merged = Object.assign(arg0, obj);
  obj = {};
  const merged1 = Object.assign(merged);
  const items = [callback2().container, style];
  obj["style"] = items;
  obj["ref"] = arg1;
  if (null != pressed) {
    obj = { blurTheme, pressed, android_blurTargetViewNativeId };
    let tmp10 = callback(require(7641) /* useBlurTheme */.BackgroundBlurFillWithPress, obj);
  } else {
    const obj1 = { blurTheme, android_blurTargetViewNativeId };
    tmp10 = callback(require(7641) /* useBlurTheme */.BackgroundBlurFill, obj1);
  }
  const items1 = [tmp10, children];
  obj["children"] = items1;
  return closure_4(View, obj);
});
const result = require("jsxProd").fileFinishedImporting("design/components/experimental/BackgroundBlurView/native/BackgroundBlurView.native.tsx");

export const BackgroundBlurView = forwardRefResult;
