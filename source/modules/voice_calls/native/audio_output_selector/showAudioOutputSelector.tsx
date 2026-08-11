// Module ID: 9179
// Function ID: 9180
// Name: showAudioOutputSelector
// Dependencies: [17, 9180, 500, 4271, 9181, 2007, 2]
// Exports: showAudioOutputSelector

// Module 9179 (showAudioOutputSelector)
import { NativeModules } from "get ActivityIndicator";
import { VOICE_PANEL_AUDIO_OUTPUT_ACTION_SHEET_KEY as closure_4 } from "VOICE_PANEL_SETTINGS_KEY";

const result = require("set").fileFinishedImporting("modules/voice_calls/native/audio_output_selector/showAudioOutputSelector.tsx");

export const showAudioOutputSelector = function showAudioOutputSelector(channelId, closure_1) {
  let obj = require(500) /* set */;
  if (obj.isAndroid()) {
    obj = { channelId: null, isConnectedToVoiceChannel: null };
    obj[0] = channelId;
    obj[1] = closure_1;
    importDefault(4271).openLazy(require(2007) /* asyncRequireImpl */(9181, dependencyMap.paths), closure_4, obj);
    const obj2 = importDefault(4271);
  } else {
    const AudioRoutePicker = NativeModules.AudioRoutePicker;
    if (AudioRoutePicker != null) {
      AudioRoutePicker.showAudioPicker();
    }
  }
};
