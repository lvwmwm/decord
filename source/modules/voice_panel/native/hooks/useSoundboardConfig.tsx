// Module ID: 15876
// Function ID: 122657
// Name: useSoundboardConfig
// Dependencies: [31, 1348, 15719, 3946, 1334, 15744, 5770, 2]
// Exports: default

// Module 15876 (useSoundboardConfig)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
let obj = { VOICE_CONTROLS: "call control drawer", VOICE_PANEL_CONTROLS: "voice panel controls" };
let result = require("useIsConnectedToVoiceChannel").fileFinishedImporting("modules/voice_panel/native/hooks/useSoundboardConfig.tsx");

export default function useSoundboardConfig(arg0, arg1) {
  const _require = arg0;
  const importDefault = arg1;
  let tmp = importDefault(15719)(arg0);
  let obj = _require(3946);
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
    const channel = outer1_4.getChannel(callback);
    if (null != channel) {
      let obj = callback(outer1_2[5]);
      obj = { channel, analyticsSource: closure_1 };
      const result = obj.showSoundboardSoundPickerActionSheet(obj);
    }
  }, items);
  const items1 = [arg0];
  obj.disabled = React.useMemo(() => !callback2(outer1_2[6])(outer1_4.getChannel(closure_0)), items1);
  obj.showIndicator = !obj.useIsDismissibleContentDismissed_UNSAFE(_require(1334).DismissibleContent.SOUNDBOARD_MOBILE_NEW_BADGE);
  return obj;
};
export const SoundboardButtonLocation = obj;
