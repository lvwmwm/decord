// Module ID: 8775
// Function ID: 8776
// Name: showAudioOutputSelector
// Dependencies: [17, 8776, 1382, 5055, 8777, 2000, 2]
// Exports: showAudioOutputSelector

// Module 8775 (showAudioOutputSelector)
import react_native from "react-native" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import VoicePanelHeaderConstants from "VoicePanelHeaderConstants" /* 8776 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(2000);
const NativeModules = react_native.NativeModules;
let closure_4 = VoicePanelHeaderConstants.VOICE_PANEL_AUDIO_OUTPUT_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/voice_calls/native/audio_output_selector/showAudioOutputSelector.tsx");

export const showAudioOutputSelector = function showAudioOutputSelector(channelId, isConnectedToVoiceChannel) {
  const obj = PlatformUtils;
  const tmp2 = dependencyMap;
  if (obj.isAndroid()) {
    const obj3 = { channelId, isConnectedToVoiceChannel };
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(8777, tmp2.paths), closure_4, obj3);
  } else {
    const AudioRoutePicker = NativeModules.AudioRoutePicker;
    if (AudioRoutePicker != null) {
      AudioRoutePicker.showAudioPicker();
    }
  }
};
