// Module ID: 8734
// Function ID: 8735
// Name: openChannelCallModalForChannelId
// Dependencies: [1391, 8057, 8663, 2]
// Exports: default

// Module 8734 (openChannelCallModalForChannelId)
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
      isGuildStageVoiceResult = false === require(8057) /* connectToStage */.connectToStage(channel);
      const obj2 = require(8057) /* connectToStage */;
    }
    if (!isGuildStageVoiceResult) {
      require(8663) /* openChannelCallModal */.openChannelCallModal(channel);
      const obj3 = require(8663) /* openChannelCallModal */;
    }
  }
};
