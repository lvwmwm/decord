// Module ID: 10817
// Function ID: 83906
// Name: openChannelCallModalForChannelId
// Dependencies: [1348, 6653, 4342, 2]
// Exports: default

// Module 10817 (openChannelCallModalForChannelId)
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
      isGuildStageVoiceResult = false === require(6653) /* connectToStage */.connectToStage(channel);
      const obj2 = require(6653) /* connectToStage */;
    }
    if (!isGuildStageVoiceResult) {
      require(4342) /* getVoiceChannelKeyByChannelId */.openChannelCallModal(channel);
      const obj3 = require(4342) /* getVoiceChannelKeyByChannelId */;
    }
  }
};
