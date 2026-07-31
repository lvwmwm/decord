// Module ID: 10893
// Function ID: 10894
// Name: openChannelCallModalForChannelId
// Dependencies: [1372, 6713, 4403, 2]
// Exports: default

// Module 10893 (openChannelCallModalForChannelId)
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
      isGuildStageVoiceResult = false === require(6713) /* connectToStage */.connectToStage(channel);
      const obj2 = require(6713) /* connectToStage */;
    }
    if (!isGuildStageVoiceResult) {
      require(4403) /* openChannelCallModal */.openChannelCallModal(channel);
      const obj3 = require(4403) /* openChannelCallModal */;
    }
  }
};
