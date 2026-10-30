// Module ID: 7930
// Function ID: 7931
// Name: transitionToStream
// Dependencies: [4858, 5253, 6738, 7931, 2]
// Exports: default

// Module 7930 (transitionToStream)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7931 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/go_live/utils/transitionToStream.native.tsx");

export default function transitionToStream(channelId) {
  const channel = ChannelStore.getChannel(channelId.channelId);
  if (null != channel) {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const obj2 = ModalActionCreatorsDefault;
    obj2.popAll();
    const obj3 = PrivateChannelCallUtils;
    obj3.openGuildVoiceModal(channel, "Go Live");
  }
};
