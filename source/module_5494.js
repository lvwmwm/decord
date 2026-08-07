// Module ID: 5494
// Function ID: 5495
// Dependencies: [19, 21, 5493]

// Module 5494
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
  return jsx(importDefault(5493), { ref, delayLongPress: num, extraButtonProps });
});
