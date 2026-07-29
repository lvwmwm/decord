// Module ID: 15946
// Function ID: 15947
// Name: handleAudioRouteChanged
// Dependencies: [17, 8832, 1372, 4261, 15947, 8833, 589, 709, 2]

// Module 15946 (handleAudioRouteChanged)
import { NativeModules } from "get ActivityIndicator";
import handleAudioRouteChanged from "handleAudioRouteChanged";
import ensureGuildLoaded from "ensureGuildLoaded";
import createRTCConnection from "createRTCConnection";
import { Store } from "initialize";

function handleAudioRouteChanged() {
  if (c8) {
    currentRouteType = currentRouteType.getCurrentRouteType();
    let flag2 = currentRouteType !== tmp3(8833).RouteTypes.UNKNOWN;
    if (flag2) {
      if (tmp5) {
        c8 = false;
        flag2 = true;
      } else {
        const AudioRoutePicker = NativeModules.AudioRoutePicker;
        if (AudioRoutePicker != null) {
          AudioRoutePicker.toggleSpeaker(true);
        }
        c8 = false;
        flag2 = true;
      }
    }
    return flag2;
  } else {
    return false;
  }
}
let c7 = null;
let c8 = false;
class StageChannelAudioStore extends Store {
}
const prototype = StageChannelAudioStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(handleAudioRouteChanged, ensureGuildLoaded, createRTCConnection);
  const items = [handleAudioRouteChanged];
  this.syncWith(items, handleAudioRouteChanged);
};
prototype["getConnectedChannelId"] = function getConnectedChannelId() {
  return c7;
};
prototype["getQueueAudioSwap"] = function getQueueAudioSwap() {
  return c8;
};
StageChannelAudioStore.displayName = "StageChannelAudioStore";
const stageChannelAudioStore = new StageChannelAudioStore(require("dispatcher"), {
  RTC_CONNECTION_STATE: function handleConnectionStatusChanged() {
    const isConnectedResult = createRTCConnection.isConnected();
    const channelId = createRTCConnection.getChannelId();
    if (isConnectedResult) {
      if (null != channelId) {
        if (channelId !== id) {
          channel = channel.getChannel(channelId);
          let tmp10 = null != channel;
          if (tmp10) {
            let isGuildStageVoiceResult = channel.isGuildStageVoice();
            if (!isGuildStageVoiceResult) {
              let defaultSpeakerForGuildCall = channel.isGuildVoice();
              if (defaultSpeakerForGuildCall) {
                defaultSpeakerForGuildCall = importDefault(15947).getConfig({ location: "StageChannelAudioStore" }).defaultSpeakerForGuildCall;
                const obj2 = importDefault(15947);
              }
              isGuildStageVoiceResult = defaultSpeakerForGuildCall;
            }
            if (!isGuildStageVoiceResult) {
              let defaultSpeakerForDMCall = channel.isDM();
              if (defaultSpeakerForDMCall) {
                defaultSpeakerForDMCall = importDefault(15947).getConfig({ location: "StageChannelAudioStore" }).defaultSpeakerForDMCall;
                const obj3 = importDefault(15947);
              }
              isGuildStageVoiceResult = defaultSpeakerForDMCall;
            }
            tmp10 = isGuildStageVoiceResult;
          }
          if (tmp10) {
            if (null != channel) {
              if (id !== channel.id) {
                let c8 = true;
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
    let flag = !isConnectedResult;
    if (!isConnectedResult) {
      flag = null == channelId;
    }
    if (flag) {
      flag = null != id;
    }
    if (flag) {
      id = null;
      flag = true;
    }
    return flag;
  }
});
const result = require("ensureGuildLoaded").fileFinishedImporting("modules/stage_channels/native/StageChannelAudioStore.tsx");

export default stageChannelAudioStore;
