// Module ID: 10467
// Function ID: 80576
// Name: isVoiceEmbeddedActivity
// Dependencies: [1194, 1348, 1906, 4146, 669, 2]
// Exports: default

// Module 10467 (isVoiceEmbeddedActivity)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/activities/utils/isVoiceEmbeddedActivity.tsx");

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
    let tmp6 = channel.type === require(669) /* set */.ChannelTypes.GUILD_VOICE;
    if (!tmp6) {
      const tmp7 = !channel.isPrivate();
      let tmp8 = !tmp7;
      if (!tmp7) {
        let tmp9 = channel.id === tmp2;
        if (!tmp9) {
          voiceStatesForChannel = voiceStatesForChannel.getVoiceStatesForChannel(channel.id);
          tmp9 = null != voiceStatesForChannel[id.getId(id)];
        }
        tmp8 = tmp9;
      }
      tmp6 = tmp8;
    }
    tmp3 = tmp6;
  }
  return tmp3;
};
