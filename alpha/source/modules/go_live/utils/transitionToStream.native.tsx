// Module ID: 7480
// Function ID: 7481
// Name: transitionToStream
// Dependencies: [2064, 5055, 5941, 7481, 2]
// Exports: default

// Module 7480 (transitionToStream)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5941 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7481 */;
import ChannelStore from "ChannelStore" /* 2064 */;
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
