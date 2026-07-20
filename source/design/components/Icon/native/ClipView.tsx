// Module ID: 7862
// Function ID: 62633
// Name: SolidCutout
// Dependencies: []
// Exports: default

// Module 7862 (SolidCutout)
let StyleSheet;
function SolidCutout(arg0) {
  let backgroundColor;
  let cutout;
  ({ backgroundColor, cutout } = arg0);
  const style = [closure_9.solidCutout];
  if (cutout.shape === obj.Circle) {
    let obj = { backgroundColor, borderRadius: cutout.size / 2 };
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
  ({ backgroundColor: closure_0, cutouts } = arg0);
  return callback(closure_3, { pointerEvents: "none", style: closure_9.solidCutoutContainer, children: cutouts.map((cutout) => callback(closure_10, { backgroundColor: closure_0, cutout }, arg1)) });
}
function TokenSolidCutoutOverlay(arg0) {
  let backgroundColor;
  let cutouts;
  ({ backgroundColor, cutouts } = arg0);
  let obj = arg1(dependencyMap[5]);
  obj = { backgroundColor: obj.useToken(backgroundColor), cutouts };
  return callback(SolidCutoutOverlay, obj);
}
let closure_2 = importAll(dependencyMap[0]);
let obj = arg1(dependencyMap[1]);
({ StyleSheet, View: closure_3 } = obj);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
obj = { Circle: "circle", RoundedRect: "rounded-rect" };
const tmp2 = arg1(dependencyMap[2]);
if (obj3.isFabric()) {
  let importDefaultResult = importDefault(dependencyMap[4]);
} else {
  importDefaultResult = obj.requireNativeComponent("ClipView");
}
let closure_8 = [];
obj = { solidClipView: { overflow: "hidden" } };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.solidCutoutContainer = {};
obj.solidCutout = { position: "absolute" };
const styles = StyleSheet.create(obj);
const obj1 = {};
const obj3 = arg1(dependencyMap[3]);
const animatedComponent = importDefault(dependencyMap[7]).createAnimatedComponent(importDefaultResult);
const importDefaultResult1 = importDefault(dependencyMap[7]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("design/components/Icon/native/ClipView.tsx");

export default function ClipView(children) {
  let borderRadius;
  let cutouts;
  let style;
  ({ cutouts, borderRadius, style } = children);
  let obj = { GuildBadgeGem: "r", UNKNOWN_FUNCTION: "onRequireModeratorMFAClick", alignSelf: "Array", MANUAL_REVIEW_REQUEST: "isSpamMessageRequest" };
  Object.setPrototypeOf(null);
  const merged = Object.assign(children, obj);
  const context = React.useContext(arg1(dependencyMap[6]).CutoutBackgroundContext);
  let tmp4 = style;
  let tmp5 = cutouts;
  let tmp6 = null;
  if (null != context) {
    const items = [style, closure_9.solidClipView];
    if (null != borderRadius) {
      obj = { borderRadius };
      items.push(obj);
    }
    tmp4 = items;
    tmp5 = tmp9;
    tmp6 = null;
    if (tmp10) {
      obj = { backgroundColor: context, cutouts };
      callback("string" === typeof context ? SolidCutoutOverlay : TokenSolidCutoutOverlay, obj);
    }
    const tmp10 = null != cutouts && cutouts.length > 0;
  }
  const obj1 = {};
  const merged1 = Object.assign(merged);
  obj1["borderRadius"] = borderRadius;
  obj1["cutouts"] = tmp5;
  obj1["style"] = tmp4;
  const items1 = [children.children, tmp6];
  obj1["children"] = items1;
  return callback2(importDefaultResult, obj1);
};
export const ClipViewAnimated = animatedComponent;
export const CutoutShape = obj;
