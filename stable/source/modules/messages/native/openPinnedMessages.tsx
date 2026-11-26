// Module ID: 12589
// Function ID: 12590
// Name: openPinnedMessages
// Dependencies: [10897, 5483, 2]
// Exports: default

// Module 12589 (openPinnedMessages)
import RootNavigationRef from "RootNavigationRef" /* 5483 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10897 */;
import size from "module_2" /* 2 */;

const constants = ChannelDetailsConstants.ChannelDetailsNavigatorScreens;
const result = size.fileFinishedImporting("modules/messages/native/openPinnedMessages.tsx");

export default function openPinnedMessages(channelId, source) {
  const obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  const tmp = null != rootNavigationRef && rootNavigationRef.isReady();
  if (tmp) {
    const obj2 = { initialRouteName: constants.PINNED_MESSAGES, channelId, source };
    rootNavigationRef.navigate("sidebar", obj2);
  }
};
