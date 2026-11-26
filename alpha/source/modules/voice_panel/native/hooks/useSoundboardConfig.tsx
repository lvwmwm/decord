// Module ID: 18226
// Function ID: 18227
// Name: useSoundboardConfig
// Dependencies: [19, 4892, 2132, 504, 18227, 10413, 1112, 2]
// Exports: default

// Module 18226 (useSoundboardConfig)
import canChannelUseSoundboardDefault from "canChannelUseSoundboard" /* 10413 */;
import soundboard_SoundboardActionCreators from "soundboard/SoundboardActionCreators" /* 18227 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4892 */;
import MediaEngineStore from "MediaEngineStore" /* 2132 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const SoundboardButtonLocation = { VOICE_CONTROLS: "call control drawer", VOICE_PANEL_CONTROLS: "voice panel controls", VOICE_PANEL_DOCK: "voice panel dock" };
let result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useSoundboardConfig.tsx");

export default function useSoundboardConfig(arg0, analyticsSource) {
  let closure_0;
  let deaf;
  let stringResult;
  const f114411 = () => {
    const tmp = canChannelUseSoundboardDefault;
    return tmp(ChannelStore.getChannel(closure_0));
  };
  _require = arg0;
  let tmp = _require;
  let obj = require("get initialized");
  const items = [MediaEngineStore];
  const stateFromStores = obj.useStateFromStores(items, () => deaf.isDeaf());
  const tmp4 = obj;
  if (obj.VOICE_CONTROLS !== analyticsSource) {
    let flag;
    if (tmp4.VOICE_PANEL_CONTROLS !== analyticsSource) {
      flag = false;
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
    const obj2 = { visible: flag, handlePress: callback, disabled: stateFromStores || !react.useMemo(f114411, items2), disabledAccessibilityHint: stringResult };
    stringResult = undefined;
    stateFromStores || !react.useMemo(f114411, items2);
    if (stateFromStores) {
      const intl = tmp(1112).intl;
      stringResult = intl.string(tmp(1112).t.X1lQli);
    }
    return obj2;
  }
  flag = true;
};
export { SoundboardButtonLocation };
