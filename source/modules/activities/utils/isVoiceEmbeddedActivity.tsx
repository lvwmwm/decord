// Module ID: 10427
// Function ID: 80310
// Name: isVoiceEmbeddedActivity
// Dependencies: []
// Exports: default

// Module 10427 (isVoiceEmbeddedActivity)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/activities/utils/isVoiceEmbeddedActivity.tsx");

export default function isVoiceEmbeddedActivity(channelId) {
  let obj = arg1;
  let tmp = arg2;
  if (arg1 === undefined) {
    obj = closure_3;
  }
  if (tmp === undefined) {
    tmp = closure_4;
  }
  const channel = obj.getChannel(channelId);
  let tmp3 = null != channel;
  if (tmp3) {
    let tmp6 = channel.type === arg1(dependencyMap[4]).ChannelTypes.GUILD_VOICE;
    if (!tmp6) {
      const tmp7 = !channel.isPrivate();
      let tmp8 = !tmp7;
      if (!tmp7) {
        let tmp9 = channel.id === tmp2;
        if (!tmp9) {
          const voiceStatesForChannel = voiceStatesForChannel.getVoiceStatesForChannel(channel.id);
          tmp9 = null != voiceStatesForChannel[closure_2.getId(closure_2)];
        }
        tmp8 = tmp9;
      }
      tmp6 = tmp8;
    }
    tmp3 = tmp6;
  }
  return tmp3;
};
