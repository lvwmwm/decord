// Module ID: 14822
// Function ID: 14823
// Name: ConjureNativeTurnTimer
// Dependencies: [19, 21, 5310, 14823, 5923, 14411, 2]
// Exports: default

// Module 14822 (ConjureNativeTurnTimer)
import Fragment from "Fragment" /* 21 */;
import Text_Text from "Text/Text" /* 5923 */;
import ConjureDuration from "ConjureDuration" /* 14411 */;
import useConjureElapsedMs from "useConjureElapsedMs" /* 14823 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5310 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { timer: { fontVariant: ["tabular-nums"] } };
let closure_3 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/agent_activity/native/ConjureNativeTurnTimer.tsx");

export default function ConjureNativeTurnTimer(variant) {
  let str = variant.variant;
  const startedAt = variant.startedAt;
  if (str === undefined) {
    str = "body-sm/normal";
  }
  const tmp = closure_3();
  const obj = useConjureElapsedMs;
  const conjureElapsedMs = obj.useConjureElapsedMs(startedAt);
  const Text = Text_Text.Text;
  const obj3 = ConjureDuration;
  const obj4 = ConjureDuration;
  return <Text variant={str} color="text-muted" style={tmp.timer} lineClamp={1} accessibilityRole="timer" accessibilityLiveRegion="none" accessibilityLabel={obj3.describeElapsedLabel(conjureElapsedMs)} testID="conjure-turn-timer">{obj4.formatElapsed(conjureElapsedMs)}</Text>;
};
