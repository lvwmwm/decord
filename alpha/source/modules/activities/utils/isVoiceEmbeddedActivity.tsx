// Module ID: 5673
// Function ID: 5674
// Name: isVoiceEmbeddedActivity
// Dependencies: [502, 4858, 4912, 5674, 1094, 2]
// Exports: default

// Module 5673 (isVoiceEmbeddedActivity)
import ChannelTypes from "ChannelTypes" /* 1094 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4912 */;
import VoiceStateStore from "VoiceStateStore" /* 5674 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isVoiceEmbeddedActivity.tsx");

export default function isVoiceEmbeddedActivity(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = ChannelStore;
  }
  const channel = obj.getChannel(arg0);
  let tmp3 = null != channel;
  if (tmp3) {
    let tmp6 = channel.type === ChannelTypes.ChannelTypes.GUILD_VOICE;
    if (!tmp6) {
      let isPrivateResult = channel.isPrivate();
      if (isPrivateResult) {
        let tmp8 = channel.id === tmp2;
        if (!tmp8) {
          const voiceStatesForChannel = VoiceStateStore.getVoiceStatesForChannel(channel.id);
          tmp8 = null != voiceStatesForChannel[AuthenticationStore.getId(AuthenticationStore)];
        }
        isPrivateResult = tmp8;
      }
      tmp6 = isPrivateResult;
    }
    tmp3 = tmp6;
  }
  return tmp3;
};
