// Module ID: 18530
// Function ID: 18531
// Name: StageChannelRequestToSpeakMessageManager
// Dependencies: [502, 2065, 5492, 4806, 2116, 1390, 1085, 7028, 2073, 18531, 1101, 7395, 2]

// Module 18530 (StageChannelRequestToSpeakMessageManager)
import Constants from "Constants" /* 1085 */;
import MessageTypes from "MessageTypes" /* 1101 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import MessageStore from "MessageStore" /* 5492 */;
import PermissionStore from "PermissionStore" /* 4806 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2116 */;
import UserStore from "UserStore" /* 1390 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7028 */;
import size from "module_2" /* 2 */;

let can, messages, requestToSpeakTimestamp, user;

const MessageFlags = Constants.MessageFlags;
class StageChannelRequestToSpeakMessageManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.actions = { VOICE_STATE_UPDATES: applyArgumentsResult.handleVoiceStateUpdates };
    return applyArgumentsResult;
  }
  handleVoiceStateUpdates(voiceStates) {
    let channel;
    let id;
    let voiceChannelId;
    voiceStates = voiceStates.voiceStates;
    const item = voiceStates.forEach((requestToSpeakTimestamp) => {
      let channelId;
      let userId;
      ({ channelId, userId } = requestToSpeakTimestamp);
      requestToSpeakTimestamp = requestToSpeakTimestamp.requestToSpeakTimestamp;
      const suppress = requestToSpeakTimestamp.suppress;
      if (voiceChannelId.getVoiceChannelId() === channelId) {
        if (suppress) {
          if (null != channelId) {
            if (userId !== id.getId()) {
              can = can.can;
              const tmp11 = userId;
              if (can(userId(closure_2[8]).MODERATE_STAGE_CHANNEL_PERMISSIONS, channel.getChannel(channelId))) {
                if (null != requestToSpeakTimestamp) {
                  user = user.getUser(userId);
                  if (null != user) {
                    const tmp11Result = tmp11(closure_2[9]);
                    const result = tmp11Result.sendStageRequestToSpeakEphemeralMessage(channelId, user, requestToSpeakTimestamp);
                  }
                } else {
                  messages = messages.getMessages(channelId);
                  const findNewestResult = messages.findNewest((type) => {
                    const hasFlagResult = type.type === MessageTypes.MessageTypes.STAGE_RAISE_HAND && type.hasFlag(constants.EPHEMERAL) && type.author.id === userId;
                    return hasFlagResult;
                  });
                  if (null != findNewestResult) {
                    const obj2 = closure_1(closure_2[11]);
                    obj2.deleteMessage(channelId, findNewestResult.id, true);
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
const prototype = StageChannelRequestToSpeakMessageManager.prototype;
const stageChannelRequestToSpeakMessageManager = new StageChannelRequestToSpeakMessageManager();
let result = size.fileFinishedImporting("modules/stage_channels/StageChannelRequestToSpeakMessageManager.tsx");

export default stageChannelRequestToSpeakMessageManager;
