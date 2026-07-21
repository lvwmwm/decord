// Module ID: 11353
// Function ID: 88306
// Name: useVoiceMessageTooltip
// Dependencies: []
// Exports: default

// Module 11353 (useVoiceMessageTooltip)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
({ hideVoiceMessagesTooltip: closure_4, showVoiceMessagesTooltip: closure_5, useVoiceMessagesUIStore: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/voice_messages/native/useVoiceMessageTooltip.tsx");

export default function useVoiceMessageTooltip() {
  const ref = React.useRef(null);
  const tmp2 = callback((showVoiceMessagesTooltip) => showVoiceMessagesTooltip.showVoiceMessagesTooltip);
  const arg1 = tmp2;
  const items = [tmp2];
  const items1 = [tmp2];
  const memo = React.useMemo(() => {
    const obj = { position: "top" };
    const intl = tmp2(closure_1[3]).intl;
    obj.label = intl.string(tmp2(closure_1[3]).t.hP6+07);
    obj.visible = tmp2;
    return obj;
  }, items);
  const effect = React.useEffect(() => {
    if (tmp2) {
      let tmp2 = closure_1;
      let obj = tmp2(closure_1[4]);
      obj = { includeCustomKeyboard: true };
      tmp2 = obj.getKeyboardIsOpen(obj);
      closure_1 = callback(() => {
        if (callback !== obj.getKeyboardIsOpen({ includeCustomKeyboard: true })) {
          callback3();
        }
      });
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        callback3();
      }, 2000);
      return () => {
        clearTimeout(closure_2);
        callback2();
      };
    }
  }, items1);
  let obj = arg1(dependencyMap[5]);
  const tooltip = obj.useTooltip(ref, memo);
  obj = { tooltipTargetRef: ref, showVoiceMessagesTooltip: closure_5 };
  return obj;
};
