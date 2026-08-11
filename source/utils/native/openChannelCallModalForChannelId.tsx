// Module ID: 10977
// Function ID: 10978
// Name: openChannelCallModalForChannelId
// Dependencies: [1391, 7775, 4513, 2]
// Exports: default

// Module 10977 (openChannelCallModalForChannelId)
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
      isGuildStageVoiceResult = false === require(7775) /* connectToStage */.connectToStage(channel);
      const obj2 = require(7775) /* connectToStage */;
    }
    if (!isGuildStageVoiceResult) {
      require(4513) /* openChannelCallModal */.openChannelCallModal(channel);
      const obj3 = require(4513) /* openChannelCallModal */;
    }
  }
};
