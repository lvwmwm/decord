// Module ID: 9356
// Function ID: 9357
// Name: showAudioOutputSelector
// Dependencies: [17, 9357, 1377, 5381, 9358, 2123, 2]
// Exports: showAudioOutputSelector

// Module 9356 (showAudioOutputSelector)
import react_native from "react-native" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import VoicePanelHeaderConstants from "VoicePanelHeaderConstants" /* 9357 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(2123);
const NativeModules = react_native.NativeModules;
let closure_4 = VoicePanelHeaderConstants.VOICE_PANEL_AUDIO_OUTPUT_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/voice_calls/native/audio_output_selector/showAudioOutputSelector.tsx");

export function showAudioOutputSelector(channelId, isConnectedToVoiceChannel) {
  const obj = PlatformUtils;
  const tmp2 = dependencyMap;
  if (obj.isAndroid()) {
    const obj3 = { channelId, isConnectedToVoiceChannel };
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(9358, tmp2.paths), closure_4, obj3);
  } else {
    const AudioRoutePicker = NativeModules.AudioRoutePicker;
    if (AudioRoutePicker != null) {
      AudioRoutePicker.showAudioPicker();
    }
  }
}
