// Module ID: 7494
// Function ID: 60113
// Name: BackgroundBlurView
// Dependencies: []

// Module 7494 (BackgroundBlurView)
const View = arg1(dependencyMap[1]).View;
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
let closure_5 = arg1(dependencyMap[3]).createStyles({ container: {} });
const obj2 = arg1(dependencyMap[3]);
const forwardRefResult = importAllResult.forwardRef(function BackgroundBlurViewComponent(arg0, arg1) {
  let android_blurTargetViewNativeId;
  let blurTheme;
  let children;
  let pressed;
  let style;
  ({ blurTheme, pressed, android_blurTargetViewNativeId } = arg0);
  let obj = {};
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
    let tmp10 = callback(arg1(dependencyMap[4]).BackgroundBlurFillWithPress, obj);
  } else {
    const obj1 = { blurTheme, android_blurTargetViewNativeId };
    tmp10 = callback(arg1(dependencyMap[4]).BackgroundBlurFill, obj1);
  }
  const items1 = [tmp10, children];
  obj["children"] = items1;
  return closure_4(View, obj);
});
const result = arg1(dependencyMap[5]).fileFinishedImporting("design/components/experimental/BackgroundBlurView/native/BackgroundBlurView.native.tsx");

export const BackgroundBlurView = forwardRefResult;
