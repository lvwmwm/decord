// Module ID: 10870
// Function ID: 10871
// Name: openChannelCallModalForChannelId
// Dependencies: [1372, 7696, 4494, 2]
// Exports: default

// Module 10870 (openChannelCallModalForChannelId)
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
      isGuildStageVoiceResult = false === require(7696) /* connectToStage */.connectToStage(channel);
      const obj2 = require(7696) /* connectToStage */;
    }
    if (!isGuildStageVoiceResult) {
      require(4494) /* openChannelCallModal */.openChannelCallModal(channel);
      const obj3 = require(4494) /* openChannelCallModal */;
    }
  }
};
