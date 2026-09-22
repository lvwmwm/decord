// Module ID: 17601
// Function ID: 17602
// Name: StageChannelRequestToSpeakMessageManager
// Dependencies: [502, 1957, 4857, 4275, 2011, 1371, 1074, 7221, 1965, 17602, 1089, 7559, 2]

// Module 17601 (StageChannelRequestToSpeakMessageManager)
import MessageTypes from "MessageTypes" /* 1089 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import MessageStore from "MessageStore" /* 4857 */;
import PermissionStore from "PermissionStore" /* 4275 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import UserStore from "UserStore" /* 1371 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7221 */;

require = fn;
const MessageFlags = fn(1074).MessageFlags;
class StageChannelRequestToSpeakMessageManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = { VOICE_STATE_UPDATES: applyArgumentsResult.handleVoiceStateUpdates };
    return applyArgumentsResult;
  }
}
StageChannelRequestToSpeakMessageManager.prototype["handleVoiceStateUpdates"] = function handleVoiceStateUpdates(voiceStates) {
  voiceStates = voiceStates.voiceStates;
  const item = voiceStates.forEach((requestToSpeakTimestamp) => {
    ({ channelId, userId } = requestToSpeakTimestamp);
    requestToSpeakTimestamp = requestToSpeakTimestamp.requestToSpeakTimestamp;
    if (voiceChannelId.getVoiceChannelId() === channelId) {
      if (requestToSpeakTimestamp.suppress) {
        if (null != channelId) {
          if (userId !== id.getId()) {
            if (closure_6.can(userId(1965).MODERATE_STAGE_CHANNEL_PERMISSIONS, channel.getChannel(channelId))) {
              if (null != requestToSpeakTimestamp) {
                user = user.getUser(userId);
                if (null != user) {
                  const result = tmp11(17602).sendStageRequestToSpeakEphemeralMessage(channelId, user, requestToSpeakTimestamp);
                  const tmp11Result = tmp11(17602);
                }
              } else {
                messages = messages.getMessages(channelId);
                const findNewestResult = messages.findNewest((type) => {
                  let hasFlagResult = type.type === MessageTypes.MessageTypes.STAGE_RAISE_HAND;
                  if (hasFlagResult) {
                    hasFlagResult = type.hasFlag(constants.EPHEMERAL);
                  }
                  if (hasFlagResult) {
                    hasFlagResult = type.author.id === userId;
                  }
                  return hasFlagResult;
                });
                if (null != findNewestResult) {
                  closure_1(7559).deleteMessage(channelId, findNewestResult.id, true);
                  const obj2 = closure_1(7559);
                }
              }
            }
            tmp11 = userId;
          }
        }
      }
    }
  });
};
const stageChannelRequestToSpeakMessageManager = new StageChannelRequestToSpeakMessageManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/StageChannelRequestToSpeakMessageManager.tsx");

export default stageChannelRequestToSpeakMessageManager;
