// Module ID: 9536
// Function ID: 9537
// Name: openChannelCallModalForChannelId
// Dependencies: [1957, 8393, 4767, 2]
// Exports: default

// Module 9536 (openChannelCallModalForChannelId)
import openChannelCallModal from "openChannelCallModal" /* 4767 */;
import connectToStage from "connectToStage" /* 8393 */;
import closure_2 from "ensureGuildLoaded" /* 1957 */;

require = arg1;
const result = require("set").fileFinishedImporting("utils/native/openChannelCallModalForChannelId.tsx");

export default function openChannelCallModalForChannelId(arg0, arg1) {
  channel = channel.getChannel(arg0);
  if (null != channel) {
    let isGuildStageVoiceResult = arg1;
    if (arg1) {
      isGuildStageVoiceResult = channel.isGuildStageVoice();
    }
    if (isGuildStageVoiceResult) {
      isGuildStageVoiceResult = false === connectToStage.connectToStage(channel);
      const obj2 = connectToStage;
    }
    if (!isGuildStageVoiceResult) {
      openChannelCallModal.openChannelCallModal(channel);
      const obj3 = openChannelCallModal;
    }
  }
};
