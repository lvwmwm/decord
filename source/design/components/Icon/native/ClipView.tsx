// Module ID: 7909
// Function ID: 62999
// Name: SolidCutout
// Dependencies: [31, 27, 33, 7910, 7912, 3992, 2]
// Exports: default

// Module 7909 (SolidCutout)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import animatedComponent from "__INTERNAL_VIEW_CONFIG";
import importDefaultResult from "module_3992";

let StyleSheet;
let closure_3;
let closure_4;
let closure_5;
const require = arg1;
function SolidCutout(arg0) {
  let backgroundColor;
  let cutout;
  ({ backgroundColor, cutout } = arg0);
  const style = [closure_8.solidCutout];
  if (cutout.shape === obj.Circle) {
    obj = { backgroundColor, borderRadius: cutout.size / 2 };
    ({ size: obj.height, size: obj.width, x: obj.left, y: obj.top } = cutout);
    style.push(obj);
  } else {
    obj = { backgroundColor };
    ({ cornerRadius: obj2.borderRadius, height: obj2.height, width: obj2.width, x: obj2.left, y: obj2.top } = cutout);
    style.push(obj);
    if (null != cutout.rotationDegrees) {
      obj = {};
      const obj1 = {};
      const _HermesInternal = HermesInternal;
      obj1.rotate = "" + cutout.rotationDegrees + "deg";
      const items1 = [obj1];
      obj.transform = items1;
      style.push(obj);
    }
  }
  return callback(closure_3, { style });
}
function SolidCutoutOverlay(arg0) {
  let cutouts;
  let require;
  ({ backgroundColor: require, cutouts } = arg0);
  return callback(closure_3, { pointerEvents: "none", style: closure_8.solidCutoutContainer, children: cutouts.map((cutout) => outer1_4(outer1_9, { backgroundColor: closure_0, cutout }, arg1)) });
}
({ StyleSheet, View: closure_3 } = get_ActivityIndicator);
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let obj = { Circle: "circle", RoundedRect: "rounded-rect" };
let closure_7 = [];
obj = {};
obj = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj.solidCutoutContainer = obj;
obj.solidCutout = { position: "absolute" };
const styles = StyleSheet.create(obj);
const result = require("jsxProd").fileFinishedImporting("design/components/Icon/native/ClipView.tsx");

export default function ClipView(cutouts) {
  let children;
  let style;
  cutouts = cutouts.cutouts;
  let obj = { children: 0, cutouts: 0, style: 0 };
  ({ children, style } = cutouts);
  Object.setPrototypeOf(null);
  const merged = Object.assign(cutouts, obj);
  const cutoutBackgroundColor = require(7910) /* useCutoutBackgroundColor */.useCutoutBackgroundColor();
  let tmp4 = cutouts;
  let tmp5 = null;
  if (null != cutoutBackgroundColor) {
    let tmp7 = null != cutouts;
    if (tmp7) {
      tmp7 = cutouts.length > 0;
    }
    let tmp8 = null;
    if (tmp7) {
      obj = { backgroundColor: cutoutBackgroundColor, cutouts };
      tmp8 = callback(SolidCutoutOverlay, obj);
    }
    tmp5 = tmp8;
    tmp4 = closure_7;
    const tmp6 = closure_7;
  }
  obj = {};
  const obj2 = require(7910) /* useCutoutBackgroundColor */;
  const merged1 = Object.assign(merged);
  obj["cutouts"] = tmp4;
  obj["style"] = style;
  const items = [children, tmp5];
  obj["children"] = items;
  return callback2(importDefault(7912), obj);
};
export const ClipViewAnimated = animatedComponent;
export const CutoutShape = obj;
