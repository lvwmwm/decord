// Module ID: 6469
// Function ID: 6470
// Dependencies: [19, 21, 6466]
// Exports: default

// Module 6469
import Fragment from "Fragment" /* 21 */;
import TOUCHABLE_STATEDefault from "TOUCHABLE_STATE" /* 6466 */;
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
