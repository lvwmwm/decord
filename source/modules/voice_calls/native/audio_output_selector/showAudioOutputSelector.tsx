// Module ID: 8852
// Function ID: 8853
// Name: showAudioOutputSelector
// Dependencies: [17, 8853, 500, 4157, 8854, 1959, 2]
// Exports: showAudioOutputSelector

// Module 8852 (showAudioOutputSelector)
import { NativeModules } from "get ActivityIndicator";
import { VOICE_PANEL_AUDIO_OUTPUT_ACTION_SHEET_KEY as closure_4 } from "VOICE_PANEL_SETTINGS_KEY";

const result = require("set").fileFinishedImporting("modules/voice_calls/native/audio_output_selector/showAudioOutputSelector.tsx");

export const showAudioOutputSelector = function showAudioOutputSelector(channelId, closure_1) {
  let obj = require(500) /* set */;
  if (obj.isAndroid()) {
    obj = { channelId: null, isConnectedToVoiceChannel: null };
    obj[0] = channelId;
    obj[1] = closure_1;
    importDefault(4157).openLazy(require(1959) /* asyncRequireImpl */(8854, dependencyMap.paths), closure_4, obj);
    const obj2 = importDefault(4157);
  } else {
    const AudioRoutePicker = NativeModules.AudioRoutePicker;
    if (AudioRoutePicker != null) {
      AudioRoutePicker.showAudioPicker();
    }
  }
};
