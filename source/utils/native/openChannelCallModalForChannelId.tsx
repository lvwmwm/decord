// Module ID: 10879
// Function ID: 10880
// Name: openChannelCallModalForChannelId
// Dependencies: [1372, 6710, 4399, 2]
// Exports: default

// Module 10879 (openChannelCallModalForChannelId)
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
      isGuildStageVoiceResult = false === require(6710) /* connectToStage */.connectToStage(channel);
      const obj2 = require(6710) /* connectToStage */;
    }
    if (!isGuildStageVoiceResult) {
      require(4399) /* openChannelCallModal */.openChannelCallModal(channel);
      const obj3 = require(4399) /* openChannelCallModal */;
    }
  }
};
