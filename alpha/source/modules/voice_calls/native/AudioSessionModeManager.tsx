// Module ID: 20026
// Function ID: 20027
// Name: AudioSessionModeManager
// Dependencies: [17, 5091, 6879, 6757, 502, 5092, 2130, 5146, 5918, 2117, 1072, 1377, 20027, 7816, 2]

// Module 20026 (AudioSessionModeManager)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1072 */;
import VoicePermissionManager from "VoicePermissionManager" /* 20027 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 5091 */;
import StageChannelRoleStore from "StageChannelRoleStore" /* 6879 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6757 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 5092 */;
import MediaEngineStore from "MediaEngineStore" /* 2130 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5146 */;
import VoiceStateStore from "VoiceStateStore" /* 5918 */;
import AppStateStore from "AppStateStore" /* 2117 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7816 */;
import size from "module_2" /* 2 */;

let map;

let VoiceEngine;
function handleAVAudioSessionMode() {
  let obj2;
  const channel = ChannelStore.getChannel(SelectedChannelStore.getVoiceChannelId());
  if (null == channel) {
    VIDEO = VoiceEngine.AVAudioSessionMode.DEFAULT;
    obj2 = VoiceEngine;
  } else {
    const hasVideoResult = ApplicationStreamingStore.getAllActiveStreams().length > 0 || VoiceStateStore.hasVideo(channel.id) || MediaEngineStore.isVideoEnabled();
    if (!hasVideoResult) {
      if (null == EmbeddedActivitiesStore.getCurrentEmbeddedActivity()) {
        const AVAudioSessionMode = VoiceEngine.AVAudioSessionMode;
        const obj = VoicePermissionManager;
        if (obj.shouldImmediatelyRequestVoicePermissions(AuthenticationStore.getId(), channel.id)) {
          VIDEO = AVAudioSessionMode.VOICE;
          obj2 = tmp9;
        } else {
          VIDEO = AVAudioSessionMode.LISTEN;
          obj2 = tmp9;
        }
      }
    }
    VIDEO = VoiceEngine.AVAudioSessionMode.VIDEO;
    obj2 = VoiceEngine;
  }
  const tmp12 = VIDEO !== VIDEO && AppStateStore.getState() === AppStates.ACTIVE;
  if (tmp12) {
    const result = obj2.setAVAudioSessionMode(VIDEO);
  }
}
const NativeModules = react_native.NativeModules;
const AppStates = Constants.AppStates;
if (PlatformUtils.isAndroid()) {
  let obj = {
    setAVAudioSessionMode() {

      },
    AVAudioSessionMode: { VOICE: "AVAudioSessionModeVoiceChat", VIDEO: "AVAudioSessionModeVideoChat", LISTEN: "AVAudioSessionModeSpokenAudio", DEFAULT: "AVAudioSessionModeDefault" }
  };
  VoiceEngine = obj;
} else {
  VoiceEngine = NativeModules.VoiceEngine;
}
let VIDEO = VoiceEngine.AVAudioSessionMode.VOICE;
class AudioSessionModeManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    map = new Map();
    const result = map.set(ApplicationStreamingStore, handleAVAudioSessionMode);
    const result1 = result.set(VoiceStateStore, handleAVAudioSessionMode);
    const result2 = result1.set(MediaEngineStore, handleAVAudioSessionMode);
    const result3 = result2.set(StageChannelRoleStore, handleAVAudioSessionMode);
    applyArgumentsResult.stores = result3.set(EmbeddedActivitiesStore, handleAVAudioSessionMode);
    return applyArgumentsResult;
  }
}
const audioSessionModeManager = new AudioSessionModeManager();
let result = size.fileFinishedImporting("modules/voice_calls/native/AudioSessionModeManager.tsx");

export default audioSessionModeManager;
