// Module ID: 6841
// Function ID: 6842
// Name: hasSecondaryViewChat
// Dependencies: [4770, 4766, 1071, 6842, 2]
// Exports: default

// Module 6841 (hasSecondaryViewChat)
import Constants from "Constants" /* 1071 */;
import ChannelRecord from "ChannelRecord" /* 4770 */;
import conjureDMAppChannel from "conjureDMAppChannel" /* 6842 */;
import ChannelStore from "ChannelStore" /* 4766 */;
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
