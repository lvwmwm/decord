// Module ID: 5285
// Function ID: 45632
// Dependencies: [29, 31, 33, 5284]

// Module 5285
import _objectWithoutProperties from "_objectWithoutProperties";
import { jsx } from "jsxProd";

let closure_2 = ["delayLongPress", "extraButtonProps"];

export default require("result").forwardRef((delayLongPress, ref) => {
  delayLongPress = delayLongPress.delayLongPress;
  let num = 600;
  if (undefined !== delayLongPress) {
    num = delayLongPress;
  }
  let extraButtonProps = delayLongPress.extraButtonProps;
  if (undefined === extraButtonProps) {
    extraButtonProps = { rippleColor: "transparent", exclusive: true };
  }
  const obj = { ref, delayLongPress: num, extraButtonProps };
  const tmp = callback(delayLongPress, closure_2);
  return jsx(importDefault(5284), Object.assign(obj, tmp));
});
