// Module ID: 5563
// Function ID: 5564
// Dependencies: [19, 21, 5560]
// Exports: default

// Module 5563
import "noop";
import { jsx } from "jsxProd";


export default function _default(delayLongPress) {
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
  return jsx(importDefault(5560), { delayLongPress: num, extraButtonProps });
};
