// Module ID: 5433
// Function ID: 5434
// Dependencies: [19, 21, 5430]
// Exports: default

// Module 5433
import Fragment from "Fragment" /* 21 */;
import TOUCHABLE_STATEDefault from "TOUCHABLE_STATE" /* 5430 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

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
  TOUCHABLE_STATEDefault;
  const merged1 = Object.assign(merged);
  return <tmp2 delayLongPress={num} extraButtonProps={extraButtonProps} />;
};
