// Module ID: 10844
// Function ID: 84159
// Name: openChannelCallModalForChannelId
// Dependencies: [1348, 7557, 4341, 2]
// Exports: default

// Module 10844 (openChannelCallModalForChannelId)
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
      isGuildStageVoiceResult = false === require(7557) /* connectToStage */.connectToStage(channel);
      const obj2 = require(7557) /* connectToStage */;
    }
    if (!isGuildStageVoiceResult) {
      require(4341) /* getVoiceChannelKeyByChannelId */.openChannelCallModal(channel);
      const obj3 = require(4341) /* getVoiceChannelKeyByChannelId */;
    }
  }
};
