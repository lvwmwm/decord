// Module ID: 15751
// Function ID: 120441
// Name: useSoundboardConfig
// Dependencies: [0, 0, 0]
// Exports: default

// Module 15751 (useSoundboardConfig)
import result from "result";
import closure_4 from "result";

const obj = { VOICE_CONTROLS: "call control drawer", VOICE_PANEL_CONTROLS: "voice panel controls" };
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/voice_panel/native/hooks/useSoundboardConfig.tsx");

export default function useSoundboardConfig(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  let tmp = importDefault(dependencyMap[2])(arg0);
  let obj = arg1(dependencyMap[3]);
  obj = {};
  if (tmp) {
    if (obj.VOICE_CONTROLS === arg1) {
      let flag = true;
    } else {
      flag = false;
    }
    tmp = flag;
  }
  obj.visible = tmp;
  const items = [arg0, arg1];
  obj.handlePress = React.useCallback(() => {
    const channel = store.getChannel(arg0);
    if (null != channel) {
      let obj = arg0(closure_2[5]);
      obj = { channel, analyticsSource: arg1 };
      const result = obj.showSoundboardSoundPickerActionSheet(obj);
    }
  }, items);
  const items1 = [arg0];
  obj.disabled = React.useMemo(() => !arg1(closure_2[6])(store.getChannel(arg0)), items1);
  obj.showIndicator = !obj.useIsDismissibleContentDismissed_UNSAFE(arg1(dependencyMap[4]).DismissibleContent.SOUNDBOARD_MOBILE_NEW_BADGE);
  return obj;
};
export const SoundboardButtonLocation = obj;
