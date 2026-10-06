// Module ID: 16403
// Function ID: 16404
// Name: VibegrationsNativeTurnTimer
// Dependencies: [19, 21, 4837, 558, 576, 16404, 16352, 4833, 2]

// Module 16403 (VibegrationsNativeTurnTimer)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Text_Text from "Text/Text" /* 4833 */;
import VibegrationsDuration from "VibegrationsDuration" /* 16352 */;
import useVibegrationsElapsedMs from "useVibegrationsElapsedMs" /* 16404 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let variant;

const jsx = Fragment.jsx;
let obj = { timer: { fontVariant: ["tabular-nums"] } };
let closure_3 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((variant) => {
  let tmp6;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(9);
  variant = variant.variant;
  let str = "text-sm/normal";
  const startedAt = variant.startedAt;
  if (undefined !== variant) {
    str = variant;
  }
  const tmp4 = closure_3();
  const tmpResult = useVibegrationsElapsedMs;
  const vibegrationsElapsedMs = tmpResult.useVibegrationsElapsedMs(startedAt);
  const timer = tmp4.timer;
  if (cResult[0] !== vibegrationsElapsedMs) {
    const tmpResult3 = VibegrationsDuration;
    const describeElapsedLabelResult = tmpResult3.describeElapsedLabel(vibegrationsElapsedMs);
    cResult[0] = vibegrationsElapsedMs;
    cResult[1] = describeElapsedLabelResult;
    tmp6 = describeElapsedLabelResult;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== vibegrationsElapsedMs) {
    const tmpResult4 = VibegrationsDuration;
    const formatElapsedResult = tmpResult4.formatElapsed(vibegrationsElapsedMs);
    cResult[2] = vibegrationsElapsedMs;
    cResult[3] = formatElapsedResult;
    tmp8 = formatElapsedResult;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === tmp4.timer) {
    if (cResult[5] === tmp6) {
      if (cResult[6] === tmp8) {
        let tmp10;
        if (cResult[7] === str) {
          tmp10 = cResult[8];
        }
        return tmp10;
      }
    }
  }
  const tmp11 = jsx(Text_Text.Text, { variant: str, color: "text-muted", style: timer, lineClamp: 1, accessibilityRole: "timer", accessibilityLiveRegion: "none", accessibilityLabel: tmp6, testID: "vibegrations-turn-timer", children: tmp8 });
  cResult[4] = tmp4.timer;
  cResult[5] = tmp6;
  cResult[6] = tmp8;
  cResult[7] = str;
  cResult[8] = tmp11;
  tmp10 = tmp11;
}) : ((variant) => {
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
});
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsNativeTurnTimer.tsx");

export default tmp3;
