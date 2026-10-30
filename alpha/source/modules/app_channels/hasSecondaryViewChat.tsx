// Module ID: 6871
// Function ID: 6872
// Name: hasSecondaryViewChat
// Dependencies: [4862, 4858, 1072, 6872, 2]
// Exports: default

// Module 6871 (hasSecondaryViewChat)
import Constants from "Constants" /* 1072 */;
import ChannelRecord from "ChannelRecord" /* 4862 */;
import conjureDMAppChannel from "conjureDMAppChannel" /* 6872 */;
import ChannelStore from "ChannelStore" /* 4858 */;
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
