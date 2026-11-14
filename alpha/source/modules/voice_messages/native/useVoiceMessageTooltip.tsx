// Module ID: 14664
// Function ID: 14665
// Name: useVoiceMessageTooltip
// Dependencies: [19, 14570, 14665, 6836, 1113, 9426, 2]
// Exports: default

// Module 14664 (useVoiceMessageTooltip)
import intl2 from "intl" /* 1113 */;
import react from "react" /* 19 */;
import VoiceMessagesUIStore from "VoiceMessagesUIStore" /* 14570 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let closure_4;
let hasOwnProperty;
let metroRequire;
({ hideVoiceMessagesTooltip: closure_4, showVoiceMessagesTooltip: hasOwnProperty, useVoiceMessagesUIStore: metroRequire } = VoiceMessagesUIStore);
const result = size.fileFinishedImporting("modules/voice_messages/native/useVoiceMessageTooltip.tsx");

export default function useVoiceMessageTooltip() {
  let targetBottomInset;
  let visible;
  let obj = react;
  const ref = react.useRef(null);
  targetBottomInset = targetBottomInset(14665)().targetBottomInset;
  let tmp3 = targetBottomInset(6836)(targetBottomInset);
  if (tmp3 == null) {
    tmp3 = targetBottomInset;
  }
  targetBottomInset = tmp3;
  const tmp4 = closure_6((showVoiceMessagesTooltip) => showVoiceMessagesTooltip.showVoiceMessagesTooltip);
  dependencyMap = tmp4;
  const items = [tmp4];
  const items1 = [targetBottomInset, tmp3];
  const memo = obj.useMemo(() => {
    let intl;
    const obj = { position: "top", label: intl.string(intl2.t["hP6+07"]), visible };
    intl = intl2.intl;
    return obj;
  }, items);
  const effect = obj.useEffect(() => {
    if (targetBottomInset !== targetBottomInset) {
      React3();
    }
  }, items1);
  const items2 = [tmp4];
  const effect1 = obj.useEffect(() => {
    if (visible) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        closure_1_4();
      }, 2000);
      return () => {
        clearTimeout(closure_0);
      };
    }
  }, items2);
  const obj2 = targetBottomInset(9426);
  const tooltip = obj2.useTooltip(ref, memo);
  return { tooltipTargetRef: ref, showVoiceMessagesTooltip };
};
