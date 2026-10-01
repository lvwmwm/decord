// Module ID: 8056
// Function ID: 8057
// Name: BackgroundBlurView
// Dependencies: [19, 17, 21, 4836, 8057, 2]

// Module 8056 (BackgroundBlurView)
import react_native from "react-native" /* 17 */;
import BackgroundBlurFill from "BackgroundBlurFill" /* 8057 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = createStyles.createStyles({ container: { position: "relative", overflow: "hidden" } });
const forwardRefResult = react.forwardRef(function BackgroundBlurViewComponent(arg0, ref) {
  let android_blurTargetViewNativeId;
  let blurTheme;
  let children;
  let items;
  let items1;
  let pressed;
  let style;
  let tmp9;
  ({ blurTheme, pressed, android_blurTargetViewNativeId } = arg0);
  ({ children, style } = arg0);
  const merged = Object.assign(arg0, Object.assign({ children: 0, style: 0, blurTheme: 0, pressed: 0, android_blurTargetViewNativeId: 0 }));
  const obj = { style: items, ref, children: items1 };
  const tmp2 = closure_5();
  const merged1 = Object.assign(merged);
  items = [tmp2.container, style];
  const tmp3 = React3;
  const tmp4 = View;
  if (null != pressed) {
    const obj2 = { blurTheme, pressed, android_blurTargetViewNativeId };
    tmp9 = _false(BackgroundBlurFill.BackgroundBlurFillWithPress, obj2);
  } else {
    const obj3 = { blurTheme, android_blurTargetViewNativeId };
    tmp9 = _false(BackgroundBlurFill.BackgroundBlurFill, obj3);
  }
  items1 = [tmp9, children];
  return tmp3(tmp4, obj);
});
const result = size.fileFinishedImporting("design/components/experimental/BackgroundBlurView/native/BackgroundBlurView.native.tsx");

export const BackgroundBlurView = forwardRefResult;
