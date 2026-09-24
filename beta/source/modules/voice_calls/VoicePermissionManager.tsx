// Module ID: 17752
// Function ID: 17753
// Name: VoicePermissionManager
// Dependencies: [5672, 4810, 502, 2045, 1996, 4813, 1078, 4999, 5389, 17753, 4937, 7397, 2]
// Exports: shouldImmediatelyRequestVoicePermissions

// Module 17752 (VoicePermissionManager)
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState" /* 4937 */;
import NativePermissionUtilsDefault from "NativePermissionUtils" /* 5389 */;
import StageChannelRoleStore from "StageChannelRoleStore" /* 5672 */;
import VoiceStateRecord from "VoiceStateRecord" /* 4810 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import MediaEngineStore from "MediaEngineStore" /* 1996 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4813 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7397 */;

require = fn;
const InputModes = fn(1078).InputModes;
const NativePermissionTypes = fn(4999).NativePermissionTypes;
let c11 = null;
class VoicePermissionManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = { VOICE_STATE_UPDATES: applyArgumentsResult.handleVoiceStateUpdates, VOICE_CHANNEL_SELECT: applyArgumentsResult.handleVoiceChannelSelect };
    return applyArgumentsResult;
  }
}
const prototype = VoicePermissionManager.prototype;
prototype["handleVoiceChannelSelect"] = function handleVoiceChannelSelect(channelId) {
  if (null == channelId.channelId) {
    c11 = null;
  }
};
prototype["handleVoiceStateUpdates"] = function handleVoiceStateUpdates(voiceStates) {
  voiceStates = voiceStates.voiceStates;
  const item = voiceStates.forEach((item) => {
    ({ userId, channelId } = item);
    if (null != channelId) {
      if (id.getId() === userId) {
        if (null != rTCConnectionId.getRTCConnectionId()) {
          if (channelId !== channelId) {
            channel = channel.getChannel(channelId);
            let isListenModeCapableResult;
            if (channel != null) {
              isListenModeCapableResult = channel.isListenModeCapable();
            }
            let isSpeakerResult = !isListenModeCapableResult;
            if (isListenModeCapableResult) {
              isSpeakerResult = speaker.isSpeaker(userId, channelId);
            }
            if (isSpeakerResult) {
              const permission = NativePermissionUtilsDefault.requestPermission(constants2.AUDIO);
              permission.then((result) => {
                if (result) {
                  closure_1_1(dependencyMap[9])(true);
                }
              });
              if (MediaEngineStore.getMode() === constants.PUSH_TO_TALK) {
                const permission1 = NativePermissionUtilsDefault.requestPermission(constants2.INPUT_MONITORING);
                const tmp19Result = NativePermissionUtilsDefault;
              }
            } else {
              const tmp8 = new VoiceStateRecord(item);
              const audienceRequestToSpeakState = useAudienceRequestToSpeakState.getAudienceRequestToSpeakState(tmp8);
              if (audienceRequestToSpeakState === useAudienceRequestToSpeakState.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) {
                const permission2 = NativePermissionUtilsDefault.requestPermission(constants2.AUDIO);
                permission2.then((result) => {
                  if (result) {
                    closure_1_1(dependencyMap[9])(true);
                  }
                });
                if (MediaEngineStore.getMode() === constants.PUSH_TO_TALK) {
                  const permission3 = tmp13(5389).requestPermission(tmp14.INPUT_MONITORING);
                  const tmp13Result = tmp13(5389);
                }
                tmp13 = importDefault;
                tmp14 = constants2;
              }
            }
          }
        }
      }
    }
  });
};
const voicePermissionManager = new VoicePermissionManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_calls/VoicePermissionManager.tsx");

export default voicePermissionManager;
export const shouldImmediatelyRequestVoicePermissions = function shouldImmediatelyRequestVoicePermissions(id, id2) {
  const channel = ChannelStore.getChannel(id2);
  let isListenModeCapableResult;
  if (channel != null) {
    isListenModeCapableResult = channel.isListenModeCapable();
  }
  let isSpeakerResult = !isListenModeCapableResult;
  if (isListenModeCapableResult) {
    isSpeakerResult = StageChannelRoleStore.isSpeaker(id, id2);
  }
  return isSpeakerResult;
};
