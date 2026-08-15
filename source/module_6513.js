// Module ID: 6513
// Function ID: 6514
// Dependencies: [19, 21, 6510]
// Exports: default

// Module 6513
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
  return jsx(importDefault(6510), { delayLongPress: num, extraButtonProps });
};
