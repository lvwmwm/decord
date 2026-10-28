// Module ID: 7898
// Function ID: 7899
// Name: transitionToStream
// Dependencies: [4855, 5242, 6704, 7899, 2]
// Exports: default

// Module 7898 (transitionToStream)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5242 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6704 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7899 */;
import ChannelStore from "ChannelStore" /* 4855 */;
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
