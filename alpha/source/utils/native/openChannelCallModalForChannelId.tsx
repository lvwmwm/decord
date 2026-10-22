// Module ID: 12650
// Function ID: 12651
// Name: openChannelCallModalForChannelId
// Dependencies: [4821, 7863, 7852, 2]
// Exports: default

// Module 12650 (openChannelCallModalForChannelId)
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7852 */;
import StageChannelModalActionCreators from "StageChannelModalActionCreators" /* 7863 */;
import ChannelStore from "ChannelStore" /* 4821 */;
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
