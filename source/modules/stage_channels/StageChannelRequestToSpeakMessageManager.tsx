// Module ID: 16049
// Function ID: 123239
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16049 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
const MessageFlags = arg1(dependencyMap[11]).MessageFlags;
let tmp2 = (arg0) => {
  class StageChannelRequestToSpeakMessageManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, StageChannelRequestToSpeakMessageManager);
      items1 = [...items];
      obj = closure_6(StageChannelRequestToSpeakMessageManager);
      tmp2 = closure_5;
      if (closure_15()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.actions = { VOICE_STATE_UPDATES: tmp2Result.handleVoiceStateUpdates };
      return tmp2Result;
    }
  }
  const arg1 = StageChannelRequestToSpeakMessageManager;
  callback2(StageChannelRequestToSpeakMessageManager, arg0);
  const items = [
    {
      key: "handleVoiceStateUpdates",
      value(voiceStates) {
        voiceStates = voiceStates.voiceStates;
        const item = voiceStates.forEach((requestToSpeakTimestamp) => {
          let channelId;
          let userId;
          ({ channelId, userId } = requestToSpeakTimestamp);
          requestToSpeakTimestamp = requestToSpeakTimestamp.requestToSpeakTimestamp;
          if (voiceChannelId.getVoiceChannelId() === channelId) {
            if (requestToSpeakTimestamp.suppress) {
              if (null != channelId) {
                if (userId !== id.getId()) {
                  if (closure_11.can(userId(closure_2[12]).MODERATE_STAGE_CHANNEL_PERMISSIONS, channel.getChannel(channelId))) {
                    if (null != requestToSpeakTimestamp) {
                      const user = user.getUser(userId);
                      if (null != user) {
                        const result = userId(closure_2[13]).sendStageRequestToSpeakEphemeralMessage(channelId, user, requestToSpeakTimestamp);
                        const obj3 = userId(closure_2[13]);
                      }
                    } else {
                      const messages = messages.getMessages(channelId);
                      const findNewestResult = messages.findNewest((type) => {
                        let hasFlagResult = type.type === userId(closure_2[14]).MessageTypes.STAGE_RAISE_HAND;
                        if (hasFlagResult) {
                          hasFlagResult = type.hasFlag(constants.EPHEMERAL);
                        }
                        if (hasFlagResult) {
                          hasFlagResult = type.author.id === userId;
                        }
                        return hasFlagResult;
                      });
                      if (null != findNewestResult) {
                        callback(closure_2[15]).deleteMessage(channelId, findNewestResult.id, true);
                        const obj2 = callback(closure_2[15]);
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
  ];
  return callback(StageChannelRequestToSpeakMessageManager, items);
}(importDefault(dependencyMap[16]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/stage_channels/StageChannelRequestToSpeakMessageManager.tsx");

export default tmp2;
