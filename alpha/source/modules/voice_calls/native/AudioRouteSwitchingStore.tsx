// Module ID: 19227
// Function ID: 19228
// Name: AudioRouteSwitchingStore
// Dependencies: [17, 4863, 5764, 5784, 5785, 504, 572, 2]

// Module 19227 (AudioRouteSwitchingStore)
import react_native from "react-native" /* 17 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import VoiceCallTypes from "VoiceCallTypes" /* 5785 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5764 */;
import AudioRouteStore from "AudioRouteStore" /* 5784 */;
import size from "module_2" /* 2 */;

function handleAudioRouteChanged() {
  const tmp = c7;
  if (tmp) {
    const currentRouteType = AudioRouteStore.getCurrentRouteType();
    let flag2 = currentRouteType !== VoiceCallTypes.RouteTypes.UNKNOWN;
    if (flag2) {
      if (currentRouteType !== VoiceCallTypes.RouteTypes.SPEAKER) {
        if (currentRouteType !== VoiceCallTypes.RouteTypes.BLUETOOTH) {
          if (currentRouteType !== VoiceCallTypes.RouteTypes.WIRED) {
            const AudioRoutePicker = NativeModules.AudioRoutePicker;
            if (AudioRoutePicker != null) {
              AudioRoutePicker.toggleSpeaker(true);
            }
            c7 = false;
            flag2 = true;
          }
        }
      }
      c7 = false;
      flag2 = true;
    }
    return flag2;
  } else {
    return false;
  }
}
const NativeModules = react_native.NativeModules;
let c6 = null;
let c7 = false;
const Store = get_initializedDefault.Store;
class AudioRouteSwitchingStore extends Store {
  initialize() {
    this.waitFor(AudioRouteStore, ChannelStore, RTCConnectionStore);
    const items = [AudioRouteStore];
    this.syncWith(items, handleAudioRouteChanged);
  }
  getConnectedChannelId() {
    return c6;
  }
  getQueueAudioSwap() {
    return c7;
  }
}
const prototype = AudioRouteSwitchingStore.prototype;
AudioRouteSwitchingStore.displayName = "AudioRouteSwitchingStore";
const obj = {
  RTC_CONNECTION_STATE: function handleConnectionStatusChanged() {
    let id;
    const isConnectedResult = RTCConnectionStore.isConnected();
    const channelId = RTCConnectionStore.getChannelId();
    if (isConnectedResult) {
      if (null != channelId) {
        if (channelId !== id) {
          const channel = ChannelStore.getChannel(channelId);
          let tmp10 = null == channel;
          if (!tmp10) {
            const isGuildStageVoiceResult = channel.isGuildStageVoice();
            tmp10 = !isGuildStageVoiceResult && !channel.isGuildVoice();
            !isGuildStageVoiceResult && !channel.isGuildVoice();
          }
          if (!tmp10) {
            if (null != channel) {
              if (id !== channel.id) {
                c7 = true;
              }
              id = channel.id;
            }
          } else {
            id = null;
          }
          return true;
        }
      }
    }
    let flag = !isConnectedResult && null == channelId && null != id;
    if (flag) {
      id = null;
      flag = true;
    }
    return flag;
  }
};
const audioRouteSwitchingStore = new AudioRouteSwitchingStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/voice_calls/native/AudioRouteSwitchingStore.tsx");

export default audioRouteSwitchingStore;
