// Module ID: 8530
// Function ID: 8531
// Name: PressableScale
// Dependencies: [109, 19, 17, 21, 4811, 558, 576, 5382, 2]

// Module 8530 (PressableScale)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4811 */;
import ButtonHooks from "ButtonHooks" /* 5382 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ReanimatedRexport = ReanimatedRexport2;

let closure_2 = ["style", "scaleAmountInPx", "onLayout", "onPressIn", "onPressOut", "ref"];
let closure_3 = ["style"];
let closure_4 = ["style"];
const Pressable = react_native.Pressable;
const jsx = Fragment.jsx;
let closure_7 = ReanimatedRexport.createAnimatedComponent(Pressable);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function PressableScale(arg0) {
  let onLayout;
  let onPressIn;
  let onPressOut;
  let ref;
  let scaleAmountInPx;
  let style;
  let tmp10;
  let tmp16;
  let tmp17;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(19);
  if (cResult[0] !== arg0) {
    ({ style, scaleAmountInPx, onLayout, onPressIn, onPressOut, ref } = arg0);
    const tmp13 = _objectWithoutProperties(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = onLayout;
    cResult[2] = onPressIn;
    cResult[3] = onPressOut;
    cResult[4] = tmp13;
    cResult[5] = ref;
    cResult[6] = style;
    cResult[7] = scaleAmountInPx;
    tmp10 = scaleAmountInPx;
    tmp9 = style;
    tmp8 = ref;
    tmp7 = tmp13;
    tmp6 = onPressOut;
    tmp5 = onPressIn;
    tmp4 = onLayout;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
    tmp10 = cResult[7];
  }
  let num9 = 8;
  if (undefined !== tmp10) {
    num9 = tmp10;
  }
  const tmpResult = ReanimatedRexport2;
  const sharedValue = tmpResult.useSharedValue(0);
  const tmpResult2 = ButtonHooks;
  const buttonPressAnimationProps = tmpResult2.useButtonPressAnimationProps(sharedValue, num9, tmp4, tmp5, tmp6);
  if (cResult[8] !== buttonPressAnimationProps) {
    const style2 = buttonPressAnimationProps.style;
    const tmp20 = _objectWithoutProperties(buttonPressAnimationProps, closure_3);
    cResult[8] = buttonPressAnimationProps;
    cResult[9] = style2;
    cResult[10] = tmp20;
    tmp17 = tmp20;
    tmp16 = style2;
  } else {
    tmp16 = cResult[9];
    tmp17 = cResult[10];
  }
  if (cResult[11] === tmp16) {
    let tmp21;
    if (cResult[12] === tmp9) {
      tmp21 = cResult[13];
    }
    if (cResult[14] === tmp17) {
      if (cResult[15] === tmp7) {
        if (cResult[16] === tmp8) {
          let tmp22;
          if (cResult[17] === tmp21) {
            tmp22 = cResult[18];
          }
          return tmp22;
        }
      }
    }
    const merged = Object.assign(tmp17);
    const merged1 = Object.assign(tmp7);
    const tmp31 = <closure_7 ref={tmp8} accessibilityRole="button" style={tmp21} />;
    cResult[14] = tmp17;
    cResult[15] = tmp7;
    cResult[16] = tmp8;
    cResult[17] = tmp21;
    cResult[18] = tmp31;
    tmp22 = tmp31;
  }
  const items = [tmp16, tmp9];
  cResult[11] = tmp16;
  cResult[12] = tmp9;
  cResult[13] = items;
  tmp21 = items;
}) : (function PressableScale(scaleAmountInPx) {
  let onPressIn;
  let onPressOut;
  let ref;
  let num = scaleAmountInPx.scaleAmountInPx;
  const style = scaleAmountInPx.style;
  if (num === undefined) {
    num = 8;
  }
  const onLayout = scaleAmountInPx.onLayout;
  ({ onPressIn, onPressOut, ref } = scaleAmountInPx);
  const merged = Object.assign(scaleAmountInPx, Object.assign({ style: 0, scaleAmountInPx: 0, onLayout: 0, onPressIn: 0, onPressOut: 0, ref: 0 }));
  const obj = ReanimatedRexport2;
  const sharedValue = obj.useSharedValue(0);
  const obj2 = ButtonHooks;
  const buttonPressAnimationProps = obj2.useButtonPressAnimationProps(sharedValue, num, onLayout, onPressIn, onPressOut);
  const style2 = buttonPressAnimationProps.style;
  const merged1 = Object.assign(_objectWithoutProperties(buttonPressAnimationProps, closure_4));
  const merged2 = Object.assign(merged);
  const items = [style2, style];
  return <closure_7 ref={ref} accessibilityRole="button" style={items} />;
});
const result = size.fileFinishedImporting("design/components/experimental/Button/native/PressableScale.native.tsx");

export const PressableScale = tmp3;
