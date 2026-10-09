// Module ID: 8534
// Function ID: 8535
// Name: BackgroundBlurView
// Dependencies: [109, 19, 17, 21, 5091, 558, 576, 8535, 2]

// Module 8534 (BackgroundBlurView)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import BackgroundBlurFill from "BackgroundBlurFill" /* 8535 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let closure_2 = ["children", "style", "blurTheme", "pressed", "android_blurTargetViewNativeId", "ref"];
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ container: { position: "relative", overflow: "hidden" } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function BackgroundBlurViewComponent(arg0) {
  let android_blurTargetViewNativeId;
  let blurTheme;
  let children;
  let items;
  let pressed;
  let ref;
  let style;
  let tmp10;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(21);
  if (cResult[0] !== arg0) {
    ({ children, style, blurTheme, pressed, android_blurTargetViewNativeId, ref } = arg0);
    const tmp13 = _objectWithoutProperties(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = android_blurTargetViewNativeId;
    cResult[2] = blurTheme;
    cResult[3] = children;
    cResult[4] = pressed;
    cResult[5] = ref;
    cResult[6] = style;
    cResult[7] = tmp13;
    tmp10 = tmp13;
    tmp9 = style;
    tmp8 = ref;
    tmp7 = pressed;
    tmp6 = children;
    tmp5 = blurTheme;
    tmp4 = android_blurTargetViewNativeId;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
    tmp10 = cResult[7];
  }
  const tmp14 = closure_7();
  if (cResult[8] === tmp9) {
    let tmp15;
    let tmp19;
    if (cResult[9] === tmp14.container) {
      tmp15 = cResult[10];
    }
    if (cResult[11] === tmp4) {
      if (cResult[12] === tmp5) {
        let tmp16;
        if (cResult[13] === tmp7) {
          tmp16 = cResult[14];
        }
        if (cResult[15] === tmp6) {
          if (cResult[16] === tmp8) {
            if (cResult[17] === tmp15) {
              if (cResult[18] === tmp16) {
                let tmp21;
                if (cResult[19] === tmp10) {
                  tmp21 = cResult[20];
                }
                return tmp21;
              }
            }
          }
        }
        const obj2 = { style: tmp15, ref: tmp8, children: items };
        const merged = Object.assign(tmp10);
        items = [tmp16, tmp6];
        const tmp27 = metroRequire(View, obj2);
        cResult[15] = tmp6;
        cResult[16] = tmp8;
        cResult[17] = tmp15;
        cResult[18] = tmp16;
        cResult[19] = tmp10;
        cResult[20] = tmp27;
        tmp21 = tmp27;
      }
    }
    if (null != tmp7) {
      const obj3 = { blurTheme: tmp5, pressed: tmp7, android_blurTargetViewNativeId: tmp4 };
      tmp19 = hasOwnProperty(tmp(8535).BackgroundBlurFillWithPress, obj3);
    } else {
      const obj4 = { blurTheme: tmp5, android_blurTargetViewNativeId: tmp4 };
      tmp19 = hasOwnProperty(tmp(8535).BackgroundBlurFill, obj4);
    }
    cResult[11] = tmp4;
    cResult[12] = tmp5;
    cResult[13] = tmp7;
    cResult[14] = tmp19;
    tmp16 = tmp19;
  }
  const items1 = [tmp14.container, tmp9];
  cResult[8] = tmp9;
  cResult[9] = tmp14.container;
  cResult[10] = items1;
  tmp15 = items1;
}) : (function BackgroundBlurViewComponent(arg0) {
  let android_blurTargetViewNativeId;
  let blurTheme;
  let children;
  let items;
  let items1;
  let pressed;
  let ref;
  let style;
  let tmp9;
  ({ blurTheme, pressed, android_blurTargetViewNativeId } = arg0);
  ({ children, style, ref } = arg0);
  const merged = Object.assign(arg0, Object.assign({ children: 0, style: 0, blurTheme: 0, pressed: 0, android_blurTargetViewNativeId: 0, ref: 0 }));
  const obj = { style: items, ref, children: items1 };
  const tmp2 = closure_7();
  const merged1 = Object.assign(merged);
  items = [tmp2.container, style];
  const tmp3 = metroRequire;
  const tmp4 = View;
  if (null != pressed) {
    const obj2 = { blurTheme, pressed, android_blurTargetViewNativeId };
    tmp9 = hasOwnProperty(BackgroundBlurFill.BackgroundBlurFillWithPress, obj2);
  } else {
    const obj3 = { blurTheme, android_blurTargetViewNativeId };
    tmp9 = hasOwnProperty(BackgroundBlurFill.BackgroundBlurFill, obj3);
  }
  items1 = [tmp9, children];
  return tmp3(tmp4, obj);
});
const result = size.fileFinishedImporting("design/components/experimental/BackgroundBlurView/native/BackgroundBlurView.native.tsx");

export const BackgroundBlurView = tmp4;
