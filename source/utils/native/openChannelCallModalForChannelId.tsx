// Module ID: 10815
// Function ID: 83967
// Name: openChannelCallModalForChannelId
// Dependencies: [1348, 7477, 4341, 2]
// Exports: default

// Module 10815 (openChannelCallModalForChannelId)
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
      isGuildStageVoiceResult = false === require(7477) /* connectToStage */.connectToStage(channel);
      const obj2 = require(7477) /* connectToStage */;
    }
    if (!isGuildStageVoiceResult) {
      require(4341) /* getVoiceChannelKeyByChannelId */.openChannelCallModal(channel);
      const obj3 = require(4341) /* getVoiceChannelKeyByChannelId */;
    }
  }
};
