// Module ID: 8900
// Function ID: 70131
// Name: showAudioOutputSelector
// Dependencies: [27, 8901, 477, 4098, 8902, 1934, 2]
// Exports: showAudioOutputSelector

// Module 8900 (showAudioOutputSelector)
import { NativeModules } from "get ActivityIndicator";
import { VOICE_PANEL_AUDIO_OUTPUT_ACTION_SHEET_KEY as closure_4 } from "VOICE_PANEL_SETTINGS_KEY";

const result = require("set").fileFinishedImporting("modules/voice_calls/native/audio_output_selector/showAudioOutputSelector.tsx");

export const showAudioOutputSelector = function showAudioOutputSelector(channelId, closure_1) {
  let obj = require(477) /* set */;
  if (obj.isAndroid()) {
    obj = { channelId, isConnectedToVoiceChannel: closure_1 };
    importDefault(4098).openLazy(require(1934) /* maybeLoadBundle */(8902, dependencyMap.paths), closure_4, obj);
    const obj2 = importDefault(4098);
  } else {
    const AudioRoutePicker = NativeModules.AudioRoutePicker;
    if (null != AudioRoutePicker) {
      AudioRoutePicker.showAudioPicker();
    }
  }
};
