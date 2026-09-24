// Module ID: 12441
// Function ID: 12442
// Name: useVoiceMessageTooltip
// Dependencies: [19, 1484, 12126, 558, 568, 1119, 6893, 10492, 2]

// Module 12441 (useVoiceMessageTooltip)
import util from "util" /* 1119 */;
import useKeyboardIsOpen from "useKeyboardIsOpen" /* 6893 */;
import noop from "module_19" /* 19 */;
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore" /* 1484 */;

const require = globalThis.__r;

require = fn;
const VoiceMessagesUIStore = fn(12126);
({ hideVoiceMessagesTooltip: closure_4, showVoiceMessagesTooltip: hasOwnProperty, useVoiceMessagesUIStore: metroRequire } = VoiceMessagesUIStore);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_messages/native/useVoiceMessageTooltip.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(8);
  const ref = noop.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(showVoiceMessagesTooltip) {
      return showVoiceMessagesTooltip.showVoiceMessagesTooltip;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const tmp6 = closure_6(first);
  _require = tmp6;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1119).intl;
    const stringResult = intl.string(tmp(1119).t["hP6+07"]);
    cResult[1] = stringResult;
    let tmp7 = stringResult;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== tmp6) {
    const obj3 = { position: "top", label: tmp7, visible: tmp6 };
    cResult[2] = tmp6;
    cResult[3] = obj3;
    let tmp9 = obj3;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== tmp6) {
    const fn2 = function h() {
      if (keyboardIsOpen) {
        keyboardIsOpen = useKeyboardIsOpen.getKeyboardIsOpen({ includeCustomKeyboard: true });
        closure_1 = subscribeToKeyboardUIStore(() => {
          if (closure_0 !== obj.getKeyboardIsOpen({ includeCustomKeyboard: true })) {
            closure_2_4();
          }
        });
        const _setTimeout = setTimeout;
        const timeout = setTimeout(() => {
          closure_1_4();
        }, 2000);
        return () => {
          clearTimeout(closure_2);
          closure_1();
        };
      }
    };
    const items = [tmp6];
    cResult[4] = tmp6;
    cResult[5] = fn2;
    cResult[6] = items;
    let tmp11 = items;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[5];
    tmp11 = cResult[6];
  }
  const effect = noop.useEffect(tmp10, tmp11);
  const obj = require("c");
  const tooltip = require("useTooltip").useTooltip(ref, tmp9);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { tooltipTargetRef: ref, showVoiceMessagesTooltip };
    cResult[7] = obj4;
    let tmp14 = obj4;
  } else {
    tmp14 = cResult[7];
  }
  return tmp14;
}) : (() => {
  const ref = noop.useRef(null);
  const tmp2 = closure_6((showVoiceMessagesTooltip) => showVoiceMessagesTooltip.showVoiceMessagesTooltip);
  _require = tmp2;
  const items = [tmp2];
  const items1 = [tmp2];
  const memo = noop.useMemo(() => {
    const obj = { position: "top", label: null, visible: null };
    const intl = util.intl;
    obj.label = intl.string(util.t["hP6+07"]);
    obj.visible = visible;
    return obj;
  }, items);
  const effect = noop.useEffect(() => {
    if (keyboardIsOpen) {
      keyboardIsOpen = useKeyboardIsOpen.getKeyboardIsOpen({ includeCustomKeyboard: true });
      closure_1 = subscribeToKeyboardUIStore(() => {
        if (closure_0 !== obj.getKeyboardIsOpen({ includeCustomKeyboard: true })) {
          closure_2_4();
        }
      });
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        closure_1_4();
      }, 2000);
      return () => {
        clearTimeout(closure_2);
        closure_1();
      };
    }
  }, items1);
  const tooltip = require("useTooltip").useTooltip(ref, memo);
  return { tooltipTargetRef: ref, showVoiceMessagesTooltip };
});
