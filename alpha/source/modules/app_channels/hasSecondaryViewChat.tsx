// Module ID: 7059
// Function ID: 7060
// Name: hasSecondaryViewChat
// Dependencies: [5163, 5159, 1072, 7060, 2]
// Exports: default

// Module 7059 (hasSecondaryViewChat)
import Constants from "Constants" /* 1072 */;
import ChannelRecord from "ChannelRecord" /* 5163 */;
import conjureDMAppChannel from "conjureDMAppChannel" /* 7060 */;
import ChannelStore from "ChannelStore" /* 5159 */;
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
