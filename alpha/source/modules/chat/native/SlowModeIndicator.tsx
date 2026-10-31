// Module ID: 13734
// Function ID: 13735
// Name: SlowModeIndicator
// Dependencies: [19, 7830, 21, 5014, 575, 504, 7831, 5712, 11640, 6980, 5624, 2]

// Module 13734 (SlowModeIndicator)
import nativeDefault from "native" /* 575 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5712 */;
import SlowmodeUtils from "SlowmodeUtils" /* 7831 */;
import TimerIcon from "TimerIcon" /* 11640 */;
import react from "react" /* 19 */;
import SlowmodeStore from "SlowmodeStore" /* 7830 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
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
    const obj = { text: obj2.getSlowmodeDescription(channel.rateLimitPerUser), icon: TimerIcon.TimerIcon };
    const open = ToastActionCreatorsDefault.open;
    ToastActionCreatorsDefault;
    obj2 = SlowmodeUtils;
    open("CHANNEL_SLOWMODE_INFO", obj);
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
