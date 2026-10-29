// Module ID: 6864
// Function ID: 6865
// Name: hasSecondaryViewChat
// Dependencies: [4861, 4857, 1084, 6865, 2]
// Exports: default

// Module 6864 (hasSecondaryViewChat)
import Constants from "Constants" /* 1084 */;
import ChannelRecord from "ChannelRecord" /* 4861 */;
import conjureDMAppChannel from "conjureDMAppChannel" /* 6865 */;
import ChannelStore from "ChannelStore" /* 4857 */;
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
