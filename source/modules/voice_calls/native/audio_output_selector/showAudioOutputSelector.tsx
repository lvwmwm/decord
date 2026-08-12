// Module ID: 9219
// Function ID: 9220
// Name: showAudioOutputSelector
// Dependencies: [17, 9220, 500, 4312, 9221, 2007, 2]
// Exports: showAudioOutputSelector

// Module 9219 (showAudioOutputSelector)
import { NativeModules } from "get ActivityIndicator";
import { VOICE_PANEL_AUDIO_OUTPUT_ACTION_SHEET_KEY as closure_4 } from "VOICE_PANEL_SETTINGS_KEY";

const result = require("set").fileFinishedImporting("modules/voice_calls/native/audio_output_selector/showAudioOutputSelector.tsx");

export const showAudioOutputSelector = function showAudioOutputSelector(channelId, closure_1) {
  let obj = require(500) /* set */;
  if (obj.isAndroid()) {
    obj = { channelId: null, isConnectedToVoiceChannel: null };
    obj[0] = channelId;
    obj[1] = closure_1;
    importDefault(4312).openLazy(require(2007) /* asyncRequireImpl */(9221, dependencyMap.paths), closure_4, obj);
    const obj2 = importDefault(4312);
  } else {
    const AudioRoutePicker = NativeModules.AudioRoutePicker;
    if (AudioRoutePicker != null) {
      AudioRoutePicker.showAudioPicker();
    }
  }
};
