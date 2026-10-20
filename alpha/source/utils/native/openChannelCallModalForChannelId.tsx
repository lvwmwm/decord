// Module ID: 12553
// Function ID: 12554
// Name: openChannelCallModalForChannelId
// Dependencies: [4800, 7826, 7815, 2]
// Exports: default

// Module 12553 (openChannelCallModalForChannelId)
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7815 */;
import StageChannelModalActionCreators from "StageChannelModalActionCreators" /* 7826 */;
import ChannelStore from "ChannelStore" /* 4800 */;
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
