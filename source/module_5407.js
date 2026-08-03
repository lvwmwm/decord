// Module ID: 5407
// Function ID: 5408
// Dependencies: [19, 21, 5406]

// Module 5407
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
  return jsx(importDefault(5406), { ref, delayLongPress: num, extraButtonProps });
});
