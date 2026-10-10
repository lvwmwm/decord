// Module ID: 11657
// Function ID: 11658
// Name: SlowModeIndicator
// Dependencies: [19, 7374, 21, 5092, 587, 558, 576, 504, 7375, 4809, 10763, 5088, 6184, 2]

// Module 11657 (SlowModeIndicator)
import nativeDefault from "native" /* 587 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4809 */;
import SlowmodeUtils from "SlowmodeUtils" /* 7375 */;
import TimerIcon from "TimerIcon" /* 10763 */;
import react from "react" /* 19 */;
import SlowmodeStore from "SlowmodeStore" /* 7374 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { container: { alignItems: "center", flexDirection: "row" }, icon: obj2 };
obj2 = { marginLeft: nativeDefault.space.PX_4 };
let closure_7 = createStyles.createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function SlowModeIndicator(channel) {
  let first;
  let items1;
  const tmp = channel;
  let obj = channel(576);
  const cResult = obj.c(18);
  channel = channel.channel;
  const slowmodeType = channel.slowmodeType;
  const hasTypingText = channel.hasTypingText;
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SlowmodeStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channel.id) {
    let tmp7;
    let tmp10;
    if (cResult[2] === slowmodeType) {
      tmp7 = cResult[3];
    }
    const tmpResult = tmp(504);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
    const tmpResult3 = tmp(7375);
    const canBypassSlowmode = tmpResult3.useCanBypassSlowmode(channel);
    if (hasTypingText) {
      let tmp13;
      let tmp14;
      let tmp17;
      if (!canBypassSlowmode) {
        tmp10 = null;
      }
      if (cResult[7] !== channel.rateLimitPerUser) {
        const fn2 = function h() {
          let obj2;
          const obj = { text: obj2.getSlowmodeDescription(channel.rateLimitPerUser), icon: TimerIcon.TimerIcon };
          const open = ToastActionCreatorsDefault.open;
          ToastActionCreatorsDefault;
          obj2 = SlowmodeUtils;
          open("CHANNEL_SLOWMODE_INFO", obj);
        };
        cResult[7] = channel.rateLimitPerUser;
        cResult[8] = fn2;
        tmp13 = fn2;
      } else {
        tmp13 = cResult[8];
      }
      if (cResult[9] !== tmp10) {
        let obj2 = { lineClamp: 1, allowFontScaling: false, variant: "text-xs/medium", color: "interactive-text-default", children: tmp10 };
        const tmp16 = closure_5(tmp(5088).Text, obj2);
        cResult[9] = tmp10;
        cResult[10] = tmp16;
        tmp14 = tmp16;
      } else {
        tmp14 = cResult[10];
      }
      if (cResult[11] !== tmp4.icon) {
        const obj3 = { style: tmp4.icon, size: "xxs" };
        const tmp19 = closure_5(tmp(10763).TimerIcon, obj3);
        cResult[11] = tmp4.icon;
        cResult[12] = tmp19;
        tmp17 = tmp19;
      } else {
        tmp17 = cResult[12];
      }
      if (cResult[13] === tmp13) {
        if (cResult[14] === tmp4.container) {
          if (cResult[15] === tmp14) {
            let tmp20;
            if (cResult[16] === tmp17) {
              tmp20 = cResult[17];
            }
            return tmp20;
          }
        }
      }
      const obj4 = { onPress: tmp13, style: tmp4.container, children: items1 };
      items1 = [tmp14, tmp17];
      const tmp22 = closure_6(tmp(6184).PressableOpacity, obj4);
      cResult[13] = tmp13;
      cResult[14] = tmp4.container;
      cResult[15] = tmp14;
      cResult[16] = tmp17;
      cResult[17] = tmp22;
      tmp20 = tmp22;
    }
    if (cResult[4] === canBypassSlowmode) {
      let tmp11;
      if (cResult[5] === stateFromStores) {
        tmp11 = cResult[6];
      }
      tmp10 = tmp11;
    }
    const tmpResult4 = tmp(7375);
    const slowmodeIndicatorText = tmpResult4.getSlowmodeIndicatorText(stateFromStores, canBypassSlowmode);
    cResult[4] = canBypassSlowmode;
    cResult[5] = stateFromStores;
    cResult[6] = slowmodeIndicatorText;
    tmp11 = slowmodeIndicatorText;
  }
  const fn = function u() {
    return SlowmodeStore.getSlowmodeCooldownGuess(channel.id, slowmodeType);
  };
  cResult[1] = channel.id;
  cResult[2] = slowmodeType;
  cResult[3] = fn;
  tmp7 = fn;
}) : (function SlowModeIndicator(channel) {
  let items3;
  channel = channel.channel;
  const hasTypingText = channel.hasTypingText;
  const slowmodeType = channel.slowmodeType;
  let canBypassSlowmode;
  let tmp = closure_7();
  let obj = channel(slowmodeType[7]);
  const items = [canBypassSlowmode];
  const stateFromStores = obj.useStateFromStores(items, () => SlowmodeStore.getSlowmodeCooldownGuess(channel.id, slowmodeType));
  let obj2 = channel(slowmodeType[8]);
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
  const PressableOpacity = channel(slowmodeType[12]).PressableOpacity;
  items3 = [closure_5(channel(slowmodeType[11]).Text, { lineClamp: 1, allowFontScaling: false, variant: "text-xs/medium", color: "interactive-text-default", children: memo }), ];
  const obj4 = { style: tmp.icon, size: "xxs" };
  items3[1] = closure_5(channel(slowmodeType[10]).TimerIcon, obj4);
  return closure_6(PressableOpacity, obj3);
}));
const result = size.fileFinishedImporting("modules/chat/native/SlowModeIndicator.tsx");

export default memoResult;
