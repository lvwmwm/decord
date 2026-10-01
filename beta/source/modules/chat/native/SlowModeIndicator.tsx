// Module ID: 11465
// Function ID: 11466
// Name: SlowModeIndicator
// Dependencies: [19, 7100, 21, 4836, 576, 504, 7101, 4528, 11100, 5435, 4832, 2]

// Module 11465 (SlowModeIndicator)
import nativeDefault from "native" /* 576 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import SlowmodeUtils from "SlowmodeUtils" /* 7101 */;
import TimerIcon from "TimerIcon" /* 11100 */;
import react from "react" /* 19 */;
import SlowmodeStore from "SlowmodeStore" /* 7100 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
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
  let canBypassSlowmode;
  let tmp = closure_7();
  let obj = channel(slowmodeType[5]);
  const items = [canBypassSlowmode];
  const stateFromStores = obj.useStateFromStores(items, () => SlowmodeStore.getSlowmodeCooldownGuess(channel.id, slowmodeType));
  let obj2 = channel(slowmodeType[6]);
  canBypassSlowmode = obj2.useCanBypassSlowmode(channel);
  const items1 = [hasTypingText, canBypassSlowmode, stateFromStores];
  const items2 = [channel.rateLimitPerUser];
  const memo = stateFromStores.useMemo(() => {
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
  const callback = stateFromStores.useCallback(() => {
    let obj2;
    const tmp = ToastActionCreatorsDefault;
    const open = tmp.open;
    const obj = { key: "CHANNEL_SLOWMODE_INFO", IconComponent: TimerIcon.TimerIcon, content: obj2.getSlowmodeDescription(channel.rateLimitPerUser) };
    obj2 = SlowmodeUtils;
    open(obj);
  }, items2);
  const obj3 = { onPress: callback, style: tmp.container, children: items3 };
  const PressableOpacity = channel(slowmodeType[9]).PressableOpacity;
  items3 = [closure_5(channel(slowmodeType[10]).Text, { lineClamp: 1, allowFontScaling: false, variant: "text-xs/medium", color: "interactive-text-default", children: memo }), ];
  const obj4 = { style: tmp.icon, size: "xxs" };
  items3[1] = closure_5(channel(slowmodeType[8]).TimerIcon, obj4);
  return closure_6(PressableOpacity, obj3);
});
const result = size.fileFinishedImporting("modules/chat/native/SlowModeIndicator.tsx");

export default memoResult;
