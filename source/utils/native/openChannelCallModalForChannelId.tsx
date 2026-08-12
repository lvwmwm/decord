// Module ID: 11030
// Function ID: 11031
// Name: openChannelCallModalForChannelId
// Dependencies: [1391, 7814, 4553, 2]
// Exports: default

// Module 11030 (openChannelCallModalForChannelId)
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
      isGuildStageVoiceResult = false === require(7814) /* connectToStage */.connectToStage(channel);
      const obj2 = require(7814) /* connectToStage */;
    }
    if (!isGuildStageVoiceResult) {
      require(4553) /* openChannelCallModal */.openChannelCallModal(channel);
      const obj3 = require(4553) /* openChannelCallModal */;
    }
  }
};
