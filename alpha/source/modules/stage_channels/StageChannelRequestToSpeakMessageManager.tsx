// Module ID: 18873
// Function ID: 18874
// Name: StageChannelRequestToSpeakMessageManager
// Dependencies: [502, 4821, 5996, 4901, 4872, 1392, 1087, 7199, 4829, 18874, 1103, 7551, 2]

// Module 18873 (StageChannelRequestToSpeakMessageManager)
import Constants from "Constants" /* 1087 */;
import MessageTypes from "MessageTypes" /* 1103 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4821 */;
import MessageStore from "MessageStore" /* 5996 */;
import PermissionStore from "PermissionStore" /* 4901 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4872 */;
import UserStore from "UserStore" /* 1392 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7199 */;
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
