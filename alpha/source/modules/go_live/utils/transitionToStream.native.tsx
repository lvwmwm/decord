// Module ID: 6372
// Function ID: 6373
// Name: transitionToStream
// Dependencies: [4641, 5006, 6308, 6373, 2]
// Exports: default

// Module 6372 (transitionToStream)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6308 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 6373 */;
import ChannelStore from "ChannelStore" /* 4641 */;
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
