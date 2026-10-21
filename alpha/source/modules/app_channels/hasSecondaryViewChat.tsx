// Module ID: 6785
// Function ID: 6786
// Name: hasSecondaryViewChat
// Dependencies: [4825, 4821, 1087, 6786, 2]
// Exports: default

// Module 6785 (hasSecondaryViewChat)
import Constants from "Constants" /* 1087 */;
import ChannelRecord from "ChannelRecord" /* 4825 */;
import conjureDMAppChannel from "conjureDMAppChannel" /* 6786 */;
import ChannelStore from "ChannelStore" /* 4821 */;
import size from "module_2" /* 2 */;

const isChannelChatInSidebar = ChannelRecord.isChannelChatInSidebar;
const ChannelTypes = Constants.ChannelTypes;
const result = size.fileFinishedImporting("modules/app_channels/hasSecondaryViewChat.tsx");

export default function hasSecondaryViewChat(arg0) {
  const basicChannel = ChannelStore.getBasicChannel(arg0);
  const obj = ChannelStore;
  if (null != basicChannel) {
    if (isChannelChatInSidebar(basicChannel.type)) {
      return true;
    } else if (basicChannel.type !== ChannelTypes.DM) {
      return false;
    }
  }
  const channel = obj.getChannel(arg0);
  let isDMAppChannelResult = null != channel;
  if (isDMAppChannelResult) {
    const obj2 = conjureDMAppChannel;
    isDMAppChannelResult = obj2.isDMAppChannel(channel);
  }
  return isDMAppChannelResult;
};
