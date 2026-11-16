// Module ID: 6965
// Function ID: 6966
// Name: hasSecondaryViewChat
// Dependencies: [5023, 5019, 1072, 6966, 2]
// Exports: default

// Module 6965 (hasSecondaryViewChat)
import Constants from "Constants" /* 1072 */;
import ChannelRecord from "ChannelRecord" /* 5023 */;
import conjureDMAppChannel from "conjureDMAppChannel" /* 6966 */;
import ChannelStore from "ChannelStore" /* 5019 */;
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
