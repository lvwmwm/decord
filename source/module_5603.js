// Module ID: 5603
// Function ID: 5604
// Dependencies: [19, 21, 5600]
// Exports: default

// Module 5603
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
  return jsx(importDefault(5600), { delayLongPress: num, extraButtonProps });
};
