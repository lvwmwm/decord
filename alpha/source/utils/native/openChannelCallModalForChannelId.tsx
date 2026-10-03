// Module ID: 12695
// Function ID: 12696
// Name: openChannelCallModalForChannelId
// Dependencies: [2051, 8069, 5097, 2]
// Exports: default

// Module 12695 (openChannelCallModalForChannelId)
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 5097 */;
import StageChannelModalActionCreators from "StageChannelModalActionCreators" /* 8069 */;
import ChannelStore from "ChannelStore" /* 2051 */;
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
