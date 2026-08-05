// Module ID: 5421
// Function ID: 5422
// Dependencies: [19, 21, 5420]

// Module 5421
import { jsx } from "jsxProd";


export default require("noop").forwardRef((delayLongPress, ref) => {
  let num = delayLongPress.delayLongPress;
  if (num === undefined) {
    num = 600;
  }
  let extraButtonProps = delayLongPress.extraButtonProps;
  if (extraButtonProps === undefined) {
    extraButtonProps = { rippleColor: "transparent", exclusive: true };
  }
  const merged = Object.assign(delayLongPress, Object.create(null));
  const merged1 = Object.assign(merged);
  return jsx(importDefault(5420), { ref, delayLongPress: num, extraButtonProps });
});
