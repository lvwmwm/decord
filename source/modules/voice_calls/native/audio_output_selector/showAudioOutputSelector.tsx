// Module ID: 8788
// Function ID: 69610
// Name: showAudioOutputSelector
// Dependencies: [27, 8789, 477, 4099, 8790, 1935, 2]
// Exports: showAudioOutputSelector

// Module 8788 (showAudioOutputSelector)
import { NativeModules } from "get ActivityIndicator";
import { VOICE_PANEL_AUDIO_OUTPUT_ACTION_SHEET_KEY as closure_4 } from "VOICE_PANEL_SETTINGS_KEY";

const result = require("set").fileFinishedImporting("modules/voice_calls/native/audio_output_selector/showAudioOutputSelector.tsx");

export const showAudioOutputSelector = function showAudioOutputSelector(channelId, closure_1) {
  let obj = require(477) /* set */;
  if (obj.isAndroid()) {
    obj = { channelId, isConnectedToVoiceChannel: closure_1 };
    importDefault(4099).openLazy(require(1935) /* maybeLoadBundle */(8790, dependencyMap.paths), closure_4, obj);
    const obj2 = importDefault(4099);
  } else {
    const AudioRoutePicker = NativeModules.AudioRoutePicker;
    if (null != AudioRoutePicker) {
      AudioRoutePicker.showAudioPicker();
    }
  }
};
