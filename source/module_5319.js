// Module ID: 5319
// Function ID: 45754
// Dependencies: [29, 31, 33, 5318]

// Module 5319
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
  return jsx(importDefault(5318), Object.assign(obj, tmp));
});
