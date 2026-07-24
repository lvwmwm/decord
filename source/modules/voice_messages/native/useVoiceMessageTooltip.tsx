// Module ID: 11393
// Function ID: 88609
// Name: useVoiceMessageTooltip
// Dependencies: [31, 1452, 11130, 1212, 5784, 8609, 2]
// Exports: default

// Module 11393 (useVoiceMessageTooltip)
import result from "result";
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore";
import VoiceMessageRecordingStatus from "VoiceMessageRecordingStatus";

let closure_4;
let closure_5;
let closure_6;
let require = arg1;
({ hideVoiceMessagesTooltip: closure_4, showVoiceMessagesTooltip: closure_5, useVoiceMessagesUIStore: closure_6 } = VoiceMessageRecordingStatus);
const result = require("VoiceMessageRecordingStatus").fileFinishedImporting("modules/voice_messages/native/useVoiceMessageTooltip.tsx");

export default function useVoiceMessageTooltip() {
  const ref = React.useRef(null);
  let tmp2 = callback((showVoiceMessagesTooltip) => showVoiceMessagesTooltip.showVoiceMessagesTooltip);
  const require = tmp2;
  const items = [tmp2];
  const items1 = [tmp2];
  const memo = React.useMemo(() => {
    const obj = { position: "top" };
    const intl = tmp2(outer1_1[3]).intl;
    obj.label = intl.string(tmp2(outer1_1[3]).t["hP6+07"]);
    obj.visible = tmp2;
    return obj;
  }, items);
  const effect = React.useEffect(() => {
    if (tmp2) {
      tmp2 = outer1_1;
      let obj = tmp2(outer1_1[4]);
      obj = { includeCustomKeyboard: true };
      tmp2 = obj.getKeyboardIsOpen(obj);
      let closure_1 = outer1_3(() => {
        if (callback !== obj.getKeyboardIsOpen({ includeCustomKeyboard: true })) {
          outer2_4();
        }
      });
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        outer2_4();
      }, 2000);
      return () => {
        clearTimeout(result);
        callback2();
      };
    }
  }, items1);
  let obj = require(8609) /* useTooltipHelper */;
  const tooltip = obj.useTooltip(ref, memo);
  obj = { tooltipTargetRef: ref, showVoiceMessagesTooltip: closure_5 };
  return obj;
};
