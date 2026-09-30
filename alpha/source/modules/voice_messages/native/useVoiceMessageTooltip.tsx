// Module ID: 11943
// Function ID: 11944
// Name: useVoiceMessageTooltip
// Dependencies: [19, 1481, 11645, 1115, 6239, 10793, 2]
// Exports: default

// Module 11943 (useVoiceMessageTooltip)
import util from "util" /* 1115 */;
import useKeyboardIsOpen from "useKeyboardIsOpen" /* 6239 */;
import noop from "module_19" /* 19 */;
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore" /* 1481 */;

const require = globalThis.__r;

require = fn;
const VoiceMessagesUIStore = fn(11645);
({ hideVoiceMessagesTooltip: closure_4, showVoiceMessagesTooltip: hasOwnProperty, useVoiceMessagesUIStore: metroRequire } = VoiceMessagesUIStore);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_messages/native/useVoiceMessageTooltip.tsx");

export default function useVoiceMessageTooltip() {
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
};
