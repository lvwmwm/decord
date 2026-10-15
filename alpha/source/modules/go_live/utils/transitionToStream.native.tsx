// Module ID: 7697
// Function ID: 7698
// Name: transitionToStream
// Dependencies: [2065, 5115, 6150, 7698, 2]
// Exports: default

// Module 7697 (transitionToStream)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5115 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6150 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7698 */;
import ChannelStore from "ChannelStore" /* 2065 */;
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
