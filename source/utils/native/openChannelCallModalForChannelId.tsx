// Module ID: 10855
// Function ID: 84027
// Name: openChannelCallModalForChannelId
// Dependencies: [1348, 6689, 4376, 2]
// Exports: default

// Module 10855 (openChannelCallModalForChannelId)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("getVoiceChannelKeyByChannelId").fileFinishedImporting("utils/native/openChannelCallModalForChannelId.tsx");

export default function openChannelCallModalForChannelId(channelId) {
  let isGuildStageVoiceResult = arg1;
  channel = channel.getChannel(channelId);
  if (null != channel) {
    if (isGuildStageVoiceResult) {
      isGuildStageVoiceResult = channel.isGuildStageVoice();
    }
    if (isGuildStageVoiceResult) {
      isGuildStageVoiceResult = false === require(6689) /* connectToStage */.connectToStage(channel);
      const obj2 = require(6689) /* connectToStage */;
    }
    if (!isGuildStageVoiceResult) {
      require(4376) /* getVoiceChannelKeyByChannelId */.openChannelCallModal(channel);
      const obj3 = require(4376) /* getVoiceChannelKeyByChannelId */;
    }
  }
};
