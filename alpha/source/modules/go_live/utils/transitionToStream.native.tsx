// Module ID: 7475
// Function ID: 7476
// Name: transitionToStream
// Dependencies: [2063, 5054, 5940, 7476, 2]
// Exports: default

// Module 7475 (transitionToStream)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7476 */;
import ChannelStore from "ChannelStore" /* 2063 */;
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
