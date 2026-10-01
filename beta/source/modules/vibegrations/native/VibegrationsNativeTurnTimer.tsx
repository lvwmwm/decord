// Module ID: 16401
// Function ID: 16402
// Name: VibegrationsNativeTurnTimer
// Dependencies: [19, 21, 4836, 16402, 4832, 16350, 2]
// Exports: default

// Module 16401 (VibegrationsNativeTurnTimer)
import Fragment from "Fragment" /* 21 */;
import Text_Text from "Text/Text" /* 4832 */;
import VibegrationsDuration from "VibegrationsDuration" /* 16350 */;
import useVibegrationsElapsedMs from "useVibegrationsElapsedMs" /* 16402 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { timer: { fontVariant: ["tabular-nums"] } };
let closure_3 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsNativeTurnTimer.tsx");

export default function VibegrationsNativeTurnTimer(variant) {
  let str = variant.variant;
  const startedAt = variant.startedAt;
  if (str === undefined) {
    str = "text-sm/normal";
  }
  const tmp = closure_3();
  const obj = useVibegrationsElapsedMs;
  const vibegrationsElapsedMs = obj.useVibegrationsElapsedMs(startedAt);
  const Text = Text_Text.Text;
  const obj3 = VibegrationsDuration;
  const obj4 = VibegrationsDuration;
  return <Text variant={str} color="text-muted" style={tmp.timer} lineClamp={1} accessibilityRole="timer" accessibilityLiveRegion="none" accessibilityLabel={obj3.describeElapsedLabel(vibegrationsElapsedMs)} testID="vibegrations-turn-timer">{obj4.formatElapsed(vibegrationsElapsedMs)}</Text>;
};
