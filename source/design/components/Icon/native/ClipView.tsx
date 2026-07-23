// Module ID: 7873
// Function ID: 62705
// Name: SolidCutout
// Dependencies: [31, 27, 33, 3834, 7874, 7875, 3991, 2]
// Exports: default

// Module 7873 (SolidCutout)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import animatedComponent from "__INTERNAL_VIEW_CONFIG";
import importDefaultResult from "module_3991";

let StyleSheet;
let closure_4;
let closure_5;
let closure_6;
const require = arg1;
function SolidCutout(arg0) {
  let backgroundColor;
  let cutout;
  ({ backgroundColor, cutout } = arg0);
  const style = [closure_9.solidCutout];
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
  return callback(closure_4, { style });
}
function SolidCutoutOverlay(arg0) {
  let cutouts;
  let require;
  ({ backgroundColor: require, cutouts } = arg0);
  return callback(closure_4, { pointerEvents: "none", style: closure_9.solidCutoutContainer, children: cutouts.map((cutout) => outer1_5(outer1_10, { backgroundColor: closure_0, cutout }, arg1)) });
}
function TokenSolidCutoutOverlay(arg0) {
  let backgroundColor;
  let cutouts;
  ({ backgroundColor, cutouts } = arg0);
  let obj = require(3834) /* map */;
  obj = { backgroundColor: obj.useToken(backgroundColor), cutouts };
  return callback(SolidCutoutOverlay, obj);
}
({ StyleSheet, View: closure_4 } = get_ActivityIndicator);
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let obj = { Circle: "circle", RoundedRect: "rounded-rect" };
let closure_8 = [];
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
  const context = React.useContext(require(7874) /* context */.CutoutBackgroundContext);
  let tmp4 = cutouts;
  let tmp5 = null;
  if (null != context) {
    let tmp7 = null != cutouts;
    if (tmp7) {
      tmp7 = cutouts.length > 0;
    }
    if (!tmp7) {
      tmp5 = null;
      tmp4 = tmp6;
    } else {
      obj = { backgroundColor: context, cutouts };
      callback("string" === typeof context ? SolidCutoutOverlay : TokenSolidCutoutOverlay, obj);
    }
    tmp6 = closure_8;
  }
  obj = {};
  const merged1 = Object.assign(merged);
  obj["cutouts"] = tmp4;
  obj["style"] = style;
  const items = [children, tmp5];
  obj["children"] = items;
  return callback2(importDefault(7875), obj);
};
export const ClipViewAnimated = animatedComponent;
export const CutoutShape = obj;
