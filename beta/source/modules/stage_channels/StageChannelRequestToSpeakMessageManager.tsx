// Module ID: 17257
// Function ID: 17258
// Name: StageChannelRequestToSpeakMessageManager
// Dependencies: [502, 2045, 5056, 4469, 2099, 1372, 1074, 6539, 2053, 17258, 1090, 6876, 2]

// Module 17257 (StageChannelRequestToSpeakMessageManager)
import Constants from "Constants" /* 1074 */;
import MessageTypes from "MessageTypes" /* 1090 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import MessageStore from "MessageStore" /* 5056 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import UserStore from "UserStore" /* 1372 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6539 */;
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
