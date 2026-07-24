// Module ID: 16038
// Function ID: 123981
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 15, 17, 18, 27, 1347, 4954, 4149, 1194, 1348, 4177, 1906, 4146, 6651, 653, 477, 16039, 5078, 2]

// Module 16038 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import ME from "ME";
import closure_5 from "_isNativeReflectConstruct";
import AutomaticLifecycleManager from "AutomaticLifecycleManager";
import closure_7 from "_createForOfIteratorHelperLoose";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import { AppStates } from "ME";
import set from "set";
import tmp2 from "AutomaticLifecycleManager";
import set from "_possibleConstructorReturn";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleAVAudioSessionMode() {
  channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
  if (null == channel) {
    let VIDEO = VoiceEngine.AVAudioSessionMode.DEFAULT;
  } else {
    let hasVideoResult = allActiveStreams.getAllActiveStreams().length > 0;
    if (!hasVideoResult) {
      hasVideoResult = closure_14.hasVideo(channel.id);
    }
    if (!hasVideoResult) {
      hasVideoResult = videoEnabled.isVideoEnabled();
    }
    if (!hasVideoResult) {
      if (null == currentEmbeddedActivity.getCurrentEmbeddedActivity()) {
        const AVAudioSessionMode = VoiceEngine.AVAudioSessionMode;
        VIDEO = require(16039) /* _isNativeReflectConstruct */.shouldImmediatelyRequestVoicePermissions(id.getId(), channel.id) ? AVAudioSessionMode.VOICE : AVAudioSessionMode.LISTEN;
        const obj = require(16039) /* _isNativeReflectConstruct */;
      }
    }
    VIDEO = VoiceEngine.AVAudioSessionMode.VIDEO;
  }
  let tmp12 = VIDEO !== VIDEO;
  if (tmp12) {
    tmp12 = state.getState() === AppStates.ACTIVE;
  }
  if (tmp12) {
    const result = VoiceEngine.setAVAudioSessionMode(VIDEO);
  }
}
if (set.isAndroid()) {
  set = {
    setAVAudioSessionMode(VIDEO) {

      },
    AVAudioSessionMode: { VOICE: "AVAudioSessionModeVoiceChat", VIDEO: "AVAudioSessionModeVideoChat", LISTEN: "AVAudioSessionModeSpokenAudio", DEFAULT: "AVAudioSessionModeDefault" }
  };
  let VoiceEngine = set;
} else {
  VoiceEngine = require("get ActivityIndicator").NativeModules.VoiceEngine;
}
const VOICE = VoiceEngine.AVAudioSessionMode.VOICE;
tmp2 = new tmp2();
let result = set.fileFinishedImporting("modules/voice_calls/native/AudioSessionModeManager.tsx");

export default tmp2;
