// Module ID: 5038
// Function ID: 5039
// Name: transitionToStream
// Dependencies: [2045, 4800, 5039, 5043, 2]
// Exports: default

// Module 5038 (transitionToStream)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 5043 */;
import ChannelStore from "ChannelStore" /* 2045 */;
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
