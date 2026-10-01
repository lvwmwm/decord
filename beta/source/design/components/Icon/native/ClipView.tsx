// Module ID: 8276
// Function ID: 8277
// Name: ClipView
// Dependencies: [19, 17, 21, 8277, 8279, 4566, 2]
// Exports: default

// Module 8276 (ClipView)
import CutoutBackgroundContext from "CutoutBackgroundContext" /* 8277 */;
import ClipViewNativeComponentDefault from "ClipViewNativeComponent" /* 8279 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import size_mod from "module_2" /* 2 */;

let StyleSheet;
let c3;
let closure_4;
let hasOwnProperty;
let obj3;
function SolidCutout(arg0) {
  let backgroundColor;
  let cutout;
  let items1;
  ({ backgroundColor, cutout } = arg0);
  const style = [closure_10.solidCutout];
  if (cutout.shape === obj.Circle) {
    size = { backgroundColor, borderRadius: cutout.size / 2, height: null, width: null, left: null, top: null };
    ({ size: obj.height, size: obj.width, x: obj.left, y: obj.top } = cutout);
    style.push(size);
  } else {
    const size1 = { backgroundColor, borderRadius: null, height: null, width: null, left: null, top: null };
    ({ cornerRadius: obj2.borderRadius, height: obj2.height, width: obj2.width, x: obj2.left, y: obj2.top } = cutout);
    style.push(size1);
    if (null != cutout.rotationDegrees) {
      const obj3 = { transform: items1 };
      const _HermesInternal = HermesInternal;
      const push = style.push;
      items1 = [{ rotate: "" + cutout.rotationDegrees + "deg" }];
      const obj4 = { rotate: "" + cutout.rotationDegrees + "deg" };
      push(obj3);
    }
  }
  return React3(_false, { style });
}
function SolidCutoutOverlay(arg0) {
  let backgroundColor;
  let cutouts;
  ({ backgroundColor: require, cutouts } = arg0);
  let obj = {
    pointerEvents: "none",
    style: closure_10.solidCutoutContainer,
    children: cutouts.map((cutout, index) => {
      const obj = { backgroundColor: require, cutout };
      return React3(SolidCutout, obj, index);
    })
  };
  return closure_4(closure_3, obj);
}
({ StyleSheet, View: c3 } = react_native);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const CutoutShape = { Circle: "circle", RoundedRect: "rounded-rect" };
let closure_7 = [];
let obj2 = { solidCutoutContainer: obj3, solidCutout: { position: "absolute" } };
obj3 = {};
const create = StyleSheet.create;
let merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_10 = create(obj2);
const ClipViewNativeComponent = ReanimatedRexport.createAnimatedComponent(ClipViewNativeComponentDefault);
let size = size_mod;
const result = size.fileFinishedImporting("design/components/Icon/native/ClipView.tsx");

export default function ClipView(cutouts) {
  let children;
  let items;
  let style;
  cutouts = cutouts.cutouts;
  ({ children, style } = cutouts);
  const merged = Object.assign(cutouts, Object.assign({ children: 0, cutouts: 0, style: 0 }));
  const obj = CutoutBackgroundContext;
  const cutoutBackgroundColor = obj.useCutoutBackgroundColor();
  let tmp4 = null;
  let tmp5 = cutouts;
  if (null != cutoutBackgroundColor) {
    let tmp7 = null != cutouts;
    const tmp6 = closure_7;
    if (tmp7) {
      tmp7 = cutouts.length > 0;
    }
    let tmp8 = null;
    if (tmp7) {
      const obj2 = { backgroundColor: cutoutBackgroundColor, cutouts };
      tmp8 = React3(SolidCutoutOverlay, obj2);
    }
    tmp4 = tmp8;
    tmp5 = tmp6;
  }
  const obj3 = { cutouts: tmp5, style, children: items };
  const tmp11 = ClipViewNativeComponentDefault;
  const merged1 = Object.assign(merged);
  items = [children, tmp4];
  return hasOwnProperty(tmp11, obj3);
};
export const ClipViewAnimated = ClipViewNativeComponent;
export { CutoutShape };
