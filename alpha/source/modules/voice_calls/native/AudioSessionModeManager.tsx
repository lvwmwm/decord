// Module ID: 17923
// Function ID: 17924
// Name: AudioSessionModeManager
// Dependencies: [17, 2063, 5955, 5894, 502, 2064, 2012, 2115, 5112, 1999, 1085, 1382, 17924, 6804, 2]

// Module 17923 (AudioSessionModeManager)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1085 */;
import VoicePermissionManager from "VoicePermissionManager" /* 17924 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2063 */;
import StageChannelRoleStore from "StageChannelRoleStore" /* 5955 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 5894 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import MediaEngineStore from "MediaEngineStore" /* 2012 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2115 */;
import VoiceStateStore from "VoiceStateStore" /* 5112 */;
import AppStateStore from "AppStateStore" /* 1999 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6804 */;
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
