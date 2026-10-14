// Module ID: 18093
// Function ID: 18094
// Name: VoicePermissionManager
// Dependencies: [5953, 5118, 502, 2065, 2012, 5114, 1085, 7489, 7506, 18094, 5421, 6812, 2]
// Exports: shouldImmediatelyRequestVoicePermissions

// Module 18093 (VoicePermissionManager)
import Constants from "Constants" /* 1085 */;
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState" /* 5421 */;
import NativePermissionConstants from "NativePermissionConstants" /* 7489 */;
import NativePermissionUtilsDefault from "NativePermissionUtils" /* 7506 */;
import StageChannelRoleStore from "StageChannelRoleStore" /* 5953 */;
import VoiceStateRecord from "VoiceStateRecord" /* 5118 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import MediaEngineStore from "MediaEngineStore" /* 2012 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5114 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6812 */;
import size from "module_2" /* 2 */;

const InputModes = Constants.InputModes;
const NativePermissionTypes = NativePermissionConstants.NativePermissionTypes;
let c11 = null;
class VoicePermissionManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.actions = { VOICE_STATE_UPDATES: applyArgumentsResult.handleVoiceStateUpdates, VOICE_CHANNEL_SELECT: applyArgumentsResult.handleVoiceChannelSelect };
    return applyArgumentsResult;
  }
  handleVoiceChannelSelect(channelId) {
    if (null == channelId.channelId) {
      c11 = null;
    }
  }
  handleVoiceStateUpdates(voiceStates) {
    let channelId;
    let constants2;
    let id;
    let rTCConnectionId;
    let speaker;
    voiceStates = voiceStates.voiceStates;
    const item = voiceStates.forEach(function(item) {
      let userId;
      const f133695 = (result) => {
        const tmp = result;
        if (tmp) {
          closure_1_1(closure_1_2[9])(true);
        }
      };
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
                const obj4 = NativePermissionUtilsDefault;
                const permission = obj4.requestPermission(constants2.AUDIO);
                permission.then(f133695);
                const tmp17 = importDefault;
                const tmp18 = dependencyMap;
                const tmp19 = constants2;
                if (MediaEngineStore.getMode() === constants.PUSH_TO_TALK) {
                  const tmp17Result = tmp17(tmp18[8]);
                  const permission1 = tmp17Result.requestPermission(tmp19.INPUT_MONITORING);
                }
              } else {
                const self = this;
                const self2 = this;
                const tmp6 = new VoiceStateRecord(item);
                const obj = useAudienceRequestToSpeakState;
                const audienceRequestToSpeakState = obj.getAudienceRequestToSpeakState(tmp6);
                if (audienceRequestToSpeakState === useAudienceRequestToSpeakState.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) {
                  const obj2 = NativePermissionUtilsDefault;
                  const permission2 = obj2.requestPermission(constants2.AUDIO);
                  permission2.then(f133695);
                  const tmp11 = importDefault;
                  const tmp12 = constants2;
                  if (MediaEngineStore.getMode() === constants.PUSH_TO_TALK) {
                    const tmp11Result = tmp11(dependencyMap[8]);
                    const permission3 = tmp11Result.requestPermission(tmp12.INPUT_MONITORING);
                  }
                }
              }
            }
          }
        }
      }
    });
  }
}
const prototype = VoicePermissionManager.prototype;
const voicePermissionManager = new VoicePermissionManager();
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
