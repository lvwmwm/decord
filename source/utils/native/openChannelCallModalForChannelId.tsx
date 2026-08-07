// Module ID: 10905
// Function ID: 10906
// Name: openChannelCallModalForChannelId
// Dependencies: [1372, 7713, 4511, 2]
// Exports: default

// Module 10905 (openChannelCallModalForChannelId)
import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
const result = require("openChannelCallModal").fileFinishedImporting("utils/native/openChannelCallModalForChannelId.tsx");

export default function openChannelCallModalForChannelId(arg0, arg1) {
  channel = channel.getChannel(arg0);
  if (null != channel) {
    let isGuildStageVoiceResult = arg1;
    if (arg1) {
      isGuildStageVoiceResult = channel.isGuildStageVoice();
    }
    if (isGuildStageVoiceResult) {
      isGuildStageVoiceResult = false === require(7713) /* connectToStage */.connectToStage(channel);
      const obj2 = require(7713) /* connectToStage */;
    }
    if (!isGuildStageVoiceResult) {
      require(4511) /* openChannelCallModal */.openChannelCallModal(channel);
      const obj3 = require(4511) /* openChannelCallModal */;
    }
  }
};
