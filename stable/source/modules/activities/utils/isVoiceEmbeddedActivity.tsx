// Module ID: 5834
// Function ID: 5835
// Name: isVoiceEmbeddedActivity
// Dependencies: [502, 5019, 5073, 5835, 1093, 2]
// Exports: default

// Module 5834 (isVoiceEmbeddedActivity)
import ChannelTypes from "ChannelTypes" /* 1093 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 5019 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5073 */;
import VoiceStateStore from "VoiceStateStore" /* 5835 */;
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
