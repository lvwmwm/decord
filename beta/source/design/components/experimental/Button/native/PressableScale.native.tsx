// Module ID: 8997
// Function ID: 8998
// Name: PressableScale
// Dependencies: [109, 19, 17, 21, 5095, 5641, 2]
// Exports: PressableScale

// Module 8997 (PressableScale)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 5095 */;
import ButtonHooks from "ButtonHooks" /* 5641 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const ReanimatedRexport = ReanimatedRexport2;

let closure_2 = ["style"];
const Pressable = react_native.Pressable;
const jsx = Fragment.jsx;
let closure_5 = ReanimatedRexport.createAnimatedComponent(Pressable);
const result = size.fileFinishedImporting("design/components/experimental/Button/native/PressableScale.native.tsx");

export function PressableScale(scaleAmountInPx) {
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
  const merged1 = Object.assign(_objectWithoutProperties(buttonPressAnimationProps, closure_2));
  const merged2 = Object.assign(merged);
  const items = [style2, style];
  return <closure_5 ref={ref} accessibilityRole="button" style={items} />;
}
