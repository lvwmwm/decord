// Module ID: 9464
// Function ID: 9465
// Name: openChannelCallModalForChannelId
// Dependencies: [1386, 8323, 4735, 2]
// Exports: default

// Module 9464 (openChannelCallModalForChannelId)
import openChannelCallModal from "openChannelCallModal" /* 4735 */;
import connectToStage from "connectToStage" /* 8323 */;
import closure_2 from "ensureGuildLoaded" /* 1386 */;

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
