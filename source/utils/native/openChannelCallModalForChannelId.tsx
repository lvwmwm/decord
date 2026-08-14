// Module ID: 10962
// Function ID: 10963
// Name: openChannelCallModalForChannelId
// Dependencies: [1391, 7839, 4576, 2]
// Exports: default

// Module 10962 (openChannelCallModalForChannelId)
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
      isGuildStageVoiceResult = false === require(7839) /* connectToStage */.connectToStage(channel);
      const obj2 = require(7839) /* connectToStage */;
    }
    if (!isGuildStageVoiceResult) {
      require(4576) /* openChannelCallModal */.openChannelCallModal(channel);
      const obj3 = require(4576) /* openChannelCallModal */;
    }
  }
};
