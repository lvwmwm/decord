// Module ID: 13184
// Function ID: 13185
// Name: openChannelCallModalForChannelId
// Dependencies: [2042, 8668, 4964, 2]
// Exports: default

// Module 13184 (openChannelCallModalForChannelId)
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 4964 */;
import StageChannelModalActionCreators from "StageChannelModalActionCreators" /* 8668 */;
import ChannelStore from "ChannelStore" /* 2042 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("utils/native/openChannelCallModalForChannelId.tsx");

export default function openChannelCallModalForChannelId(arg0, arg1) {
  const channel = ChannelStore.getChannel(arg0);
  if (null != channel) {
    let isGuildStageVoiceResult = arg1;
    if (arg1) {
      isGuildStageVoiceResult = channel.isGuildStageVoice();
    }
    if (isGuildStageVoiceResult) {
      isGuildStageVoiceResult = false === StageChannelModalActionCreators.connectToStage(channel);
    }
    if (!isGuildStageVoiceResult) {
      PrivateChannelCallUtils.openChannelCallModal(channel);
    }
  }
};
