// Module ID: 11098
// Function ID: 11099
// Name: openPinnedMessages
// Dependencies: [10366, 4689, 2]
// Exports: default

// Module 11098 (openPinnedMessages)
import RootNavigationRef from "RootNavigationRef" /* 4689 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10366 */;
import size from "module_2" /* 2 */;

const constants = ChannelDetailsConstants.ChannelDetailsNavigatorScreens;
const result = size.fileFinishedImporting("modules/messages/native/openPinnedMessages.tsx");

export default function openPinnedMessages(channelId, source) {
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  if (tmp) {
    const obj2 = { initialRouteName: constants.PINNED_MESSAGES, channelId, source };
    rootNavigationRef.navigate("sidebar", obj2);
  }
};
