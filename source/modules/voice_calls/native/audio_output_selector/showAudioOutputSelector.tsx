// Module ID: 8854
// Function ID: 69875
// Name: showAudioOutputSelector
// Dependencies: []
// Exports: showAudioOutputSelector

// Module 8854 (showAudioOutputSelector)
const NativeModules = require(dependencyMap[0]).NativeModules;
let closure_4 = require(dependencyMap[1]).VOICE_PANEL_AUDIO_OUTPUT_ACTION_SHEET_KEY;
const _module = require(dependencyMap[6]);
const result = _module.fileFinishedImporting("modules/voice_calls/native/audio_output_selector/showAudioOutputSelector.tsx");

export const showAudioOutputSelector = function showAudioOutputSelector(channelId, closure_1) {
  let obj = require(dependencyMap[2]);
  if (obj.isAndroid()) {
    obj = { channelId, isConnectedToVoiceChannel: closure_1 };
    importDefault(dependencyMap[3]).openLazy(require(dependencyMap[5])(dependencyMap[4], dependencyMap.paths), closure_4, obj);
    const obj2 = importDefault(dependencyMap[3]);
  } else {
    const AudioRoutePicker = NativeModules.AudioRoutePicker;
    if (null != AudioRoutePicker) {
      AudioRoutePicker.showAudioPicker();
    }
  }
};
