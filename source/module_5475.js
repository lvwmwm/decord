// Module ID: 5475
// Function ID: 5476
// Dependencies: [19, 21, 5474]

// Module 5475
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
  return jsx(importDefault(5474), { ref, delayLongPress: num, extraButtonProps });
});
