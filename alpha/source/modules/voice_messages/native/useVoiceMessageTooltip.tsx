// Module ID: 13766
// Function ID: 13767
// Name: useVoiceMessageTooltip
// Dependencies: [19, 1494, 13675, 1114, 7095, 9934, 2]
// Exports: default

// Module 13766 (useVoiceMessageTooltip)
import intl2 from "intl" /* 1114 */;
import useKeyboardIsOpen from "useKeyboardIsOpen" /* 7095 */;
import react from "react" /* 19 */;
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore" /* 1494 */;
import VoiceMessagesUIStore from "VoiceMessagesUIStore" /* 13675 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
let metroRequire;
({ hideVoiceMessagesTooltip: closure_4, showVoiceMessagesTooltip: hasOwnProperty, useVoiceMessagesUIStore: metroRequire } = VoiceMessagesUIStore);
const result = size.fileFinishedImporting("modules/voice_messages/native/useVoiceMessageTooltip.tsx");

export default function useVoiceMessageTooltip() {
  let visible;
  const ref = react.useRef(null);
  const tmp2 = closure_6((showVoiceMessagesTooltip) => showVoiceMessagesTooltip.showVoiceMessagesTooltip);
  _require = tmp2;
  const items = [tmp2];
  const items1 = [tmp2];
  const memo = react.useMemo(() => {
    let intl;
    const obj = { position: "top", label: intl.string(intl2.t["hP6+07"]), visible };
    intl = intl2.intl;
    return obj;
  }, items);
  const effect = react.useEffect(() => {
    let keyboardIsOpen;
    if (keyboardIsOpen) {
      let obj = useKeyboardIsOpen;
      keyboardIsOpen = obj.getKeyboardIsOpen({ includeCustomKeyboard: true });
      let closure_1 = subscribeToKeyboardUIStore(function keyboardChangeListener() {
        const obj = visible(closure_2_1[4]);
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
  let obj = require("useTooltip");
  const tooltip = obj.useTooltip(ref, memo);
  return { tooltipTargetRef: ref, showVoiceMessagesTooltip };
};
