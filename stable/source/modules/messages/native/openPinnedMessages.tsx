// Module ID: 11240
// Function ID: 11241
// Name: openPinnedMessages
// Dependencies: [10653, 4737, 2]
// Exports: default

// Module 11240 (openPinnedMessages)
import RootNavigationRef from "RootNavigationRef" /* 4737 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10653 */;
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
