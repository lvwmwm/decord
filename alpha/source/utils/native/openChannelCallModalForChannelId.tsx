// Module ID: 12306
// Function ID: 12307
// Name: openChannelCallModalForChannelId
// Dependencies: [4892, 7834, 8450, 2]
// Exports: default

// Module 12306 (openChannelCallModalForChannelId)
import StageChannelModalActionCreators from "StageChannelModalActionCreators" /* 7834 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 8450 */;
import ChannelStore from "ChannelStore" /* 4892 */;
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
