// Module ID: 8766
// Function ID: 8767
// Name: showAudioOutputSelector
// Dependencies: [17, 8767, 1381, 5054, 8768, 1999, 2]
// Exports: showAudioOutputSelector

// Module 8766 (showAudioOutputSelector)
import react_native from "react-native" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import VoicePanelHeaderConstants from "VoicePanelHeaderConstants" /* 8767 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(1999);
const NativeModules = react_native.NativeModules;
let closure_4 = VoicePanelHeaderConstants.VOICE_PANEL_AUDIO_OUTPUT_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/voice_calls/native/audio_output_selector/showAudioOutputSelector.tsx");

export const showAudioOutputSelector = function showAudioOutputSelector(channelId, isConnectedToVoiceChannel) {
  const obj = PlatformUtils;
  const tmp2 = dependencyMap;
  if (obj.isAndroid()) {
    const obj3 = { channelId, isConnectedToVoiceChannel };
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(8768, tmp2.paths), closure_4, obj3);
  } else {
    const AudioRoutePicker = NativeModules.AudioRoutePicker;
    if (AudioRoutePicker != null) {
      AudioRoutePicker.showAudioPicker();
    }
  }
};
