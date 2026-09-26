// Module ID: 4990
// Function ID: 4991
// Name: transitionToStream
// Dependencies: [2041, 4755, 4991, 4995, 2]
// Exports: default

// Module 4990 (transitionToStream)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4755 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4991 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 4995 */;
import ChannelStore from "ChannelStore" /* 2041 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/go_live/utils/transitionToStream.native.tsx");

export default function transitionToStream(channelId) {
  const channel = ChannelStore.getChannel(channelId.channelId);
  if (null != channel) {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    ModalActionCreatorsDefault.popAll();
    PrivateChannelCallUtils.openGuildVoiceModal(channel, "Go Live");
  }
};
