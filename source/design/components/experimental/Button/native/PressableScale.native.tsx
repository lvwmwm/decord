// Module ID: 8421
// Function ID: 66972
// Name: PressableScale
// Dependencies: [29, 31, 27, 33, 3991, 4548, 2]

// Module 8421 (PressableScale)
import _objectWithoutProperties from "_objectWithoutProperties";
import { jsx } from "jsxProd";
import importAllResult from "result";
import importDefaultResult from "module_3991";

const require = arg1;
let closure_2 = ["style"];
let closure_5 = require("module_3991").createAnimatedComponent(require("get ActivityIndicator").Pressable);
const forwardRefResult = importAllResult.forwardRef((scaleAmountInPx) => {
  let onPressIn;
  let onPressOut;
  let num = scaleAmountInPx.scaleAmountInPx;
  if (num === undefined) {
    num = 8;
  }
  let obj = { style: 0, scaleAmountInPx: 0, onLayout: 0, onPressIn: 0, onPressOut: 0 };
  ({ onPressIn, onPressOut } = scaleAmountInPx);
  Object.setPrototypeOf(null);
  const merged = Object.assign(scaleAmountInPx, obj);
  const sharedValue = require(3991).useSharedValue(0);
  const obj2 = require(3991);
  const buttonPressAnimationProps = require(4548) /* useProfileThemedButtonStyles */.useButtonPressAnimationProps(sharedValue, num, scaleAmountInPx.onLayout, onPressIn, onPressOut);
  obj = {};
  const merged1 = Object.assign(callback(buttonPressAnimationProps, closure_2));
  const merged2 = Object.assign(merged);
  obj["ref"] = arg1;
  obj["accessibilityRole"] = "button";
  const items = [buttonPressAnimationProps.style, scaleAmountInPx.style];
  obj["style"] = items;
  return <closure_5 />;
});
const result = require("get ActivityIndicator").fileFinishedImporting("design/components/experimental/Button/native/PressableScale.native.tsx");

export const PressableScale = forwardRefResult;
