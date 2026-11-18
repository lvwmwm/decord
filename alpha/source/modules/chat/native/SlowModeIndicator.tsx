// Module ID: 12777
// Function ID: 12778
// Name: SlowModeIndicator
// Dependencies: [32, 19, 8300, 21, 4823, 575, 504, 8301, 8849, 6941, 5414, 12035, 2]

// Module 12777 (SlowModeIndicator)
import nativeDefault from "native" /* 575 */;
import SlowmodeUtils from "SlowmodeUtils" /* 8301 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import SlowmodeStore from "SlowmodeStore" /* 8300 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4823 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { container: { alignItems: "center", flexDirection: "row" }, icon: obj2 };
obj2 = { marginLeft: nativeDefault.space.PX_4 };
let closure_7 = createStyles.createStyles(obj);
const memoResult = react.memo(function SlowModeIndicator(channel) {
  let items3;
  channel = channel.channel;
  const hasTypingText = channel.hasTypingText;
  const slowmodeType = channel.slowmodeType;
  let visible;
  let tmp = closure_7();
  const ref = visible.useRef(null);
  const tmp3 = slowmodeType(visible.useState(false), 2);
  visible = tmp3[0];
  let closure_4 = tmp3[1];
  let obj = channel(hasTypingText[6]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => SlowmodeStore.getSlowmodeCooldownGuess(channel.id, slowmodeType));
  let obj2 = channel(hasTypingText[7]);
  const canBypassSlowmode = obj2.useCanBypassSlowmode(channel);
  const items1 = [hasTypingText, canBypassSlowmode, stateFromStores];
  const items2 = [channel.rateLimitPerUser, visible];
  const memo = visible.useMemo(() => {
    const tmp = hasTypingText;
    if (tmp) {
      let slowmodeIndicatorText;
      const tmp2 = canBypassSlowmode;
      if (!tmp2) {
        slowmodeIndicatorText = null;
      }
      return slowmodeIndicatorText;
    }
    const obj = SlowmodeUtils;
    slowmodeIndicatorText = obj.getSlowmodeIndicatorText(stateFromStores, canBypassSlowmode);
  }, items1);
  const memo1 = visible.useMemo(() => {
    let obj2;
    const obj = {
      label: obj2.getSlowmodeTooltipLabel(channel.rateLimitPerUser),
      position: "top",
      visible,
      onPress() {
        return closure_1_4(false);
      }
    };
    obj2 = SlowmodeUtils;
    return obj;
  }, items2);
  const obj3 = channel(hasTypingText[8]);
  const tooltip = obj3.useTooltip(ref, memo1);
  const callback = visible.useCallback(() => {
    closure_4((arg0) => !arg0);
  }, []);
  const obj4 = { ref, onPress: callback, style: tmp.container, children: items3 };
  const PressableOpacity = channel(hasTypingText[9]).PressableOpacity;
  items3 = [stateFromStores(channel(hasTypingText[10]).Text, { lineClamp: 1, allowFontScaling: false, variant: "body-xs/medium", color: "interactive-text-default", children: memo }), ];
  const obj5 = { style: tmp.icon, size: "xxs" };
  items3[1] = stateFromStores(channel(hasTypingText[11]).TimerIcon, obj5);
  return canBypassSlowmode(PressableOpacity, obj4);
});
const result = size.fileFinishedImporting("modules/chat/native/SlowModeIndicator.tsx");

export default memoResult;
