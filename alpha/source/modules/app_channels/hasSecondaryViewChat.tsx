// Module ID: 6354
// Function ID: 6355
// Name: hasSecondaryViewChat
// Dependencies: [2072, 2068, 1087, 6355, 2]
// Exports: default

// Module 6354 (hasSecondaryViewChat)
import Constants from "Constants" /* 1087 */;
import ChannelRecord from "ChannelRecord" /* 2072 */;
import conjureDMAppChannel from "conjureDMAppChannel" /* 6355 */;
import ChannelStore from "ChannelStore" /* 2068 */;
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
