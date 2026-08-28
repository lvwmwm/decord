// Module ID: 5753
// Function ID: 5754
// Dependencies: [19, 21, 5750]
// Exports: default

// Module 5753
import noopAll from "noop" /* 19 */;
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 5750 */;
import { jsx } from "jsxProd" /* 21 */;

noopAll;

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
  return jsx(_isNativeReflectConstructDefault, { delayLongPress: num, extraButtonProps });
};
