// Module ID: 8832
// Function ID: 69762
// Name: showAudioOutputSelector
// Dependencies: [27, 8833, 477, 4133, 8834, 1935, 2]
// Exports: showAudioOutputSelector

// Module 8832 (showAudioOutputSelector)
import { NativeModules } from "get ActivityIndicator";
import { VOICE_PANEL_AUDIO_OUTPUT_ACTION_SHEET_KEY as closure_4 } from "VOICE_PANEL_SETTINGS_KEY";

const result = require("set").fileFinishedImporting("modules/voice_calls/native/audio_output_selector/showAudioOutputSelector.tsx");

export const showAudioOutputSelector = function showAudioOutputSelector(channelId, closure_1) {
  let obj = require(477) /* set */;
  if (obj.isAndroid()) {
    obj = { channelId, isConnectedToVoiceChannel: closure_1 };
    importDefault(4133).openLazy(require(1935) /* maybeLoadBundle */(8834, dependencyMap.paths), closure_4, obj);
    const obj2 = importDefault(4133);
  } else {
    const AudioRoutePicker = NativeModules.AudioRoutePicker;
    if (null != AudioRoutePicker) {
      AudioRoutePicker.showAudioPicker();
    }
  }
};
