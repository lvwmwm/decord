// Module ID: 19262
// Function ID: 19263
// Name: useSoundboardConfig
// Dependencies: [19, 4858, 2007, 19095, 504, 19115, 7550, 1114, 2]
// Exports: default

// Module 19262 (useSoundboardConfig)
import canChannelUseSoundboardDefault from "canChannelUseSoundboard" /* 7550 */;
import useIsConnectedToVoiceChannelDefault from "useIsConnectedToVoiceChannel" /* 19095 */;
import soundboard_SoundboardActionCreators from "soundboard/SoundboardActionCreators" /* 19115 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import MediaEngineStore from "MediaEngineStore" /* 2007 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

const SoundboardButtonLocation = { VOICE_CONTROLS: "call control drawer", VOICE_PANEL_CONTROLS: "voice panel controls" };
let result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useSoundboardConfig.tsx");

export default function useSoundboardConfig(arg0, analyticsSource) {
  let closure_0;
  let deaf;
  let stringResult;
  const f117057 = () => {
    const tmp = canChannelUseSoundboardDefault;
    return tmp(ChannelStore.getChannel(closure_0));
  };
  _require = arg0;
  importDefault = analyticsSource;
  let tmp = dependencyMap;
  let tmp2 = useIsConnectedToVoiceChannelDefault(arg0);
  let obj = require("get initialized");
  const items = [MediaEngineStore];
  const stateFromStores = obj.useStateFromStores(items, () => deaf.isDeaf());
  if (tmp2) {
    let flag;
    if (obj.VOICE_CONTROLS === analyticsSource) {
      flag = true;
    } else {
      flag = false;
    }
    tmp2 = flag;
  }
  const items1 = [arg0, analyticsSource];
  const items2 = [arg0];
  const callback = react.useCallback(() => {
    const channel = ChannelStore.getChannel(closure_0);
    if (null != channel) {
      const obj2 = { channel, analyticsSource };
      const obj = soundboard_SoundboardActionCreators;
      const result = obj.showSoundboardSoundPickerActionSheet(obj2);
    }
  }, items1);
  let obj2 = { visible: tmp2, handlePress: callback, disabled: stateFromStores || !react.useMemo(f117057, items2), disabledAccessibilityHint: stringResult };
  stringResult = undefined;
  stateFromStores || !react.useMemo(f117057, items2);
  if (stateFromStores) {
    const intl = tmp3(1114).intl;
    stringResult = intl.string(tmp3(1114).t.X1lQli);
  }
  return obj2;
};
export { SoundboardButtonLocation };
