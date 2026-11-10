// Module ID: 19637
// Function ID: 19638
// Name: useSoundboardConfig
// Dependencies: [19, 4991, 2130, 19551, 504, 19571, 7631, 1113, 2]
// Exports: default

// Module 19637 (useSoundboardConfig)
import canChannelUseSoundboardDefault from "canChannelUseSoundboard" /* 7631 */;
import useIsConnectedToVoiceChannelDefault from "useIsConnectedToVoiceChannel" /* 19551 */;
import soundboard_SoundboardActionCreators from "soundboard/SoundboardActionCreators" /* 19571 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4991 */;
import MediaEngineStore from "MediaEngineStore" /* 2130 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

const SoundboardButtonLocation = { VOICE_CONTROLS: "call control drawer", VOICE_PANEL_CONTROLS: "voice panel controls", VOICE_PANEL_DOCK: "voice panel dock" };
let result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useSoundboardConfig.tsx");

export default function useSoundboardConfig(arg0, analyticsSource) {
  let closure_0;
  let deaf;
  let stringResult;
  const f119125 = () => {
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
    const tmp5 = obj;
    if (obj.VOICE_CONTROLS !== analyticsSource) {
      let flag;
      if (tmp5.VOICE_PANEL_CONTROLS !== analyticsSource) {
        flag = false;
      }
      tmp2 = flag;
    }
    flag = true;
  }
  const items1 = [arg0, analyticsSource];
  const items2 = [arg0];
  const callback = react.useCallback(() => {
    let flag;
    const channel = ChannelStore.getChannel(closure_0);
    if (null != channel) {
      const obj = { channel, analyticsSource, startExpanded: flag };
      flag = true;
      const showSoundboardSoundPickerActionSheet = soundboard_SoundboardActionCreators.showSoundboardSoundPickerActionSheet;
      soundboard_SoundboardActionCreators;
      if (obj.VOICE_CONTROLS !== analyticsSource) {
        flag = true;
        if (obj.VOICE_PANEL_CONTROLS !== analyticsSource) {
          flag = true;
          if (obj.VOICE_PANEL_DOCK === analyticsSource) {
            flag = false;
          }
        }
      }
      const result = showSoundboardSoundPickerActionSheet(obj);
    }
  }, items1);
  const obj2 = { visible: tmp2, handlePress: callback, disabled: stateFromStores || !react.useMemo(f119125, items2), disabledAccessibilityHint: stringResult };
  stringResult = undefined;
  stateFromStores || !react.useMemo(f119125, items2);
  if (stateFromStores) {
    const intl = tmp3(1113).intl;
    stringResult = intl.string(tmp3(1113).t.X1lQli);
  }
  return obj2;
};
export { SoundboardButtonLocation };
