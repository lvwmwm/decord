// Module ID: 12077
// Function ID: 12078
// Name: openChannelCallModalForChannelId
// Dependencies: [4643, 7160, 6375, 2]
// Exports: default

// Module 12077 (openChannelCallModalForChannelId)
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 6375 */;
import StageChannelModalActionCreators from "StageChannelModalActionCreators" /* 7160 */;
import ChannelStore from "ChannelStore" /* 4643 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/native/openChannelCallModalForChannelId.tsx");

export default function openChannelCallModalForChannelId(arg0, arg1) {
  const channel = ChannelStore.getChannel(arg0);
  if (null != channel) {
    let tmp = arg1 && channel.isGuildStageVoice();
    if (tmp) {
      const obj2 = StageChannelModalActionCreators;
      tmp = false === obj2.connectToStage(channel);
    }
    if (!tmp) {
      const obj3 = PrivateChannelCallUtils;
      obj3.openChannelCallModal(channel);
    }
  }
};
