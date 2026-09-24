// Module ID: 7059
// Function ID: 7060
// Dependencies: [19, 21, 7056]
// Exports: default

// Module 7059
import _modDef7056 from "module_7056" /* 7056 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;

export default function _default(delayLongPress) {
  let num = delayLongPress.delayLongPress;
  if (num === undefined) {
    num = 600;
  }
  let extraButtonProps = delayLongPress.extraButtonProps;
  if (extraButtonProps === undefined) {
    extraButtonProps = { rippleColor: "transparent", exclusive: true };
  }
  const merged = Object.assign(delayLongPress, Object.assign({ delayLongPress: 0, extraButtonProps: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(_modDef7056, { delayLongPress: num, extraButtonProps });
};
