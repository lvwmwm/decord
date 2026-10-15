// Module ID: 12405
// Function ID: 12406
// Name: openChannelCallModalForChannelId
// Dependencies: [2065, 7709, 7698, 2]
// Exports: default

// Module 12405 (openChannelCallModalForChannelId)
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7698 */;
import StageChannelModalActionCreators from "StageChannelModalActionCreators" /* 7709 */;
import ChannelStore from "ChannelStore" /* 2065 */;
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
