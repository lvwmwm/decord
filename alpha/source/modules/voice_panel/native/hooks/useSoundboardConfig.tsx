// Module ID: 19254
// Function ID: 19255
// Name: useSoundboardConfig
// Dependencies: [19, 5159, 2133, 504, 19255, 11669, 1113, 2]
// Exports: default

// Module 19254 (useSoundboardConfig)
import canChannelUseSoundboardDefault from "canChannelUseSoundboard" /* 11669 */;
import soundboard_SoundboardActionCreators from "soundboard/SoundboardActionCreators" /* 19255 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 5159 */;
import MediaEngineStore from "MediaEngineStore" /* 2133 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const SoundboardButtonLocation = { VOICE_CONTROLS: "call control drawer", VOICE_PANEL_CONTROLS: "voice panel controls", VOICE_PANEL_DOCK: "voice panel dock" };
let result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useSoundboardConfig.tsx");

export default function useSoundboardConfig(arg0, analyticsSource) {
  let closure_0;
  let deaf;
  let stringResult;
  const f119719 = () => {
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
    const obj2 = { visible: flag, handlePress: callback, disabled: stateFromStores || !react.useMemo(f119719, items2), disabledAccessibilityHint: stringResult };
    stringResult = undefined;
    stateFromStores || !react.useMemo(f119719, items2);
    if (stateFromStores) {
      const intl = tmp(1113).intl;
      stringResult = intl.string(tmp(1113).t.X1lQli);
    }
    return obj2;
  }
  flag = true;
};
export { SoundboardButtonLocation };
